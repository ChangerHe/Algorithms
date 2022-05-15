/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 因为需要考虑循环数组的问题, 也就是数组的最后一位数需要匹配到数组之前元素的最近更大值
// 所以数组在进行单调栈求值的时候,需要将数组扩大一倍以求出最后一个值的更大值
// 直接扩大又增大了空间复杂度, 我们使用循环的方式来遍历数组即可
// 剩余的则就是单调栈的问题了, 按单调栈的问题处理即可
var nextGreaterElements = function (nums) {
  const queue = [];
  const res = [];
  const numsLen = nums.length;
  for (let i = numsLen * 2 - 1; i >= 0; i--) {
    const n = nums[i >= numsLen ? i - numsLen : i];
    while (queue.length && queue[queue.length - 1] <= n) {
      queue.pop();
    }
    if (i < numsLen) {
      res[i] = queue.length ? queue[queue.length - 1] : -1;
    }
    queue.push(n);
  }
  return res;
};
// @lc code=end
