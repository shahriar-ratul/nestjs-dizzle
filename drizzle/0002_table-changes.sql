ALTER TABLE "users" ADD COLUMN "username" varchar(256);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "email" varchar(256);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" varchar(256);--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "age";