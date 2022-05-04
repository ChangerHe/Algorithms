const NumArray = require("./303.区域和检索-数组不可变");

describe("", () => {
  it("", () => {
    const numArray = new NumArray([1,2,3,4,5,6,7,8])
    expect(numArray.sumRange(0,2)).toBe(6)
    expect(numArray.sumRange(1,3)).toBe(9)
    expect(numArray.sumRange(0,8)).toBe(36)
    const numArray1 = new NumArray([-2,0,3,-5,2,-1])
    expect(numArray1.sumRange(0,2)).toBe(1)
    expect(numArray1.sumRange(2,5)).toBe(-1)
    expect(numArray1.sumRange(0,5)).toBe(-3)
    
  });
});
