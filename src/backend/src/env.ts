import { z } from "zod";
import { initLog } from "packages";

const log = initLog(process.env.LOG_LEVEL || "info");

if (!process.env.DATABASE_URL) {
  log.error("DATABASE_URL is not defined in the environment variables.");
  throw new Error("DATABASE_URL is not defined in the environment variables.");
}

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_KEY: z.string().min(1),
  FRONTEND_ORIGIN: z.string().url(),
});

export const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  API_KEY: process.env.API_KEY,
  FRONTEND_ORIGIN: process.env.FRONTEND_ORIGIN,
});
