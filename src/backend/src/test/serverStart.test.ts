import { app } from "../index.ts";

describe("GET /", () => {
  it("reports the API is running", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ message: "API running" });
  });
});

describe("GET /api/health", () => {
  it("reports the database as connected", async () => {
    const res = await app.request("/api/health");
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ status: "ok", database: "connected" });
  });
});
