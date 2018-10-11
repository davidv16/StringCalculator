// calculator test
const add = require("./calculator");

it("should return zero on an empty string", () => {
  expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
  expect(add("5")).toBe(5);
});

it("should return sum of two given numbers", () => {
  expect(add("1,2")).toBe(3);
});

it("should sumerize multible numbers", () => {
	expect(add("2,3,4")).toBe(9);
});

it("should sumerize multiple numbers with next line as separator", () => {
  expect(add("1\n2,3")).toBe(6);
	});

it("should throw an exception if number is a negative", () => {
	expect(() => { throw Error('Negatives not allowed: -1') }).toThrowError(Error);
});
