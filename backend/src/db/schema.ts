import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  tags: text("tags").array().notNull(),
  github: varchar("github", { length: 255 }).notNull(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey().notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
