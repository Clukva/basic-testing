// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 1, b: 5, action: Action.Add })).toBe(6);
    expect(simpleCalculator({ a: -1, b: -6, action: Action.Add })).toBe(-7);
    expect(simpleCalculator({ a: 0, b: -100, action: Action.Add })).toBe(-100);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 1, b: 5, action: Action.Subtract })).toBe(-4);
    expect(simpleCalculator({ a: -1, b: -6, action: Action.Subtract })).toBe(5);
    expect(simpleCalculator({ a: 0, b: -1, action: Action.Subtract })).toBe(1);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 1, b: 5, action: Action.Multiply })).toBe(5);
    expect(simpleCalculator({ a: -1, b: -6, action: Action.Multiply })).toBe(6);
    expect(simpleCalculator({ a: 1, b: -1, action: Action.Multiply })).toBe(-1);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 1, b: 5, action: Action.Divide })).toBe(0.2);
    expect(simpleCalculator({ a: -12, b: -6, action: Action.Divide })).toBe(2);
    expect(simpleCalculator({ a: 10, b: 10, action: Action.Divide })).toBe(1);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 1, b: 5, action: Action.Exponentiate })).toBe(
      1,
    );
    expect(simpleCalculator({ a: 2, b: 4, action: Action.Exponentiate })).toBe(
      16,
    );
    expect(simpleCalculator({ a: 5, b: 2, action: Action.Exponentiate })).toBe(
      25,
    );
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: 'Abra-Cadabra' })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(
      simpleCalculator({ a: [22], b: [444, 333], action: Action.Exponentiate }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 'dfdf', b: 888, action: Action.Exponentiate }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: { a: 5 }, b: 2, action: Action.Exponentiate }),
    ).toBeNull();
  });
});
