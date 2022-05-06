/*
 * @lc app=leetcode.cn id=370 lang=javascript
 *
 * [370] 区间加法
 */

// @lc code=start
/**
 * @param {number} length
 * @param {number[][]} updates
 */
// 解法1: 直接遍历新的数组, 对其进行操作
// 但是这样的效率是非常低下的, 复杂度为O(n2)
// var getModifiedArray = function(length, updates) {
//   const arr = new Array(length).fill(0)
//   for (let i = 0; i < updates.length; i++) {
//     const u = updates[i]
//     const [start, end, value] = u
//     for (let j = 0; j < arr.length; j++) {
//       const a = arr[j];
//       if (j >= start && j <= end) {
//         arr[j] = arr[j] + value
//       }
//     }
//   }
//   return arr
// };
// 解法2: 使用差分数组的方式来求解
var getModifiedArray = function(length, updates) {
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
  return arr
};

module.exports = getModifiedArray

// @lc code=end

