import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Makes Cloudflare bindings (D1, AI, etc.) available via getCloudflareContext()
// during `next dev`.
initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  serverExternalPackages: ["better-sqlite3"],
  // Version-skew protection. A tab left open across a redeploy otherwise asks
  // the new Worker for the old build's chunks and RSC payloads, which surfaces
  // as an opaque "Server Components render" error. Stamping the build lets
  // Next detect the mismatch and do a full reload instead.
  deploymentId: process.env.DEPLOYMENT_ID ?? String(Date.now()),
};

export default nextConfig;
