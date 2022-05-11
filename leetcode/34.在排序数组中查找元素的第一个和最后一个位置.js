/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 解法1: 二分查找找到目标值, 然后目标值再左右移动指针来确认相同值的下标
var searchRange = function (nums, target) {
  const pos = [-1, -1];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = left + ~~((right - left) / 2);
    const middleVal = nums[middle];
    if (middleVal === target) {
      pos[0] = pos[1] = middle;
      break;
    }
    if (target > middleVal) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  if (pos[0] !== -1) {
    while (nums[pos[0]] === target) {
      pos[0]--;
    }
    while (nums[pos[1]] === target) {
      pos[1]++;
    }
    return [pos[0] + 1, pos[1] - 1];
  }
  return pos;
};
module.exports = searchRange;
// @lc code=end
