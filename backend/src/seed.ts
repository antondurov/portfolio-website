import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { projects, messages } from "./db/schema";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

async function seed() {
    // Seed projects
    const project1 = await db.insert(projects).values({
        name: "Project 1",
        description: "Description for Project 1",
    }).returning();

    const project2 = await db.insert(projects).values({
        name: "Project 2",
        description: "Description for Project 2",
    }).returning();

    if (!project1[0] || !project2[0]) {
        throw new Error("Failed to seed projects.");
    }

    // Seed messages for Project 1
    await db.insert(messages).values([
        { projectId: project1[0].id, content: "Message 1 for Project 1" },
        { projectId: project1[0].id, content: "Message 2 for Project 1" },
    ]);

    // Seed messages for Project 2
    await db.insert(messages).values([
        { projectId: project2[0].id, content: "Message 1 for Project 2" },
        { projectId: project2[0].id, content: "Message 2 for Project 2" },
    ]);
}

seed().catch((error) => {
    console.error("Error seeding the database:", error);
    process.exit(1);
})
