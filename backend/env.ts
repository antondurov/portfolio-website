import { z } from "zod";

const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_KEY: z.string(),
  FRONTEND_ORIGIN: z.string().url(),
});

export const env = EnvSchema.parse(Bun.env);