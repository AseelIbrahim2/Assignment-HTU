import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Optional: Test the connection when the server starts
pool.connect()
  .then(() => {
    console.log('✅ PostgreSQL connected successfully');
  })
  .catch((err) => {
    console.error('❌ PostgreSQL connection error:', err);
  });

export default pool;
// بقدر اصدر من الفايل هاد اي اشي بدي ياه









