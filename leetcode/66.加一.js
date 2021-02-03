/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const addedArr = String(((BigInt(digits.join(''))) + 1n)).split('')
  const lenDiffNum = digits.length - addedArr.length
  const emptyZero = new Array(lenDiffNum >= 0 ? lenDiffNum : 0).fill(0)
  return emptyZero.concat(addedArr)

  // 这个问题的核心其实是BigInt的问题
};
// @lc code=end

