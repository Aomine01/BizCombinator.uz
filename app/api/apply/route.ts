import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import crypto from 'crypto';

// ===== ENVIRONMENT VALIDATION =====
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// ===== DISTRIBUTED RATE LIMITING (REDIS) =====
// Graceful fallback: If Redis not configured, use in-memory (dev only)
let ratelimit: Ratelimit | null = null;

try {
    if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
        const redis = new Redis({
            url: process.env.UPSTASH_REDIS_REST_URL,
            token: process.env.UPSTASH_REDIS_REST_TOKEN,
        });

        // Sliding window: 5 requests per 60 seconds per IP
        ratelimit = new Ratelimit({
            redis,
            limiter: Ratelimit.slidingWindow(5, '60 s'),
            analytics: true,
            prefix: '@bizcombinator/apply',
        });

        console.log('✅ Redis rate limiting initialized');
    } else {
        console.warn('⚠️  UPSTASH_REDIS not configured - Rate limiting disabled (DEV MODE)');
    }
} catch (error) {
    console.error('❌ Failed to initialize Redis:', error);
    console.warn('⚠️  Continuing without rate limiting');
}

// ===== FILE SIGNATURE VERIFICATION (MAGIC BYTES) =====
const FILE_SIGNATURES = {
    'application/pdf': [0x25, 0x50, 0x44, 0x46], // %PDF
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [0x50, 0x4B, 0x03, 0x04], // ZIP (DOCX)
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': [0x50, 0x4B, 0x03, 0x04], // ZIP (PPTX)
    'application/msword': [0xD0, 0xCF, 0x11, 0xE0], // DOC (OLE)
    'application/vnd.ms-powerpoint': [0xD0, 0xCF, 0x11, 0xE0], // PPT (OLE)
};

async function verifyFileSignature(file: File): Promise<boolean> {
    const buffer = await file.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    const expectedSignature = FILE_SIGNATURES[file.type as keyof typeof FILE_SIGNATURES];

    if (!expectedSignature) {
        return false; // Unknown type
    }

    // Check if first bytes match expected signature
    for (let i = 0; i < expectedSignature.length; i++) {
        if (bytes[i] !== expectedSignature[i]) {
            return false;
        }
    }

    return true;
}

