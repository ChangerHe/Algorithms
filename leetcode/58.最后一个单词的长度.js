/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const wordArr = s.trim().split(' ')
  return wordArr[wordArr.length - 1].length
};
  // @lc code=end

