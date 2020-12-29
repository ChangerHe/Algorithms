/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }
  var i1 = 1;
  var i2 = 2;
  for (var i = 3; i <= n; i++) {
    var temp = i1 + i2;
    i1 = i2;
    i2 = temp;
  }
  return i2;
};
// @lc code=end
