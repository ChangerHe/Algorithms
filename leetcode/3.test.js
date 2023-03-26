// import twoSum from './1';
const lengthOfLongestSubstring = require("./3.无重复字符的最长子串");

describe("", () => {
  it("", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
    expect(lengthOfLongestSubstring("")).toEqual(0);
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
    expect(lengthOfLongestSubstring("aab")).toEqual(2);
    expect(lengthOfLongestSubstring("tmmzuxt")).toEqual(5);
    expect(lengthOfLongestSubstring("zwnigfunjwz")).toEqual(8);
    // 这条单测没支持
    // expect(lengthOfLongestSubstring("dvdf")).toEqual(3);
  });
});
