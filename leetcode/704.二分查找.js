/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = left + ~~((right - left) / 2);
    const middleVal = nums[middle];
    if (middleVal === target) {
      return middle;
    }
    if (middleVal > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

module.exports = search;
// @lc code=end
