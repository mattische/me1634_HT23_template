//NOTE: You are not allowed to modify the existing test cases in functions.test.js. 
//You can, however, add additional test cases if you wish.


//EXAMPLE
const { calculateArea, capitalizeString, reverseString } = require('./functions');

describe('calculateArea', () => {
  test('returns the area of a rectangle', () => {
    expect(calculateArea('rectangle', 4, 5)).toBe(20);
  });

  test('returns the area of a circle', () => {
    expect(calculateArea('circle', 5)).toBeCloseTo(78.53981633974483);
  });
});

describe('capitalizeString', () => {
  test('capitalizes the first letter of a string', () => {
    expect(capitalizeString('hello world')).toBe('Hello world');
  });
});

describe('reverseString', () => {
  test('reverses a string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });
});
