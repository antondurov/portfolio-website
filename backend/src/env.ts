import { z } from "zod";

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
