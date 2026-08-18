import { describe, expect, test } from "vitest";
import { app } from "../index.ts";

describe("Messages API", () => {
    test("POST /api/messages rejects an empty message", async () => {
        const response = await app.request("/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: "" }),
        });
        expect(response.status).toBe(400);
    });

    test("POST /api/messages rejects a missing content field", async () => {
        const response = await app.request("/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        });
        expect(response.status).toBe(400);
    });

    test("GET /api/messages rejects a request without an API key", async () => {
        const response = await app.request("/api/messages");

        expect(response.status).toBe(401);

        expect(await response.json()).toEqual({
            error: "Unauthorized",
        });
    });

    test("GET /api/messages rejects an incorrect API key", async () => {
        const response = await app.request("/api/messages", {
            headers: {
                "x-api-key": "wrong-key",
            },
        });

        expect(response.status).toBe(401);

        expect(await response.json()).toEqual({
            error: "Unauthorized",
        });
    });
});
