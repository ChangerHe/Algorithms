const findAnagrams = require("./438.找到字符串中所有字母异位词");

describe("", () => {
  it("", () => {
    // expect(findAnagrams("abab", "ab")).toEqual([0, 1, 2]);
    // expect(findAnagrams("cbaebabacd", "abc")).toEqual([0, 6]);
    expect(
      findAnagrams(
        "dinitrophenylhydrazinetrinitrophenylmethylnitramine",
        "trinitrophenylmethylnitramine"
      )
    ).toEqual([19, 20, 21, 22]);
  });
});
