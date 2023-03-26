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
var twoSum = function (nums, target) {
  // // 解法1: 使用两次遍历来确定数组的的两个目标下标值
  // for (let i = 0; i < nums.length; i++) {
  //   const num1 = nums[i];
  //   for (let j = i + 1; j < nums.length; j++) {
  //     const num2 = nums[j];
  //     if (num1 + num2 === target) {
  //       return [i, j];
  //     }
  //   }
  // }
  // 解法2: 利用hashmap的能力, 将一维数组转为map结构后再检索
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const restNum = target - num;
    if (map.has(restNum)) {
      return [map.get(restNum), i];
    }
    map.set(num, i);
  }
};

module.exports = twoSum;
// @lc code=end
