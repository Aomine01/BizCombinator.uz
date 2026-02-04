import { NextResponse } from 'next/server';
import { z } from 'zod';
import crypto from 'crypto';
import { applicationLogger } from '@/utils/applicationLogger';

// ===== STRICT ENVIRONMENT VALIDATION =====
/**
 * CRITICAL: All required environment variables MUST be present in production
 * Fail-fast principle: If configuration is incomplete, don't start the server
 */
const REQUIRED_ENV_VARS = {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
} as const;

// Validate configuration at startup
const missingVars = Object.entries(REQUIRED_ENV_VARS)
    .filter(([_, value]) => !value)
    .map(([key, _]) => key);

if (missingVars.length > 0) {
    console.error('❌ FATAL: Missing required environment variables:', missingVars);
    console.error('⚠️  API will reject all requests until configuration is complete');
}

// ===== REDIS INITIALIZATION (FAIL-CLOSED MODE) =====
/**
 * SECURITY ARCHITECTURE: Fail-Closed Rate Limiting
 * 
 * Traditional "Fail-Open" approach:
 *   try { checkRateLimit() } catch { allow() }  ❌ DANGEROUS
 * 
 * Our "Fail-Closed" approach:
 *   if (!rateLimiter) { reject() }
 *   try { checkRateLimit() } catch { reject() }  ✅ SECURE
 * 
 * Principle: Better to have temporary downtime than to allow unlimited abuse
 */
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

let ratelimit: Ratelimit | null = null;

