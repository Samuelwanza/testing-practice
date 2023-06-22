const {
  stringLength,
  reverseString,
  Calculator,
  capitalize,
} = require("./functionsTotest");

test("length of string", () => {
  expect(stringLength("samuel")).toBe(6);
  expect(() => stringLength("")).toThrow("Conditions not met");
  expect(stringLength("samuel")).toBeLessThanOrEqual(10);
});
test("reverse string", () => {
  expect(reverseString("ALU")).toMatch(/ULA/);
});
describe("calculate addition", () => {
  const calculator = new Calculator(30, 20);
  test("check addition", () => {
    expect(calculator.add()).toBe(50);
  });
  const calculator2 = new Calculator("30", 20);
  test("check wrong data type", () => {
    expect(() => calculator2.add()).toThrow("Only numbers are accepted");
  });
});
describe("calculate substraction", () => {
  const calculator = new Calculator(30, 20);
  test("check substraction", () => {
    expect(calculator.substract()).toBe(10);
  });
  const calculator2 = new Calculator("30", 20);
  test("check wrong data type", () => {
    expect(() => calculator2.substract()).toThrow("Only numbers are accepted");
  });
});
describe("calculate division", () => {
  const calculator = new Calculator(30, 20);
  test("check division", () => {
    expect(calculator.divide()).toBe(1.5);
  });
  const calculator2 = new Calculator("30", 20);
  test("check wrong data type", () => {
    expect(() => calculator2.divide()).toThrow("Only numbers are accepted");
  });
});

describe("calculate multiplication", () => {
  const calculator = new Calculator(30, 20);
  test("check division", () => {
    expect(calculator.multiply()).toBe(600);
  });
  const calculator2 = new Calculator("30", 20);
  test("check wrong data type", () => {
    expect(() => calculator2.multiply()).toThrow("Only numbers are accepted");
  });
});
test("capitalize first letter", () => {
  expect(capitalize("samuel")).toMatch(/Samuel/);
});
