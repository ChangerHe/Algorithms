/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // const singleNums = [];
  // nums.forEach((num) => {
  //   const indexOfSingleNum = singleNums.indexOf(num);
  //   if (indexOfSingleNum > -1) {
  //     singleNums.splice(indexOfSingleNum, 1);
  //   } else {
  //     singleNums.push(num);
  //   }
  // });
  // return singleNums[0];

  // 解法二: 使用异或运算的特性求解
  let single = 0;
  nums.forEach(v => {
    single ^= v
  })
  return single
};
// @lc code=end
