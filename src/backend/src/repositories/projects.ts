import { db } from "../db/db.ts";
import { projects } from "../db/schema.ts";
import { eq } from "drizzle-orm";

type Project = typeof projects.$inferInsert;

export async function getAllProjects(): Promise<Project[]> {
    return await db.select().from(projects);
}

export async function getProjectById(id: number): Promise<Project | null> {
    const result = await db.select().from(projects).where(eq(projects.id, id));

    return result[0] ?? null;
}
