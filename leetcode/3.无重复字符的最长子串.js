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
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  const set = new Set();
  let addLen = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    set.add(c);
    addLen++;
    // 如果set长度与增加的数量不同, 则有重复项, 指针指向重复值, 然后判断出最大长度
    if (addLen != set.size) {
      max = Math.max(max, addLen - 1);
      set.clear();
      set.add(c);
      addLen = 1;
      continue;
    }
    max = Math.max(max, addLen);
  }
  return max;
};

module.exports = lengthOfLongestSubstring;
// @lc code=end
