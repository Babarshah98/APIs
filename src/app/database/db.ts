import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
 
neonConfig.fetchConnectionCache = true;
 
const sql = neon("postgres://babershah98:6UTWdFYpcDC2@ep-billowing-limit-44966204-pooler.us-east-2.aws.neon.tech/neondb"); 
export  const db = drizzle(sql);
 