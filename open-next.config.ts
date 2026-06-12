import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Defaults are enough: this site has no ISR/revalidation, so no R2/KV cache needed.
export default defineCloudflareConfig();
