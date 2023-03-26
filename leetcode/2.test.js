const addTwoNumbers = require("./2.两数相加");
const { arrayToChain } = require("./helper");

describe("two sum", () => {
  it("normal check", () => {
    const l1 = arrayToChain([2, 4, 3]);
    const l2 = arrayToChain([5, 6, 4]);
    expect(addTwoNumbers(l1, l2)).toEqual(arrayToChain([7, 0, 8]));
  });
  it("normal check", () => {
    const l1 = arrayToChain([0]);
    const l2 = arrayToChain([0]);
    expect(addTwoNumbers(l1, l2)).toEqual(arrayToChain([0]));
  });
  it("normal check", () => {
    const l1 = arrayToChain([9, 9, 9, 9, 9, 9, 9]);
    const l2 = arrayToChain([9, 9, 9, 9]);
    expect(addTwoNumbers(l1, l2)).toEqual(
      arrayToChain([8, 9, 9, 9, 0, 0, 0, 1])
    );
  });
});
