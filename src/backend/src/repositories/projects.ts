import { db } from "../db/db.ts";
import { projects } from "../db/schema.ts";
import { eq } from "drizzle-orm";

export async function getAllProjects() {
    return await db.select().from(projects);
}

export async function getProjectById(id: number) {
    const result = await db.select().from(projects).where(eq(projects.id, id));

    return result[0] ?? null;
}