// Only initialize if ALL required variables are present
if (
    REQUIRED_ENV_VARS.UPSTASH_REDIS_REST_URL &&
    REQUIRED_ENV_VARS.UPSTASH_REDIS_REST_TOKEN
) {
    try {
        const redis = new Redis({
            url: REQUIRED_ENV_VARS.UPSTASH_REDIS_REST_URL,
            token: REQUIRED_ENV_VARS.UPSTASH_REDIS_REST_TOKEN,
        });

        ratelimit = new Ratelimit({
            redis,
            limiter: Ratelimit.slidingWindow(5, '60 s'),
            analytics: true,
            prefix: '@bizcombinator/apply',
        });

        console.log('✅ Redis rate limiting initialized (FAIL-CLOSED mode)');
    } catch (error) {
        console.error('❌ FATAL: Redis initialization failed:', error);
        console.error('⚠️  Rate limiting will REJECT all requests');
        // Don't set ratelimit - this will trigger 503 errors (fail-closed)
    }
} else {
    console.warn('⚠️  CRITICAL: Redis credentials not configured');
    console.warn('⚠️  All API requests will be REJECTED (fail-closed mode)');
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
        return false;
    }

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
        .regex(/^[a-zA-Z\u0400-\u04FF\s'-]+$/, 'Name contains invalid characters'),

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

    // ===== FAIL-CLOSED RATE LIMITING (CRITICAL SECURITY LAYER) =====
    /**
     * SECURITY: If rate limiting is unavailable, we REJECT the request
     * 
     * Why? Because without rate limiting:
     * - Attackers can flood the endpoint
     * - Telegram bot can be rate-limited/banned
     * - Server costs explode
     * - Data integrity at risk
     * 
     * We prefer temporary unavailability over permanent security breach
     */
    if (!ratelimit) {
        console.error('🚨 CRITICAL: Rate limiting not initialized - REJECTING REQUEST');
        return NextResponse.json(
            {
                error: 'Service temporarily unavailable. Rate limiting system offline.',
                code: 'RATE_LIMIT_UNAVAILABLE',
                message: 'Our security systems are currently unavailable. Please try again in a few minutes.'
            },
            {
                status: 503,
                headers: {
                    'Retry-After': '60',
                }
            }
        );
    }

    try {
        const { success, limit, remaining, reset } = await ratelimit.limit(hashedIP);

        if (!success) {
            const retryAfter = Math.floor((reset - Date.now()) / 1000);
            console.warn(`🚫 Rate limit exceeded: ${maskedIP} (${remaining}/${limit}, resets in ${retryAfter}s)`);
            return NextResponse.json(
                {
                    error: 'Too many requests. Please try again later.',
                    retryAfter,
                    message: `You have submitted too many applications. Please wait ${retryAfter} seconds.`
                },
                {
                    status: 429,
                    headers: {
                        'Retry-After': String(retryAfter),
                        'X-RateLimit-Limit': String(limit),
                        'X-RateLimit-Remaining': String(remaining),
                        'X-RateLimit-Reset': String(reset),
                    }
                }
            );
        }

        console.log(`✅ Rate limit OK: ${maskedIP} (${remaining}/${limit} remaining)`);
    } catch (error) {
        // 🔒 FAIL-CLOSED: If Redis communication fails, REJECT the request
        console.error('🚨 CRITICAL: Rate limit check failed - REJECTING REQUEST:', error);
        return NextResponse.json(
            {
                error: 'Service temporarily unavailable. Please try again later.',
                code: 'RATE_LIMIT_ERROR',
                message: 'Our security verification system encountered an error. Please try again in a moment.'
            },
            {
                status: 503,
                headers: {
                    'Retry-After': '30',
                }
            }
        );
    }

    // ===== VALIDATE TELEGRAM CONFIGURATION =====
    if (!REQUIRED_ENV_VARS.TELEGRAM_BOT_TOKEN || !REQUIRED_ENV_VARS.TELEGRAM_CHAT_ID) {
        console.error('❌ Telegram configuration missing');
        return NextResponse.json(
            { error: 'Service configuration error', code: 'CONFIG_ERROR' },
            { status: 503 }
        );
    }

    try {
        // ===== PARSE FORM DATA =====
        const formData = await request.formData();
        const rawData = {
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

            if (!ALLOWED_TYPES.includes(pitch_deck.type)) {
                console.warn(`⚠️  Invalid file type: ${pitch_deck.type}`);
                return NextResponse.json(
                    { error: 'Invalid file type. Only PDF, DOC, DOCX, PPT, PPTX allowed.' },
                    { status: 400 }
                );
            }

            if (pitch_deck.size > MAX_FILE_SIZE) {
                console.warn(`⚠️  File too large: ${(pitch_deck.size / 1024 / 1024).toFixed(2)}MB`);
                return NextResponse.json(
                    { error: 'File too large. Maximum size is 10MB.' },
                    { status: 400 }
                );
            }

            const isValidSignature = await verifyFileSignature(pitch_deck);
            if (!isValidSignature) {
                console.error(`🚨 SECURITY: File signature mismatch (type: ${pitch_deck.type})`);
                return NextResponse.json(
                    { error: 'File verification failed. File may be corrupted or malicious.' },
                    { status: 400 }
                );
            }

            console.log(`📎 File validated: ${pitch_deck.type}, ${(pitch_deck.size / 1024 / 1024).toFixed(2)}MB`);
        }

        // ===== STEP 1: PERSIST DATA (CRITICAL - MUST SUCCEED) =====
        /**
         * DATA INTEGRITY ARCHITECTURE
         * 
         * Order of operations:
         * 1. Validate (done above)
         * 2. Persist to storage (CRITICAL - if this fails, request fails)
         * 3. Send to Telegram (BEST EFFORT - if this fails, data is still safe)
         * 
         * Why this order?
         * - Persistence is our source of truth
         * - Telegram is just a notification mechanism
         * - If Telegram fails, we can retry later from our persistent store
         */
        const applicationData = {
            timestamp: new Date().toISOString(),
            user_name,
            user_email,
            user_phone,
            startup_name,
            stage,
            ip_hash: hashedIP,
            has_pitch_deck: Boolean(pitch_deck && pitch_deck.size > 0),
            status: 'pending' as const,
        };

        try {
            await applicationLogger.logApplication(applicationData);
        } catch (storageError) {
            console.error('🚨 CRITICAL: Failed to persist application data:', storageError);
            return NextResponse.json(
                {
                    error: 'Failed to save your application. Please try again.',
                    code: 'STORAGE_ERROR',
                    message: 'We could not save your application data. Please try submitting again.'
                },
                { status: 500 }
            );
        }

        // ===== STEP 2: SEND TO TELEGRAM (BEST EFFORT) =====
        const safe_name = sanitizeForMarkdown(user_name);
        const safe_email = sanitizeForMarkdown(user_email);
        const safe_phone = sanitizeForMarkdown(user_phone);
        const safe_startup = sanitizeForMarkdown(startup_name);
        const safe_stage = sanitizeForMarkdown(stage);

        const message = `
🚀 *New Application Received*

👤 *Founder:* ${safe_name}
📧 *Email:* ${safe_email}
📞 *Phone:* ${safe_phone}
🏢 *Startup:* ${safe_startup}
📊 *Stage:* ${safe_stage}

_Sent from BizCombinator Website_
        `.trim();

        let telegramSuccess = false;

        try {
            let telegramResponse;

            if (pitch_deck && pitch_deck.size > 0) {
                const telegramFormData = new FormData();
                telegramFormData.append('chat_id', REQUIRED_ENV_VARS.TELEGRAM_CHAT_ID);
                telegramFormData.append('caption', message);
                telegramFormData.append('parse_mode', 'Markdown');
                telegramFormData.append('document', pitch_deck);

                const url = `https://api.telegram.org/bot${REQUIRED_ENV_VARS.TELEGRAM_BOT_TOKEN}/sendDocument`;
                telegramResponse = await fetch(url, {
                    method: 'POST',
                    body: telegramFormData,
                });
            } else {
                const url = `https://api.telegram.org/bot${REQUIRED_ENV_VARS.TELEGRAM_BOT_TOKEN}/sendMessage`;
                telegramResponse = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: REQUIRED_ENV_VARS.TELEGRAM_CHAT_ID,
                        text: message,
                        parse_mode: 'Markdown',
                    }),
                });
            }

            if (!telegramResponse.ok) {
                const errorText = await telegramResponse.text();
                console.error(`❌ Telegram API failed (${telegramResponse.status}):`, errorText);
                throw new Error('Telegram API error');
            }

            telegramSuccess = true;
            console.log('✅ Application sent to Telegram');
        } catch (telegramError) {
            console.error('❌ Telegram send failed (data is SAFE in persistent storage):', telegramError);
            // Don't fail the request - data is already saved
        }

        // ===== UPDATE STATUS =====
        await applicationLogger.updateStatus(
            user_email,
            telegramSuccess ? 'sent_to_telegram' : 'failed'
        );

        const duration = Date.now() - startTime;
        console.log(`✅ Application processed (${duration}ms)`);

        return NextResponse.json({
            success: true,
            message: 'Application submitted successfully. We will contact you soon!'
        });

    } catch (error: any) {
        const duration = Date.now() - startTime;
        console.error(`❌ Application error (${duration}ms):`, error.message);

        return NextResponse.json(
            { error: 'Failed to submit application. Please try again.' },
            { status: 500 }
        );
    }
}
