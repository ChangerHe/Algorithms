/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
// 和370解法一致, 仅做了变量和下标对其
var corpFlightBookings = function(bookings, n) {
  const updates = bookings
  const length = n + 1
  const arr = new Array(length).fill(0)
  for (let i = 0; i < updates.length; i++) {
    const u = updates[i]
    const [start, end, value] = u
    arr[start] = arr[start] + value
    if (end + 1 < length) {
      arr[end + 1] = arr[end + 1] - value
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = (arr[i - 1] || 0) + arr[i]
  }
  arr.shift()
  return arr
};
// @lc code=end

