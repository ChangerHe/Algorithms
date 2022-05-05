/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 解法1: 使用双重遍历穷举所有场景, 计算差值为k的数据次数
// 此种解法会造成计算超时
// var subarraySum = function(nums, k) {
//   let left = 0
//   let right = 0
//   let count = 0
//   for (let i = 0; i < nums.length; i++) {
//     const left = nums[i];
//     for (let j = i; j < nums.length; j++) {
//       const right = nums[j];
//       let sum = 0
//       for (let l = i; l <= j; l++) {
//         sum += nums[l]
//       }
//       if (sum === k) count += 1
//     }
//   }
//   return count
// };
// 解法2: 
// 使用前缀和的方式, 计算后面的前缀和与前面前缀和的差值是否等于k, 等于则符合条件
// 那么在这里我们倒置一下规则, 后面前缀和减去k, 如果与前面前缀和相等, 则统计加一
// 则有解法如下: 可将算法的时间复杂度降低的O(n)级别
var subarraySum = function(nums, k) {
  const preNums = []
  const preNumMap = new Map()
  // 当get0的时候, 也就是preNum - k为零, 此时刚好等于k, 本身也要计算一次
  preNumMap.set(0, 1)
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const preNum = (preNums[i - 1] || 0) + num
    if (preNumMap.has(preNum - k)) {
      count += (preNumMap.get(preNum - k) || 1)
    }
    preNumMap.set(preNum, (preNumMap.get(preNum) || 0) + 1)
    preNums[i] = preNum
  }

  return count
};



module.exports = subarraySum
// @lc code=end

