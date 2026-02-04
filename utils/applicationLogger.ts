import fs from 'fs/promises';
import path from 'path';
import { z } from 'zod';

// ===== DATA SCHEMA =====
export const ApplicationDataSchema = z.object({
    timestamp: z.string(),
    user_name: z.string(),
    user_email: z.string(),
    user_phone: z.string(),
    startup_name: z.string(),
    stage: z.enum(['idea', 'mvp', 'revenue', 'scale']),
    ip_hash: z.string(),
    has_pitch_deck: z.boolean(),
    status: z.enum(['pending', 'sent_to_telegram', 'failed']),
});

export type ApplicationData = z.infer<typeof ApplicationDataSchema>;

/**
 * CRITICAL: Data Persistence Layer
 * 
 * Purpose: Ensure applicant data is NEVER lost, even if Telegram fails.
 * 
 * Architecture:
 * 1. Data is written to persistent JSONL file (one JSON object per line)
 * 2. This serves as our "database" until we migrate to PostgreSQL/Neon
 * 3. If write fails, we MUST fail the request (fail-safe)
 * 4. Telegram is treated as "best effort notification" layer
 * 
 * Migration Path:
 * - Replace file writes with database INSERT queries
 * - Import existing JSONL data into database
 * - No changes needed in calling code
 */
export class ApplicationLogger {
    private logDir: string;
    private logFile: string;

    constructor() {
        // Store in project root for now
        // In production, this should be mounted persistent volume or database
        this.logDir = path.join(process.cwd(), 'data', 'applications');
        this.logFile = path.join(this.logDir, 'applications.jsonl');
    }

    /**
     * Persist application data to JSONL file
     * 
     * Format: JSONL (JSON Lines) - each line is a valid JSON object
     * Benefits:
     * - Easy to append without loading entire file
     * - Each line is standalone (atomic writes)
     * - Easy to migrate to database (just parse and INSERT)
     * - Can be streamed for analysis
     * 
     * @param data Validated application data
     * @throws Error if write fails (MUST be caught by caller)
     */
    async logApplication(data: ApplicationData): Promise<void> {
        try {
            // Ensure directory exists (creates parent dirs if needed)
            await fs.mkdir(this.logDir, { recursive: true });

            // Validate data schema (defense in depth)
            const validated = ApplicationDataSchema.parse(data);

            // Append to JSONL file (atomic operation)
            const line = JSON.stringify(validated) + '\n';
            await fs.appendFile(this.logFile, line, 'utf-8');

            console.log(`✅ Application persisted: ${validated.user_email}`);
        } catch (error) {
            console.error('❌ CRITICAL: Failed to persist application data:', error);
            // Re-throw to fail the request (fail-safe)
            throw new Error('Failed to persist application data');
        }
    }

    /**
     * Update application status after Telegram send
     * 
     * Note: Currently logs the update. When migrating to DB:
     * UPDATE applications SET status = $1 WHERE user_email = $2
     */
    async updateStatus(
        email: string,
        status: 'sent_to_telegram' | 'failed'
    ): Promise<void> {
        const updateLog = {
            timestamp: new Date().toISOString(),
            email,
            status,
            event: 'status_update'
        };

        try {
            const statusFile = path.join(this.logDir, 'status_updates.jsonl');
            await fs.appendFile(statusFile, JSON.stringify(updateLog) + '\n', 'utf-8');
            console.log(`📝 Status updated: ${email} → ${status}`);
        } catch (error) {
            console.warn('⚠️  Failed to log status update (non-critical):', error);
            // Don't throw - status updates are best-effort
        }
    }

    /**
     * Health check: Can we write to storage?
     * 
     * Used for readiness probes in production
     */
    async healthCheck(): Promise<boolean> {
        try {
            const testFile = path.join(this.logDir, '.health');
            await fs.mkdir(this.logDir, { recursive: true });
            await fs.writeFile(testFile, 'ok', 'utf-8');
            await fs.unlink(testFile);
            return true;
        } catch (error) {
            console.error('❌ Storage health check failed:', error);
            return false;
        }
    }

    /**
     * Get statistics (useful for admin dashboard)
     */
    async getStats(): Promise<{ total: number; today: number }> {
        try {
            const content = await fs.readFile(this.logFile, 'utf-8');
            const lines = content.trim().split('\n').filter(Boolean);

            const today = new Date().toISOString().split('T')[0];
            const todayCount = lines.filter(line => {
                try {
                    const data = JSON.parse(line);
                    return data.timestamp.startsWith(today);
                } catch {
                    return false;
                }
            }).length;

            return {
                total: lines.length,
                today: todayCount
            };
        } catch (error) {
            console.warn('⚠️  Could not read stats:', error);
            return { total: 0, today: 0 };
        }
    }
}

// Singleton instance (shared across requests)
export const applicationLogger = new ApplicationLogger();
