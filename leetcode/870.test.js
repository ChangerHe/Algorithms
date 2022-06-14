const advantageCount = require("./870.优势洗牌");

describe("", () => {
  it("", () => {
    // expect(advantageCount([2, 7, 11, 15], [1, 10, 4, 11])).toEqual([
    //   2, 11, 7, 15,
    // ]);
    // expect(advantageCount([12, 24, 8, 32], [13, 25, 32, 11])).toEqual([
    //   24, 32, 8, 12,
    // ]);
    expect(advantageCount([2, 0, 4, 1, 2], [1, 3, 0, 0, 2])).toEqual([
      2, 0, 2, 1, 4,
    ]);
  });
});
