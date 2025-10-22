// src/utils/validation.js

/**
 * Memvalidasi format email dasar.
 * @param {string} email - String email yang akan divalidasi.
 * @returns {boolean} - True jika format email valid.
 */
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);