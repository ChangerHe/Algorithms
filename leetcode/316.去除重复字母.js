/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (s.lastIndexOf(c) === i) {
      res += c;
    }
  }
  return res;
};
// @lc code=end
