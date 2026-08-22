import { app } from "../index.ts";
import { db } from "../db/db.ts";
import { projects } from "../db/schema.ts";

const sample = {
  name: "portfolio-website",
  description: "Personal site + API.",
  tags: ["react", "hono", "drizzle"],
  github: "https://github.com/p3ld3v/portfolio-website",
};

beforeEach(async () => {
  await db.delete(projects);
  await db.insert(projects).values(sample);
});

describe("GET /api/projects", () => {
  it("returns the seeded projects", async () => {
    const res = await app.request("/api/projects");
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject([sample]);
  });
});

describe("GET /api/projects/:id", () => {
  it("returns one project", async () => {
    const [row] = await db.select().from(projects);
    const res = await app.request(`/api/projects/${row!.id}`);
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject(sample);
  });

  it("404s for an unknown id", async () => {
    expect((await app.request("/api/projects/999999")).status).toBe(404);
  });

  it("400s for a non-numeric id", async () => {
    expect((await app.request("/api/projects/abc")).status).toBe(400);
  });
});
