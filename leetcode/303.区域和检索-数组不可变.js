/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
// var NumArray = function(nums) {
//   this.nums = nums;
// };

// 方法二: 使用前缀和的方式, 避免获取结果时进行逐一遍历
var NumArray = function(nums) {
  const numLen = nums.length
  this.preSum = new Array(numLen).fill(0);
  for (let i = 0; i < numLen; i++) {
    const num = nums[i] || 0;
    this.preSum[i] = (this.preSum[i - 1] || 0) + num
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
// NumArray.prototype.sumRange = function(left, right) {
//   let sum = 0
//   for (let i = left; i <= right; i++) {
//     sum += this.nums[i] || 0
//   }
//   return sum
// };

// 方法二: 使用前缀和的方式, 避免获取结果时进行逐一遍历
NumArray.prototype.sumRange = function(left, right) {
  const maxSumIndex = this.preSum.length - 1
  return this.preSum[right > maxSumIndex ? maxSumIndex : right] - (this.preSum[left - 1] || 0)
};

module.exports = NumArray;
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

