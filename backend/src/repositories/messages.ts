import { db } from "../db/db";
import { messages } from "../db/schema";

export async function createMessage(content: string) {
    return await db.insert(messages).values({
        content,
    }).returning();
}

export async function getAllMessages() {
    return await db.select().from(messages);
}
