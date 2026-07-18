import { z } from "zod";
import Bun from "bun";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_KEY: z.string().min(1),
  FRONTEND_ORIGIN: z.string().url(),
});

export const env = envSchema.parse({
  DATABASE_URL: Bun.env.DATABASE_URL,
  API_KEY: Bun.env.API_KEY,
  FRONTEND_ORIGIN: Bun.env.FRONTEND_ORIGIN,
});
