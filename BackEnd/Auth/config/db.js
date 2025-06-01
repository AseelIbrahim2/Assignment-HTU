
// Import the 'pg' library to connect to PostgreSQL
import pg from "pg";

// Import dotenv to load environment variables from .env file
import dotenv from "dotenv";

// Load environment variables (like DATABASE_URL)
dotenv.config();

// Destructure Pool from pg to create a connection pool
const { Pool } = pg;

// Create a new pool using the database URL from the .env file
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,

  // If the app is running in production, enable SSL
  // This is important for secure connections in platforms like Heroku
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false } // accept self-signed certificates
      : false, // disable SSL in development
});

// Try to connect to the database and log success
pool.connect().then(() => {
  console.log("Database connected!");
});

// Create and export a helper function to run SQL queries
// It takes the query text and parameters (safe against SQL injection)
export const query = (text, params) => pool.query(text, params);

// Export the pool itself in case you need advanced DB operations elsewhere
export default pool;
