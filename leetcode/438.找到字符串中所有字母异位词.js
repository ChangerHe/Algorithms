/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 解法1: 单指针遍历取字符串, 直接排序然后对比字符串
// 但这样效率比较低, 会导致执行时间超出
// var findAnagrams = function (s, p) {
//   const isEctopicString = (s1, s2) => {
//     return s1.split("").sort().join("") === s2.split("").sort().join("");
//   };
//   const sLen = s.length;
//   const pLen = p.length;
//   const count = [];
//   let point = 0;
//   while (point <= sLen - pLen) {
//     const curString = s.substr(point, pLen);
//     if (isEctopicString(curString, p)) {
//       count.push(point);
//     }
//     point++;
//   }
//   return count;
// };

// 解法2: 不再暴力排序再回转字符串, 而是通过map来对比
// 可以运行通过, 但是效率比较低, 主要原因是逐个的遍历, 可以考虑将遍历的效率提升一下
// var findAnagrams = function (s, p) {
//   const count = [];
//   const pMap = {};
//   for (let c of p) pMap[c] = (pMap[c] || 0) + 1;
//   const pMapKeys = Object.keys(pMap);
//   const pMapKeysLen = pMapKeys.length;
//   let point = 0;
//   while (point <= s.length - p.length) {
//     const curString = s.substr(point, p.length);
//     const cMap = {};
//     for (let c of curString) cMap[c] = (cMap[c] || 0) + 1;
//     if (
//       Object.keys(cMap).length === pMapKeysLen &&
//       pMapKeys.every((c) => pMap[c] === cMap[c])
//     ) {
//       count.push(point);
//     }
//     point++;
//   }

//   return count;
// };

// 解法3: 加一个判断, 如果存在p中没有的字符, 则此次对比退出, 指针加到这个没有的字符之前
// 可以运行通过, 但是效率比较低, 主要原因是逐个的遍历, 可以考虑将遍历的效率提升一下
// var findAnagrams = function (s, p) {
//   const count = [];
//   const pMap = {};
//   for (let c of p) pMap[c] = (pMap[c] || 0) + 1;
//   const pMapKeys = Object.keys(pMap);
//   const pMapKeysLen = pMapKeys.length;
//   let point = 0;
//   loop1: while (point <= s.length - p.length) {
//     const curString = s.substr(point, p.length);
//     const cMap = {};
//     for (let i = 0; i < curString.length; i++) {
//       const c = curString[i];
//       // map里面不存在此字符
//       if (pMap[c]) {
//         cMap[c] = (cMap[c] || 0) + 1;
//       } else {
//         point = point + i + 1;
//         continue loop1;
//       }
//     }
//     if (
//       Object.keys(cMap).length === pMapKeysLen &&
//       pMapKeys.every((c) => pMap[c] === cMap[c])
//     ) {
//       count.push(point);
//     }
//     point++;
//   }

//   return count;
// };

// 解法4: 每次都要比较两个单词, 效率比较低, 每次滑动窗口的时候我们比较单个的单词就好了
var findAnagrams = function (s, p) {
  const count = [];
  const pMap = {};
  for (let c of p) pMap[c] = (pMap[c] || 0) + 1;
  const pMapKeys = Object.keys(pMap);
  const pMapKeysLen = pMapKeys.length;
  let point = 0;
  let valid = 0;
  const curString = s.substr(0, p.length - 1);
  const cMap = {};
  for (let c of curString) cMap[c] = (cMap[c] || 0) + 1;
  pMapKeys.forEach((v) => {
    if (pMap[v] === cMap[v]) {
      valid++;
    }
  });
  loop1: while (point <= s.length - p.length) {
    const char = s[point + p.length - 1];
    cMap[char] = (cMap[char] || 0) + 1;
    if (cMap[char] === pMap[char]) {
      valid++;
    }
    if (valid === pMapKeysLen) {
      count.push(point);
    }
    const preChar = s[point];
    if (pMap[preChar] && cMap[preChar] === pMap[preChar]) {
      valid--;
    }
    cMap[preChar]--;
    point++;
  }

  return count;
};

module.exports = findAnagrams;
// @lc code=end
