import { z } from "zod";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const serverSchema = z.object({
  // Google SSO
  GOOGLE_OAUTH_CLIENT_ID: z.string().min(1),
  GOOGLE_OAUTH_CLIENT_SECRET: z.string().min(1),
  AUTH_SECRET: z.string().min(16),
  STUDENT_EMAIL_DOMAIN: z.string().min(1),
  // Bare staff domain — any verified email here is admitted as a teacher.
  STAFF_EMAIL_DOMAIN: z.string().min(1),
  ADMIN_EMAILS: z.string().min(1),
  // Break-glass staff password login, used if Google sign-in is unavailable.
  ADMIN_PASSWORD: z.string().min(1),
  // The reading companion chatbot.
  ANTHROPIC_API_KEY: z.string().min(1),
  // Optional: comma-separated emails allowed in regardless of domain, for
  // local dev before the GCP redirect URI is confirmed.
  TEST_EMAILS: z.string().optional().default(""),
});

type Env = z.infer<typeof serverSchema>;

let _env: Env | null = null;

/**
 * Vars/secrets live on the Cloudflare context — on the deployed Worker and, via
 * initOpenNextCloudflareForDev(), during `next dev`. We merge process.env under
 * it as a fallback for tooling/test contexts where the CF context is absent.
 */
function readRawEnv(): Record<string, unknown> {
  let ctxEnv: Record<string, unknown> = {};
  try {
    ctxEnv = getCloudflareContext().env as unknown as Record<string, unknown>;
  } catch {
    // Not inside a Cloudflare request context.
  }
  return { ...(process.env as unknown as Record<string, unknown>), ...ctxEnv };
}

/** Returns validated server-side env. Validates lazily on first call, not at module load. */
export function getEnv(): Env {
  if (typeof window !== "undefined") {
    // Should never be called on the client — return dummy values
    return {
      GOOGLE_OAUTH_CLIENT_ID: "",
      GOOGLE_OAUTH_CLIENT_SECRET: "",
      AUTH_SECRET: "",
      STUDENT_EMAIL_DOMAIN: "",
      STAFF_EMAIL_DOMAIN: "",
      ADMIN_EMAILS: "",
      ADMIN_PASSWORD: "",
      ANTHROPIC_API_KEY: "",
      TEST_EMAILS: "",
    };
  }
  if (!_env) {
    const parsed = serverSchema.safeParse(readRawEnv());
    if (!parsed.success) {
      throw new Error(
        `Missing environment variables: ${JSON.stringify(parsed.error.flatten().fieldErrors)}`,
      );
    }
    _env = parsed.data;
  }
  return _env;
}
