import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  projectId: serial("project_id").references(() => projects.id),
  content: text("content"),
  createdAt: timestamp("created_at").defaultNow(),
});