/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    if (n !== nums[i - 1]) {
      nums[count] = n;
      count += 1;
    }
  }
  return count;
};
module.exports = removeDuplicates;
// @lc code=end
