/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const maxLen = numbers.length;
  let point1 = 0;
  let point2 = maxLen - 1;
  while (numbers[point1] + numbers[point2] !== target) {
    const value1 = numbers[point1];
    const value2 = numbers[point2];
    if (value1 + value2 < target) {
      point1++;
    } else {
      point2--;
    }
  }
  return [point1 + 1, point2 + 1];
};
// @lc code=end
