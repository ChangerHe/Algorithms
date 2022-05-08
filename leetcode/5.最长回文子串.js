/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 解法: 回文字符串存在长度为单数和双数两种情况
// 双数情况下, 回文的中间起始点不同, 单数下相同
// 因此, 我们遍历字符串每个数值, 如果数值与前一数值相同, 则按双数来匹配一次
var longestPalindrome = function (s) {
  const palindrome = (l, r) => {
    while (s.charAt(l) === s.charAt(r) && l >= 0 && r < s.length) {
      l--;
      r++;
    }
    return s.slice(l + 1, r);
  };
  const compare = (s1, s2) => {
    return s1.length > s2.length ? s1 : s2;
  };
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    longest = compare(longest, palindrome(i, i));
    if (s[i] === s[i - 1]) {
      longest = compare(longest, palindrome(i - 1, i));
    }
  }
  return longest;
};
module.exports = longestPalindrome;
// @lc code=end
