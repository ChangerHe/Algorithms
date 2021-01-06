/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let pos = 0;
  nums.forEach(num => {
    if (num !== val) {
      nums[pos++] = num
    }
  })
  return pos
};
// @lc code=end