// ===== INPUT VALIDATION SCHEMA (ZOD) =====
const ApplicationSchema = z.object({
    user_name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name is too long')
        .regex(/^[a-zA-Z\u0400-\u04FF\s'-]+$/, 'Name contains invalid characters'), // Supports Latin + Cyrillic

    user_email: z
        .string()
        .email('Invalid email format')
        .max(255, 'Email is too long')
        .toLowerCase()
        .trim(),

    user_phone: z
        .string()
        .regex(
            /^\+998[0-9]{9}$|^998[0-9]{9}$|^[0-9]{9}$/,
            'Invalid Uzbekistan phone number (expected: +998XXXXXXXXX)'
        )
        .transform(phone => {
            // Normalize to +998 format
            if (phone.startsWith('+')) return phone;
            if (phone.startsWith('998')) return '+' + phone;
            return '+998' + phone;
        }),

    startup_name: z
        .string()
        .min(2, 'Startup name must be at least 2 characters')
        .max(200, 'Startup name is too long')
        .trim(),

    stage: z.enum(['idea', 'mvp', 'revenue', 'scale'], {
        message: 'Invalid stage selected',
    }),
});

// ===== UTILITY: SANITIZE FOR MARKDOWN =====
function sanitizeForMarkdown(input: string): string {
    return input
        .replace(/\\/g, '\\\\')
        .replace(/\*/g, '\\*')
        .replace(/_/g, '\\_')
        .replace(/\[/g, '\\[')
        .replace(/\]/g, '\\]')
        .replace(/\(/g, '\\(')
        .replace(/\)/g, '\\)');
}

// ===== UTILITY: HASH IP FOR PRIVACY =====
function hashIP(ip: string): string {
    return crypto.createHash('sha256').update(ip).digest('hex').slice(0, 16);
}

// ===== UTILITY: MASK IP FOR LOGGING =====
function maskIP(ip: string): string {
    const parts = ip.split('.');
    if (parts.length === 4) {
        return `${parts[0]}.${parts[1]}.xxx.xxx`;
    }
    return 'unknown';
}

// ===== MAIN API HANDLER =====
export async function POST(request: Request) {
    const startTime = Date.now();

    // Extract IP address (prioritize X-Forwarded-For for Vercel)
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() :
        request.headers.get('x-real-ip') || 'unknown';

    const hashedIP = hashIP(ip);
    const maskedIP = maskIP(ip);

    console.log(`📩 Application request from ${maskedIP}`);

    // ===== RATE LIMITING =====
    if (ratelimit) {
        try {
            const { success, limit, remaining, reset } = await ratelimit.limit(hashedIP);

            if (!success) {
                console.warn(`🚫 Rate limit exceeded: ${maskedIP} (${remaining}/${limit}, resets in ${Math.floor((reset - Date.now()) / 1000)}s)`);
                return NextResponse.json(
                    {
                        error: 'Too many requests. Please try again later.',
                        retryAfter: Math.floor((reset - Date.now()) / 1000)
                    },
                    {
                        status: 429,
                        headers: {
                            'Retry-After': String(Math.floor((reset - Date.now()) / 1000)),
                            'X-RateLimit-Limit': String(limit),
                            'X-RateLimit-Remaining': String(remaining),
                            'X-RateLimit-Reset': String(reset),
                        }
                    }
                );
            }

            console.log(`✅ Rate limit OK: ${maskedIP} (${remaining}/${limit} remaining)`);
        } catch (error) {
            console.error('⚠️  Rate limit check failed:', error);
            // Continue without rate limiting if Redis fails
        }
    }

    // ===== VALIDATE TELEGRAM CONFIGURATION =====
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.error('❌ Telegram configuration missing');
        return NextResponse.json(
            { error: 'Service temporarily unavailable' },
            { status: 503 }
        );
    }

    try {
        // ===== PARSE FORM DATA =====
        const formData = await request.formData();
        const rawData = {
            // Support both old (user_*) and new field names for compatibility
            user_name: formData.get('user_name') || formData.get('name'),
            user_email: formData.get('user_email') || formData.get('email'),
            user_phone: formData.get('user_phone') || formData.get('phone'),
            startup_name: formData.get('startup_name'),
            stage: formData.get('stage'),
        };

        const pitch_deck = formData.get('pitch_deck') as File | null;

        // ===== VALIDATE INPUT SCHEMA =====
        const validatedData = ApplicationSchema.safeParse(rawData);

        if (!validatedData.success) {
            const errors = validatedData.error.issues.map((e: any) => e.message).join(', ');
            console.warn(`⚠️  Validation failed: ${errors}`);
            return NextResponse.json(
                { error: 'Invalid input', details: validatedData.error.issues },
                { status: 400 }
            );
        }

        const { user_name, user_email, user_phone, startup_name, stage } = validatedData.data;

        // ===== VALIDATE FILE (IF PROVIDED) =====
        if (pitch_deck && pitch_deck.size > 0) {
            const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
            const ALLOWED_TYPES = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.ms-powerpoint',
                'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            ];

            // Check MIME type
            if (!ALLOWED_TYPES.includes(pitch_deck.type)) {
                console.warn(`⚠️  Invalid file type: ${pitch_deck.type}`);
                return NextResponse.json(
                    { error: 'Invalid file type. Only PDF, DOC, DOCX, PPT, PPTX allowed.' },
                    { status: 400 }
                );
            }

            // Check file size
            if (pitch_deck.size > MAX_FILE_SIZE) {
                console.warn(`⚠️  File too large: ${(pitch_deck.size / 1024 / 1024).toFixed(2)}MB`);
                return NextResponse.json(
                    { error: 'File too large. Maximum size is 10MB.' },
                    { status: 400 }
                );
            }

            // 🔒 SECURITY: Verify file signature (magic bytes)
            const isValidSignature = await verifyFileSignature(pitch_deck);
            if (!isValidSignature) {
                console.error(`🚨 SECURITY: File signature mismatch (type: ${pitch_deck.type}, size: ${pitch_deck.size})`);
                return NextResponse.json(
                    { error: 'File verification failed. File may be corrupted or malicious.' },
                    { status: 400 }
                );
            }

            console.log(`📎 File validated: ${pitch_deck.type}, ${(pitch_deck.size / 1024 / 1024).toFixed(2)}MB`);
        }

        // ===== SANITIZE FOR TELEGRAM MARKDOWN =====
        const safe_name = sanitizeForMarkdown(user_name);
        const safe_email = sanitizeForMarkdown(user_email);
        const safe_phone = sanitizeForMarkdown(user_phone);
        const safe_startup = sanitizeForMarkdown(startup_name);
        const safe_stage = sanitizeForMarkdown(stage);

        // ===== CONSTRUCT MESSAGE =====
        const message = `
🚀 *New Application Received*

👤 *Founder:* ${safe_name}
📧 *Email:* ${safe_email}
📞 *Phone:* ${safe_phone}
🏢 *Startup:* ${safe_startup}
📊 *Stage:* ${safe_stage}

_Sent from BizCombinator Website_
        `.trim();

        // ===== SEND TO TELEGRAM =====
        let telegramResponse;

        if (pitch_deck && pitch_deck.size > 0) {
            // Send with document
            const telegramFormData = new FormData();
            telegramFormData.append('chat_id', TELEGRAM_CHAT_ID);
            telegramFormData.append('caption', message);
            telegramFormData.append('parse_mode', 'Markdown');
            telegramFormData.append('document', pitch_deck);

            const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`;

            telegramResponse = await fetch(url, {
                method: 'POST',
                body: telegramFormData,
            });
        } else {
            // Send text only
            const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

            telegramResponse = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown',
                }),
            });
        }

        if (!telegramResponse.ok) {
            const errorText = await telegramResponse.text();
            console.error(`❌ Telegram API failed (${telegramResponse.status})`);
            // 🔒 SECURITY: Don't expose Telegram error to user
            throw new Error('Failed to send application');
        }

        const duration = Date.now() - startTime;
        console.log(`✅ Application sent to Telegram (${duration}ms)`);

        return NextResponse.json({
            success: true,
            message: 'Application submitted successfully'
        });

    } catch (error: any) {
        const duration = Date.now() - startTime;
        console.error(`❌ Application error (${duration}ms):`, error.message);

        // 🔒 SECURITY: Generic error message to user, detailed log internally
        return NextResponse.json(
            { error: 'Failed to submit application. Please try again.' },
            { status: 500 }
        );
    }
}
