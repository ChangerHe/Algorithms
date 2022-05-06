const mergeKLists = require("./23.合并k个升序链表");
const { arrayToChain } = require("./helper");

describe("", () => {
  it("", () => {
    const chain1 = arrayToChain([1, 4, 5]);
    const chain2 = arrayToChain([1, 3, 4]);
    const chain3 = arrayToChain([2, 6]);
    const chain4 = arrayToChain([0, 2, 5]);
    expect(arrayToChain([1, 4, 5])).toEqual(arrayToChain([1, 4, 5]));
    expect(mergeKLists([chain1, chain2, chain3])).toEqual(
      arrayToChain([1, 1, 2, 3, 4, 4, 5, 6])
    );
    expect(mergeKLists([])).toEqual(arrayToChain([]));
    expect(mergeKLists([{ val: null }])).toEqual(arrayToChain([]));
    expect(mergeKLists([chain4])).toEqual(chain4);
    expect(mergeKLists([null, { val: 1, next: null }])).toEqual({
      val: 1,
      next: null,
    });
  });
});
