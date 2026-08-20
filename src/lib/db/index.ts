import { drizzle as drizzleD1, type DrizzleD1Database } from "drizzle-orm/d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import * as schema from "./schema";

// All call sites use the async query API (`await …`), which both drivers
// support, so the D1 type is the canonical one.
export type Db = DrizzleD1Database<typeof schema>;

let _localDb: Db | null = null;

function isCloudflareWorkers(): boolean {
  return globalThis.navigator?.userAgent === "Cloudflare-Workers";
}

export function getDb(): Db {
  if (isCloudflareWorkers()) {
    // Per-request: bindings are request-scoped on Workers.
    const { env } = getCloudflareContext();
    return drizzleD1((env as { DB: D1Database }).DB, { schema });
  }

  // Local Node (next dev / next build): better-sqlite3 against local.db.
  if (!_localDb) {
    /* eslint-disable @typescript-eslint/no-require-imports */
    const Database = require("better-sqlite3");
    const path = require("path");
    const { drizzle } = require("drizzle-orm/better-sqlite3");
    /* eslint-enable @typescript-eslint/no-require-imports */
    const sqlite = new Database(path.join(process.cwd(), "local.db"));
    sqlite.pragma("journal_mode = WAL");
    sqlite.pragma("foreign_keys = ON");
    _localDb = drizzle(sqlite, { schema }) as unknown as Db;
  }
  return _localDb;
}
