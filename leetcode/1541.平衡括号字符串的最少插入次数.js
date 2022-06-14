/*
 * @lc app=leetcode.cn id=1541 lang=javascript
 *
 * [1541] 平衡括号字符串的最少插入次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  let deadQuote = 0;
  let needRight = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "(") {
      needRight += 2;
      // 如果在之前存在了右括号, 且为单数的时候
      // 证明是缺少一个右括号的
      // 我们需要插入一个右括号, 然后将右括号需求减一
      if (needRight % 2 === 1) {
        deadQuote++;
        needRight--;
      }
    } else if (c === ")") {
      needRight--;
      // 当needRight为-1时, 代表前面都有匹配到, 但是多出一个右括号的情况
      // 此时左括号和右括号都需要加一
      // 左括号一定是没有了, 后括号之后可能还会有, 所以左括号一定是deadquote
      // 右括号则需要增加一个需要
      if (needRight === -1) {
        deadQuote++;
        needRight = 1;
      }
    }
  }
  return deadQuote + needRight;
};

module.exports = minInsertions;
// @lc code=end
