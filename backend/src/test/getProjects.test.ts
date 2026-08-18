import { app } from "../index.ts";

interface Project {
    id: string;
    name: string;
    description: string;
    tags: string[];
    github: string;
}

describe("GET /api/projects", () => {
   it("should return a list of projects", async () => {
        const response = await app.request("http://localhost:3000/api/projects");
        expect(response.status).toBe(200);
        const data = await response.json() as Project[];
        console.log("Received data:", data);

        expect(data.length).toBeGreaterThan(0);
        expect(data[0]).toHaveProperty("id");
        expect(data[0]).toHaveProperty("name");
        expect(data[0]).toHaveProperty("description");
        expect(data[0]).toHaveProperty("tags");
        expect(data[0]).toHaveProperty("github");
   })
})
