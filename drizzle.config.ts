//config drizzle
import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local file
dotenv.config({path:".env.local"});
//cond if not found
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in .env.local');
}
export default defineConfig({
  schema: './lib/db/schema.ts',
  //like migrations file
  out: './drizzle',
  // par default is pg dialect you can use mysql
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  // when migrating we put all the file with this name 
  migrations: {
    table:"__drizzle_migrations",
    //how schema to be
    schema: "public",
  },
  //show all migrations behind the scene
  verbose: true,
//ask for confirmation
strict: true,
});
