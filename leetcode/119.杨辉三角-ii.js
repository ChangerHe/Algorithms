/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  return Array(rowIndex).fill().reduce((p, c, i) => {
    return Array(i + 1).fill(1).reduce((prev, cur, index) => {
      return [...prev, p[index] + (p[index + 1] || 0)]
    }, [1])
  }, [1])
};
// @lc code=end

