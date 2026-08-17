import fetch from "node-fetch";
import "../index.ts";

describe("Server Start Test", () => {
    it("should start the server without errors", async () => {
        const server = await import("../index.ts");
        expect(server).toBeDefined();
    });
})
describe("Health Check Test", () => {
    it("should return status ok and database connected", async () => {
        const response = await fetch("http://localhost:3000/api/health");
        const data = await response.json() as { status: string, database: string };
        expect(data.status).toBe("ok");
        expect(data.database).toBe("connected");
    }, 5000)
})
