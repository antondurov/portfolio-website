import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { env } from "./env.ts";
import { db } from "./db/db.ts";
import { getAllProjects, getProjectById } from "./repositories/projects.ts";
import { createMessage, getAllMessages } from "./repositories/messages.ts";
import { z } from "zod";
import type { Next, Context } from "hono";

export const app = new Hono();
const apiKeyMiddleware = async (c: Context, next: Next) => {
    const apiKey = c.req.header("x-api-key");
    if (apiKey !== env.API_KEY) {
        return c.json({ error: "Unauthorized" }, 401);
    }
    await next();
};

app.use(
  "*",
  cors({
    origin: env.FRONTEND_ORIGIN,
  })
);

app.use("*", logger());

app.get("/", (c) => {
  return c.json({
    message: "API running",
  });
});

app.get("/api/health", async (c) => {
    try {
        await db.execute("SELECT 1");
        return c.json({ status: "ok", database: "connected" });
    } catch (error) {
        return c.json({ status: "error", database: error }, 500);
    }
});

app.get("/api/projects", async (c) => {
    const projects = await getAllProjects();
    return c.json(projects);
});

app.get("/api/projects/:id", async (c) => {
    const id = Number(c.req.param("id"));

    if (isNaN(id)) {
        return c.json({ error: "Invalid project ID" }, 400);
    }

    const project = await getProjectById(id);

    if (!project) {
        return c.json({ error: "Project not found" }, 404);
    }

    return c.json(project);
});

const messageSchema = z.object({
        content: z.string().min(1),
});

app.post("/api/messages", async (c) => {
    const body = await c.req.json();
    const parseResult = messageSchema.safeParse(body);

    if (!parseResult.success) {
        return c.json({ error: "Invalid request body", details: parseResult.error.format() }, 400);
    }

    const { content } = parseResult.data;

    try {
        const message = await createMessage(content);
        return c.json(message, 201);
    } catch (error) {
        console.log("Error creating message:", error);
        return c.json({ error: "Failed to create message" }, 500);
    }
});

app.get("/api/messages", apiKeyMiddleware, async (c) => {
    try {
        const messages = await getAllMessages();
        return c.json(messages);
    } catch (error) {
        console.error("Error fetching messages", error);
        return c.json({ error: "Failed to fetch messages" }, 500);
    }
});

export default {
    port: 3000,
    fetch: app.fetch,
}
