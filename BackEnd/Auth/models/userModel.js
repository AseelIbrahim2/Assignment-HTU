// Import bcryptjs for password hashing and comparison
import bcrypt from 'bcryptjs';

// Import jsonwebtoken for creating and verifying tokens
import jwt from 'jsonwebtoken';

// Import the query function to interact with the database
import { query } from '../config/db.js';

// Define the UserModel object with user-related database functions
const UserModel = {
  // Create a new user in the database
  async create({ email, password, name }) {
    try {
      // Hash the user's password using bcrypt and salt rounds from the .env file
      const hashedPassword = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUNDS));
      
      // Insert the new user's info into the "users" table and return selected fields
      const { rows } = await query(
        `INSERT INTO users (email, password, name) 
         VALUES ($1, $2, $3) 
         RETURNING id, email, name, created_at`,
        [email, hashedPassword, name]
      );
      
      // Return the newly created user's data (without password)
      return rows[0];
    } catch (error) {
      // Check if the error is about duplicate email (PostgreSQL error code 23505)
      if (error.code === '23505') {
        throw new Error('Email already exists');
      }
      // Throw any other error
      throw error;
    }
  },

  // Find a user by their email
  async findByEmail(email) {
    const { rows } = await query(
      'SELECT id, email, password, name FROM users WHERE email = $1',
      [email]
    );
    // Return the user if found, otherwise undefined
    return rows[0];
  },

  // Find a user by their ID
  async findById(id) {
    const { rows } = await query(
      'SELECT id, email, name FROM users WHERE id = $1',
      [id]
    );
    return rows[0];
  },

  // Generate a JWT token for a given user ID
  generateToken(userId) {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      // Set token expiration (default is 1 day)
      expiresIn: process.env.JWT_EXPIRES_IN || '1d',
    });
  },

  // Compare a plain password with a hashed one bcrypt.compare() fun
  async verifyPassword(candidatePassword, hashedPassword) {
    return await bcrypt.compare(candidatePassword, hashedPassword);
  },

  // Update a user's password in the database
  async updatePassword(userId, newPassword) {
    // Hash the new password before saving
    const hashedPassword = await bcrypt.hash(newPassword, parseInt(process.env.BCRYPT_SALT_ROUNDS));
    // Update the password in the "users" table
    await query(
      'UPDATE users SET password = $1 WHERE id = $2',
      [hashedPassword, userId]
    );
  }
};

// Export the UserModel so other files can use its functions
export default UserModel;
