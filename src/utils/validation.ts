/**
 * Validates a Vietnamese phone number.
 * Rules: exactly 10 digits, starts with 0.
 * Pattern: /^0\d{9}$/
 */
export function isValidVietnamesePhone(phone: string): boolean {
  return /^0\d{9}$/.test(phone);
}
