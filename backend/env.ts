import { z } from "zod";

const EnvSchema = z.object({
  DATABASE_URL: z.string(),
  API_KEY: z.string(),
  FRONTEND_ORIGIN: z.string(),
});

export const env = EnvSchema.parse(Bun.env);
