/*
 * @lc app=leetcode.cn id=921 lang=javascript
 *
 * [921] 使括号有效的最少添加
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let need = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const needLen = need.length;
    if (needLen && need[needLen - 1] === "(" && c === ")") {
      need.pop();
    } else {
      need.push(c);
    }
  }
  return need.length;
};
// @lc code=end
