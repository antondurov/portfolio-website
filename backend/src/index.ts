import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { env } from "../env";
import { db } from "./db/db";
import { getAllProjects, getProjectById } from "./repositories/projects";

const app = new Hono();

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

app.get("api/health", async (c) => {
    try {
        await db.execute("SELECT 1");
        return c.json({ status: "ok", database: "connected" });
    } catch (error) {
        return c.json({ status: "error", database: error }, 500);
    }
});

app.get("api/projects", (c) => {
    return c.json(getAllProjects());
});

app.get("api/projects/:id", async (c) => {
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

export default {
    port: 3000,
    fetch: app.fetch,
}
