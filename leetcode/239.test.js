const maxSlidingWindow = require("./239.滑动窗口最大值");

describe("", () => {
  it("", () => {
    expect(maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5)).toEqual([
      10, 10, 9, 2,
    ]);
    expect(maxSlidingWindow([-7, -8, 7, 5, 7, 1, 6, 0], 4)).toEqual([
      7, 7, 7, 7, 7,
    ]);
  });
});
