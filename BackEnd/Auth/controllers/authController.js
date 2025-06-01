// Import the user model to interact with the database
import UserModel from '../models/userModel.js';

// Import schemas to validate inputs for register, login, and change password
import { registerSchema, loginSchema, changePasswordSchema } from '../utils/validation.js';

// Create the AuthController object that holds all auth-related logic
const AuthController = {
  
  // Register a new user
  async register(req, res, next) {
    try {
      // Validate the request body using Joi schema
      const { error, value } = registerSchema.validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const { email, password, name } = value;

      // Check if the email is already used
      const existingUser = await UserModel.findByEmail(email);
      if (existingUser) throw new Error('Email already in use');

      // Create the new user in the database
      const user = await UserModel.create({ email, password, name });

      // Generate a JWT token for the new user
      const token = UserModel.generateToken(user.id);
      
      // Send back the user info (without password) and the token
      res.status(201).json({
        success: true,
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: user.created_at
        }
      });
    } catch (error) {
      next(error); // Pass the error to the error handler
    }
  },

  // Login existing user
  async login(req, res, next) {
    try {
      // Validate request body using Joi
      const { error, value } = loginSchema.validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const { email, password } = value;

      // Find user by email
      const user = await UserModel.findByEmail(email);
      if (!user) throw new Error('Invalid credentials');

      // Check if the password matches the hashed one
      const isMatch = await UserModel.verifyPassword(password, user.password);
      if (!isMatch) throw new Error('Invalid credentials');

      // Generate token for the user
      const token = UserModel.generateToken(user.id);

      // Send back token and user info
      res.json({
        success: true,
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    } catch (error) {
      next(error);
    }
  },

  // Get the currently logged-in user's info
  async getMe(req, res, next) {
    try {
      // req.user is set by the authentication middleware
      const user = await UserModel.findById(req.user.id);
      if (!user) throw new Error('User not found');

      res.json({
        success: true,
        user
      });
    } catch (error) {
      next(error);
    }
  },

  // Change password for the logged-in user
  async changePassword(req, res, next) {
    try {
      // Validate request body
      const { error, value } = changePasswordSchema.validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const { currentPassword, newPassword } = value;

      // Get the current user info using email from token
      const user = await UserModel.findByEmail(req.user.email);

      // Check if current password is correct
      const isMatch = await UserModel.verifyPassword(currentPassword, user.password);
      if (!isMatch) throw new Error('Current password is incorrect');

      // Update the password to the new one
      await UserModel.updatePassword(req.user.id, newPassword);

      res.json({
        success: true,
        message: 'Password updated successfully'
      });
    } catch (error) {
      next(error);
    }
  }
};

// Export the AuthController to use in routes
export default AuthController;
