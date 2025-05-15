// connect to neon database
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
//import from schema
import * as schema from './schema';

const sql = neon(process.env.DATABASE_URL!);
// create a drizzle instance
export const db = drizzle(sql, {
     schema
});
