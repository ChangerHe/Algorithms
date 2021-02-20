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
var generate = function (numRows) {
  // if (numRows === 0) return []
  // let curRow = [1]
  // let rows = [[1]]
  // let remainRow = numRows;
  // const generateRow = (row) => {
  //   return row.reduce((prev, cur, index) => {
  //     prev.push(row[index] + (row[index + 1] || 0))
  //     return prev
  //   }, [1])
  // }
  // while (remainRow > 1) {
  //   curRow = generateRow(curRow)
  //   rows.push([...curRow])
  //   remainRow--
  // }
  // return rows

  return Array(numRows)
    .fill([1])
    .map((v, i, r) => {
      return (r[i] = Array(i)
        .fill(1)
        .reduce(
          (prev, cur, index) => {
            const beforeR = r[i - 1];
            if (beforeR) {
              return [...prev, r[i - 1][index] + (r[i - 1][index + 1] || 0)];
            } else {
              return prev;
            }
          },
          [1]
        ));
    });

  // 精简版本
  // return Array(numRows).fill([1]).map((v, i, r) => r[i] = Array(i).fill(1).reduce((p, c, j) => r[i - 1] ? [...p, r[i - 1][j] + (r[i - 1][j + 1] || 0)] : p, [1]))
};
// @lc code=end
