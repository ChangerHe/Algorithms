/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
// 类似于370的算法, 使用差分数组求解
var carPooling = function(trips, capacity) {
  const arr = new Array(capacity).fill(0)
  for (let i = 0; i < trips.length; i++) {
    const t = trips[i];
    const [value, start, end] = t
    arr[start] = (arr[start] || 0) + value
    arr[end] = (arr[end] || 0) - value
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = (arr[i - 1] || 0) + arr[i]
    if (arr[i] > capacity) {
      return false
    }
  }
  return true
};

module.exports = carPooling
// @lc code=end

