// Import Joi for validating user input
import Joi from 'joi';

// Validation schema for user registration
export const registerSchema = Joi.object({
  // 'name' must be a string between 3 and 30 characters, and is required
  name: Joi.string().min(3).max(30).required(),

  // 'email' must be a valid email format and is required
  email: Joi.string().email().required(),

  // 'password' must be at least 8 characters,
  // and contain at least one lowercase, one uppercase letter, one number, and one special character
  password: Joi.string()
    .min(8)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'))
    .message('Password must contain at least one uppercase, one lowercase, one number and one special character')
    .required(),
});

//  Validation schema for user login
export const loginSchema = Joi.object({
  // 'email' must be a valid email and is required
  email: Joi.string().email().required(),

  // 'password' is required (no special rules here)
  password: Joi.string().required(),
});

// Validation schema for changing password
export const changePasswordSchema = Joi.object({
  // 'currentPassword' is required
  currentPassword: Joi.string().required(),

  // 'newPassword' must be strong like in registration
  // and must not be the same as the current password
  newPassword: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
    .required()
    .invalid(Joi.ref('currentPassword')) // Makes sure it's different from the current one
    .messages({
      'string.pattern.base': 'Password must contain at least one uppercase, one lowercase, one number and one special character',
      'any.invalid': 'New password cannot be the same as current password'
    })
});
