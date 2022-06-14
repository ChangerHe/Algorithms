const reverseList = require("./206.反转链表");
const { arrayToChain } = require("./helper");

describe("", () => {
  it("", () => {
    expect(reverseList(arrayToChain([3, 5]))).toEqual(arrayToChain([5, 3]));
  });
});
