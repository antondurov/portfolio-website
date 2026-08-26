import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { env } from "./env.ts";
import { db } from "../db/db.ts";
import { getAllProjects, getProjectById } from "./repositories/projects.ts";
import { initLog } from "packages";

export const app = new Hono();

const log = initLog(process.env.LOG_LEVEL || "info");

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
      log.error("Database connection error:", error);
        return c.json({ status: "error", database: error }, 500);
    }
});

app.get("/api/projects", async (c) => {
  try {
    const projects = await getAllProjects();
    return c.json(projects);
  } catch (error) {
    log.error("Error fetching projects:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

app.get("/api/projects/:id", async (c) => {
    const id = Number(c.req.param("id"));

    try {
      if (isNaN(id)) {
        log.error(`Invalid project ID: ${c.req.param("id")}`);
          return c.json({ error: "Invalid project ID" }, 400);
      }

      const project = await getProjectById(id);

      if (!project) {
          return c.json({ error: "Project not found" }, 404);
      }
      return c.json(project);
    } catch (error) {
      log.error("Error fetching project by ID:", error);
      return c.json({ error: "Internal server error" }, 500);
    }
});

export default {
    port: 3000,
    fetch: app.fetch,
}

log.info("Running on port 3000");
