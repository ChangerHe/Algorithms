const middleNode = require("./876.链表的中间结点");
const { arrayToChain } = require("./helper");

describe("", () => {
  it("", () => {
    expect(middleNode(arrayToChain([1, 2, 3, 4, 5]))).toEqual(
      arrayToChain([3, 4, 5])
    );
  });
});
