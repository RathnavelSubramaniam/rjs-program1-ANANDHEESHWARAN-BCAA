const { isPrime } = require("./prime");

describe("Prime Number Function", () => {
  test("returns true for prime numbers", () => {
    expect(isPrime(11)).toBe(true);
  });

  test("returns false for non-prime numbers", () => {
    expect(isPrime(12)).toBe(false);
  });

  test("handles edge cases", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-5)).toBe(false);
  });
});
