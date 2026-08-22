import { Pool } from "pg";
import { projects } from "./schema";
import { projects as projectData } from "../../../src/data/projects";
import { db } from "./db";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

// console.log("Database URL:", process.env.DATABASE_URL);
async function populateProjects() {
    try {
        for (const project of projectData) {
            await db.insert(projects).values({
                name: project.name,
                description: project.description,
                tags: project.tags,
                github: project.github,
            });
            console.log(`Inserted project: ${project.name}`);
        }
        console.log("Projects populated successfully.");
    } catch (error) {
        console.error("Error populating projects:", error);
    } finally {
        await pool.end();
    }
}

populateProjects();
