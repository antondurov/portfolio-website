import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  tags: text("tags").array().notNull(),
  github: varchar("github", { length: 255 }).notNull(),
});
