import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;

// Hash password
export const hashPassword = async (password) => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

// Verify password
export const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Check if password is admin password
export const isAdminPassword = (password) => {
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
  return password === adminPassword;
};

// Get access level: 'admin', 'author', or null
export const getAccessLevel = async (password, postPassword) => {
  if (isAdminPassword(password)) {
    return 'admin';
  }

  const isAuthor = await verifyPassword(password, postPassword);
  if (isAuthor) {
    return 'author';
  }

  return null;
};
