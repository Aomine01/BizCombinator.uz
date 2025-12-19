import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// ===== RATE LIMITING =====
// Simple in-memory rate limiter (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10; // 10 requests per minute per IP (handles shared IPs)

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetTime) {
        // First request or window expired
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return true;
    }

    if (record.count >= MAX_REQUESTS_PER_WINDOW) {
        return false; // Rate limit exceeded
    }

    record.count++;
    return true;
}

// ===== INPUT SANITIZATION =====
function sanitizeForMarkdown(input: string): string {
    // Escape Markdown special characters to prevent injection
    return input
        .replace(/\\/g, '\\\\')
        .replace(/\*/g, '\\*')
        .replace(/_/g, '\\_')
        .replace(/\[/g, '\\[')
        .replace(/\]/g, '\\]')
        .replace(/\(/g, '\\(')
        .replace(/\)/g, '\\)');
}

// ===== FILE VALIDATION =====
const ALLOWED_FILE_TYPES = [
    'application/pdf',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(request: Request) {
    console.log("----- TELEGRAM DATA RECEIVED -----");

    // Rate Limiting Check
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
        console.warn(`RATE LIMIT EXCEEDED for IP: ${ip}`);
        return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            { status: 429 }
        );
    }

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.error("ERROR: Telegram keys are missing from environment variables.");
        return NextResponse.json(
            { error: 'Telegram configuration missing on server' },
            { status: 500 }
        );
    }

    try {
        const formData = await request.formData();
        const user_name = formData.get('user_name') as string;
        const user_email = formData.get('user_email') as string;
        const user_phone = formData.get('user_phone') as string;
        const startup_name = formData.get('startup_name') as string;
        const stage = formData.get('stage') as string;
        const pitch_deck = formData.get('pitch_deck') as File | null;

        // File Validation
        if (pitch_deck && pitch_deck.size > 0) {
            if (!ALLOWED_FILE_TYPES.includes(pitch_deck.type)) {
                return NextResponse.json(
                    { error: 'Invalid file type. Please upload PDF, PPT, or DOC files only.' },
                    { status: 400 }
                );
            }
            if (pitch_deck.size > MAX_FILE_SIZE) {
                return NextResponse.json(
                    { error: 'File too large. Maximum size is 10MB.' },
                    { status: 400 }
                );
            }
        }

        // Sanitize inputs to prevent Markdown injection
        const safe_name = sanitizeForMarkdown(user_name || '');
        const safe_email = sanitizeForMarkdown(user_email || '');
        const safe_phone = sanitizeForMarkdown(user_phone || '');
        const safe_startup = sanitizeForMarkdown(startup_name || '');
        const safe_stage = sanitizeForMarkdown(stage || '');

        // Construct the message/caption
        const message = `
🚀 *New Application Received*

👤 *Founder:* ${safe_name}
📧 *Email:* ${safe_email}
📞 *Phone:* ${safe_phone}
🏢 *Startup:* ${safe_startup}
📊 *Stage:* ${safe_stage}

_Sent from BizCombinator Website_
        `;

        // Check if we have a file to send
        if (pitch_deck && pitch_deck.size > 0) {
            console.log("Sending Document...");

            const telegramFormData = new FormData();
            telegramFormData.append('chat_id', TELEGRAM_CHAT_ID);
            telegramFormData.append('caption', message);
            telegramFormData.append('parse_mode', 'Markdown');
            telegramFormData.append('document', pitch_deck);

            const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`;

            const response = await fetch(url, {
                method: 'POST',
                body: telegramFormData,
                // Do NOT set Content-Type header, let fetch set it with boundary
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error("TELEGRAM DOCUMENT API ERROR:", errorText);
                throw new Error(`Telegram Document API Failed: ${errorText}`);
            }
        } else {
            // Send text only
            console.log("Sending Text Message...");
            const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown',
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Telegram Message API Failed: ${errorText}`);
            }
        }

        console.log("SUCCESS: Sent to Telegram.");
        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('SERVER ERROR:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to send message' },
            { status: 500 }
        );
    }
}
