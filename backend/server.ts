import { Hono } from "hono";
import { cors } from "hono/cors";

const host = process.env.BACKEND_HOST;
const port = Number(process.env.BACKEND_PORT);
const frontendUrl = process.env.FRONTEND_URL ?? "*";

const app = new Hono();

app.use("/api/*", cors({ origin: frontendUrl }));
app.get("/api/hello", (c) => c.json({ message: "Hello, World!" }));

console.log(`Backend listening on http://${host}:${port}`);

export default { hostname: host, port, fetch: app.fetch };
