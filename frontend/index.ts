const host = process.env.FRONTEND_HOST ?? "localhost";
const port = Number(process.env.FRONTEND_PORT ?? 3000);
const backendUrl = process.env.BACKEND_URL ?? "http://localhost:3001";

const html = (await Bun.file(`${import.meta.dir}/index.html`).text()).replaceAll(
  "__BACKEND_URL__",
  backendUrl,
);

Bun.serve({
  hostname: host,
  port,
  fetch: (req) =>
    new URL(req.url).pathname === "/"
      ? new Response(html, { headers: { "Content-Type": "text/html" } })
      : new Response("Not Found", { status: 404 }),
});

console.log(`Frontend listening on http://${host}:${port}`);
