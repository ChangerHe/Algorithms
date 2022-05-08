const minWindow = require("./76.最小覆盖子串");

describe("", () => {
  it("", () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toEqual("BANC");
    expect(minWindow("a", "a")).toEqual("a");
    expect(minWindow("a", "aa")).toEqual("");
  });
});
