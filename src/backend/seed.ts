import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { projects } from "./src/db/schema";

import { initLog } from "packages";

const log = initLog();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

async function seed() {
    // Seed projects
    const project1 = await db.insert(projects).values({
        name: "Project 1",
        description: "Description for Project 1",
        tags: ["tag1", "tag2"],
        github: "www.github.com/project1",
    }).returning();

    const project2 = await db.insert(projects).values({
        name: "Project 2",
        description: "Description for Project 2",
        tags: ["tag3", "tag4"],
        github: "www.github.com/project2",
    }).returning();

    if (!project1[0] || !project2[0]) {
        throw new Error("Failed to seed projects.");
    }

    log.info("Database seeded!");
    await pool.end();
}

seed().catch(async (error) => {
    console.error("Error seeding the database:", error);
    await pool.end();
    process.exit(1);
})
