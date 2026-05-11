import { describe, it, expect } from 'vitest';
import { isValidVietnamesePhone } from './validation';

describe('isValidVietnamesePhone', () => {
  describe('valid phone numbers', () => {
    it('accepts a 10-digit number starting with 0', () => {
      expect(isValidVietnamesePhone('0901234567')).toBe(true);
    });

    it('accepts 0 followed by exactly 9 other digits', () => {
      expect(isValidVietnamesePhone('0123456789')).toBe(true);
    });

    it('accepts a number starting with 03x', () => {
      expect(isValidVietnamesePhone('0312345678')).toBe(true);
    });

    it('accepts a number starting with 07x', () => {
      expect(isValidVietnamesePhone('0712345678')).toBe(true);
    });
  });

  describe('invalid phone numbers', () => {
    it('rejects an empty string', () => {
      expect(isValidVietnamesePhone('')).toBe(false);
    });

    it('rejects a number that does not start with 0', () => {
      expect(isValidVietnamesePhone('1901234567')).toBe(false);
    });

    it('rejects a number with fewer than 10 digits (9 digits)', () => {
      expect(isValidVietnamesePhone('090123456')).toBe(false);
    });

    it('rejects a number with more than 10 digits (11 digits)', () => {
      expect(isValidVietnamesePhone('09012345678')).toBe(false);
    });

    it('rejects a number containing letters', () => {
      expect(isValidVietnamesePhone('090123456a')).toBe(false);
    });

    it('rejects a number with spaces', () => {
      expect(isValidVietnamesePhone('090 123 4567')).toBe(false);
    });

    it('rejects a number with dashes', () => {
      expect(isValidVietnamesePhone('090-123-4567')).toBe(false);
    });

    it('rejects a number starting with +84', () => {
      expect(isValidVietnamesePhone('+84901234567')).toBe(false);
    });
  });
});
