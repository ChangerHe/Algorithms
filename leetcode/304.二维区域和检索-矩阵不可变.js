/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
// var NumMatrix = function(matrix) {
//   this.matrix = matrix
// };
// 解法2: 用子序和的方式求解
var NumMatrix = function(matrix) {
  this.sumMatrix = JSON.parse(JSON.stringify(matrix))
  const rowLen = matrix.length
  const cowLen = matrix[0].length
  // 循环遍历, 获取到
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < cowLen; j++) {
      this.sumMatrix[i][j] = 
        // 纵轴的总和
        (this.sumMatrix[i][j - 1] || 0) + 
        // 当前位置的数
        matrix[i][j] + 
        // 横轴的总和
        (( this.sumMatrix[i - 1] || [])[j] || 0) - 
        // 减去横纵轴重叠的方块区域
        (( this.sumMatrix[i - 1] || [])[j - 1] || 0)
    }
  }
  console.log(this.sumMatrix, 'this.sumMatrix')
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
// NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
//   let sum = 0
//   for (let i = row1; i <= row2; i++) {
//     for (let j = col1; j <= col2; j++) {
//       sum += this.matrix[i][j]
//     }
//   }
//   return sum
// };
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  // 外围大方块
  return this.sumMatrix[row2][col2] + 
  // 加上0, 0起点到左上点的方块区域, 因为下面的两次相减都会减去这个区域
  ((this.sumMatrix[row1 - 1] || [])[col1 - 1] || 0) - 
  // 减去0,0到两个端点的靠两侧位置区域
  (this.sumMatrix[row2][col1 - 1] || 0) - 
  ((this.sumMatrix[row1 - 1] || [])[col2] || 0)
};

module.exports = NumMatrix

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

