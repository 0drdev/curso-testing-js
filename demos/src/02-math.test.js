const moduleMath = require("./02-math");

test("adds 1 + 3 should be 4", () => {
  const result = moduleMath.sum(1, 3);
  expect(result).toBe(4);
});

test("subtracts 5 - 2 should be 3", () => {
  const result = moduleMath.rest(5, 2);
  expect(result).toBe(3);
});

test("multiplies 4 * 2 should be 8", () => {
  const result = moduleMath.mult(4, 2);
  expect(result).toBe(8);
});

test("divides 10 / 2 should be 5", () => {
  const result = moduleMath.div(10, 2);
  expect(result).toBe(5);
});
