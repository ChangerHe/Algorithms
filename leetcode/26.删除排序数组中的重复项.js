/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let confirmedPos = 1
  // 解法:  双指针处理数组元素
  nums.forEach((num, i) => {
    if (i === 0) return
    if (num === nums[i - 1]) return;
    nums[confirmedPos++] = num
  });
  return confirmedPos
};
// @lc code=end

