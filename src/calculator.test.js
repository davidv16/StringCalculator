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
	const test = () => {
	add("-1,2")
	}
	expect(test).toThrowError('Negatives not allowed: -1');
});

it("should throw an exception if number is a negative", () => {
  const test = () => {
	add("2,-4,3,-5")
	}
	expect(test).toThrowError('Negatives not allowed: -4,-5');
});

it("should return 2 if number goes above a 1000", () => {
	expect(add("1001,2")).toBe(2);
});

it("should return 3 if delimiter is a semi colon", () => {
  expect(add("//;\n1;2")).toBe(3);
});



