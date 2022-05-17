/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
// 一个典型的单调栈题
// 因为我们需要保证得出的数字尽可能小, 也就是说, 前面的位数上的数字一定要比后面位数上的尽可能小
// 也就是说, 它符合典型的单调栈的结构, 以单调栈结构来解题即可
var removeKdigits = function (num, k) {
  const numLen = num.length;
  let res = [];
  for (let i = 0; i < numLen; i++) {
    const n = num[i];
    while (k > 0 && res.length && res[res.length - 1] > n) {
      res.pop();
      k--;
    }
    if (n !== "0" || res.length !== 0) {
      res.push(n);
    }
  }
  // 当到达最后的时候还是没有清除k个数字, 则从尾部开始清除掉
  while (k > 0) {
    res.pop();
    k--;
  }
  return res.length === 0 ? "0" : res.join("");
};
module.exports = removeKdigits;
// @lc code=end
