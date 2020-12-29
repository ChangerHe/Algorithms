/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  // 解法在字符串过长时耗时过长, 放弃
  // let count = 0;
  // const len = s.length;
  // for (let i = 0; i < len; i++) {
  //   for (let j = i + 1; j < len + 1; j++) {
  //     const slicedStr = s.slice(i, j)
  //     if (slicedStr === slicedStr.split('').reverse().join('')) {
  //       count++
  //     }
  //   }
  // }
  // return count;
};

module.exports = countSubstrings
// @lc code=end

