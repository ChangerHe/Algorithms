/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const len = strs.length;
  if (len === 0) return ''
  let cPrefix = ''
  const randomStr = strs[0]
  const randomLen = randomStr.length;
  const randomArray = randomStr.split('')
  for (let i = 1; i <= randomLen; i++) {
    const slicedRandomStr = randomStr.slice(0, i)
    if (strs.every(v => v.startsWith(slicedRandomStr))) {
      cPrefix = slicedRandomStr
    } else {
      break;
    }
    
  }
  return cPrefix

};
// @lc code=end

