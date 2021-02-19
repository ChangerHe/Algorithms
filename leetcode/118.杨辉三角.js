/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return []
  let curRow = [1]
  let rows = [[1]]
  let remainRow = numRows;
  const generateRow = (row) => {
    return row.reduce((prev, cur, index) => {
      prev.push(row[index] + (row[index + 1] || 0))
      return prev
    }, [1])
  }
  while (remainRow > 1) {
    curRow = generateRow(curRow)
    rows.push([...curRow])
    remainRow--
  }
  return rows
};
// @lc code=end

