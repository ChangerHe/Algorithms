/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 解法1: 使用map来存储下标, 如果碰到重复的, 则更新这个下标
// 同时, 更新当前的不重复内容长度, 及最大长度
// 这里的核心是需要控制一个earlyIndex来代表上次重复的位置
// 上次重复位置和map中存储的位置做对比, 取大值, 因为存在map中value未更新的情况
// var lengthOfLongestSubstring = function (s) {
//   let maxLen = 0;
//   let len = 0;
//   let eIdx = 0;
//   const map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     const c = s[i];
//     if (map.get(c) === undefined) {
//       len++;
//     } else {
//       const idxBefore = map.get(c);
//       const validIdx = Math.max(idxBefore, eIdx);
//       len = i - validIdx;
//       eIdx = validIdx;
//     }
//     maxLen = Math.max(len, maxLen);
//     map.set(c, i);
//   }
//   return maxLen;
// };

// 解法2: 滑动窗口
// var lengthOfLongestSubstring = function (s) {
//   let l = 0;
//   let max = 0;
//   const set = new Set();
//   const map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     const c = s[i];
//     const sizeBefore = set.size;
//     set.add(c);
//     // 有重复内容
//     if (set.size === sizeBefore) {
//       // tmmzuxt这类场景, 最后一个t如果不比较会把l置为1
//       // 因此, 需要与现有l进行比较 获得一个最大值
//       l = Math.max(map.get(c) + 1, l);
//       map.set(c, i);
//     }
//     max = Math.max(i + 1 - l, max);
//   }
//   return max;
// };

// 滑动窗口优化: 移除掉无用的set
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let max = 0;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const cIndexBefore = map.get(c);
    // 有重复内容
    if (cIndexBefore !== undefined) {
      // tmmzuxt这类场景, 最后一个t如果不比较会把l置为1
      // 因此, 需要与现有l进行比较 获得一个最大值
      l = Math.max(map.get(c) + 1, l);
    }
    map.set(c, i);
    max = Math.max(i + 1 - l, max);
  }
  return max;
};

module.exports = lengthOfLongestSubstring;
// @lc code=end
