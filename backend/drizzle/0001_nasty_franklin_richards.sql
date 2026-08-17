ALTER TABLE "messages" ALTER COLUMN "content" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "messages" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "tags" text[] NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "github" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" DROP COLUMN "created_at";