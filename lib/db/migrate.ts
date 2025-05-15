import { migrate } from "drizzle-orm/neon-http/migrator";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in .env.local");
}

async function runMigrations() {
try {
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql)
    await migrate(db, {
      migrationsFolder: "./drizzle",
      migrationsTable: "__drizzle_migrations",
      migrationsSchema: "public",
    });
    console.log("Migrations completed successfully.");
    }
    catch (error) {
        console.log("Error running migrations:");
        process.exit(1);
    }
}
 
runMigrations()