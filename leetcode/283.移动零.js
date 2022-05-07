/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   return nums.sort((a, b) => {
//     if (a === 0) {
//       return 1;
//     }
//     if (b === 0) {
//       return -1;
//     }
//     return 1;
//   });
// };
// 解法2: 指针处理所有有值内容, 把剩余置零
var moveZeroes = function (nums) {
  let pos = 0;
  nums.forEach((v) => {
    if (v !== 0) {
      nums[pos++] = v;
    }
  });
  for (let i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }
};
// @lc code=end
