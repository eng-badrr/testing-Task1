
import { add, subtract, multiply, divide } from './calculator';

describe('Calculator Tests', () => {

  
  describe('add()', () => {
    test('should add two positive numbers', () => {
      expect(add(5, 3)).toBe(8);
    });

    test('should add negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should return the same number when adding zero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract()', () => {
    test('should subtract two numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should handle negative results', () => {
      expect(subtract(3, 8)).toBe(-5);
    });
  });

  describe('multiply()', () => {
    test('should multiply two numbers', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    test('should return zero when multiplying by zero', () => {
      expect(multiply(10, 0)).toBe(0);
    });
  });

  describe('divide()', () => {
    test('should divide two numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should handle decimal results', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

});
