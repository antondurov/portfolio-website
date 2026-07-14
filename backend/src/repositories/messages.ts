import { db } from "../db/db";
import { messages } from "../db/schema";
import { eq } from "drizzle-orm";

export async function createMessage(projectId: number, content: string) {
    return await db.insert(messages).values({
        projectId,
        content,
    }).returning();
}

export async function getMessages(projectId: number) {
    return await db.select().from(messages).where(eq(messages.projectId, projectId));
}