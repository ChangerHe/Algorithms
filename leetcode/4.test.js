const middle = require("./4.寻找两个正序数组的中位数");

describe("test middle", () => {
it("", () => {
    expect(middle([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1])).toBe(0);
  });
it("", () => {
    expect(middle([0], [])).toBe(0);
  });
it("", () => {
    expect(middle([], [2, 3])).toBe(2.5);
  });
it("", () => {
    expect(middle([3], [-2, -1])).toBe(-1);
  });
});
