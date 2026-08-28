import { Pool } from "pg";
import { projects } from "../db/schema";
import { projects as projectData } from "../src/data/projects";
import { db } from "../db/db";
import { initLog } from "packages";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

const log = initLog(process.env.LOG_LEVEL || "info");

async function populateProjects() {
    try {
        for (const project of projectData) {
            await db.insert(projects).values({
                name: project.name,
                description: project.description,
                tags: project.tags,
                github: project.github,
            });
            log.info(`Inserted project: ${project.name}`);
        }
        log.info("Projects populated successfully.");
    } catch (error) {
        log.error("Error populating projects:", error);
    } finally {
        await pool.end();
    }
}

populateProjects();
