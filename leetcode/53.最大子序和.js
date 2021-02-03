/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let pre = 0; ans = nums[0]
  nums.forEach(v => {
    pre = Math.max(pre + v, v)
    ans = Math.max(pre, ans)
    console.log(pre, ans, '------')
  })
  return ans;
};
// @lc code=end

