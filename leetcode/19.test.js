const removeNthFromEnd = require("./19.删除链表的倒数第-n-个结点");
const { arrayToChain } = require("./helper");

describe("", () => {
  it("", () => {
    expect(removeNthFromEnd(arrayToChain([1, 2, 3, 4, 5]), 2)).toEqual(
      arrayToChain([1, 2, 3, 5])
    );
    expect(removeNthFromEnd(arrayToChain([1]), 1)).toEqual(arrayToChain([]));
    expect(removeNthFromEnd(arrayToChain([1, 2]), 2)).toEqual(
      arrayToChain([2])
    );
  });
});
