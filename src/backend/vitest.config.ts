import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    env: {
      DATABASE_URL: "postgres://pglite/test",
      API_KEY: "test",
      FRONTEND_ORIGIN: "http://localhost:5173",
    },
    // swap the Neon client for an in-memory Postgres in every importer
    alias: [{ find: /\/db\/db\.ts$/, replacement: "/db/testDb.ts" }],
  },
});
