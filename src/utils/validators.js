export const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
export const isPasswordValid = (password) => password.length >= 6
