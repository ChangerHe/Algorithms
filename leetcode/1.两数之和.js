/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const restNum = target - num;
    const restNumPos = nums.indexOf(restNum, index + 1)
    if (restNumPos > -1) {
      return [index, restNumPos]
    }
  }
};

module.exports = twoSum;
// @lc code=end

