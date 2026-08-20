import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// No incremental cache override — add the R2 incremental cache if ISR/SSG
// caching across requests becomes necessary.
export default defineCloudflareConfig({});
