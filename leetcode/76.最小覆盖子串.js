/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 解法: 因为t可能存在多个重复字符, 因此t需要转换成为map结构, 统计每个字符出现的次数
// 每次当每个字符出现的次数大于当前统计次数时, 右侧指针停止, 开始滑动左侧指针
// 左侧指针一直滑动到刚好不符合条件为止
var minWindow = function (s, t) {
  const sArr = s.split("");
  const tMap = t.split("").reduce((p, c) => {
    p[c] = (p[c] || 0) + 1;
    return p;
  }, {});
  const tKey = Object.keys(tMap);
  const tKeyLen = tKey.length;
  let tCountedNum = 0;
  const tCount = {};
  let l = 0;
  let r = 0;
  let minL = 0;
  let minR = 0;
  while (r < s.length) {
    const char = s.charAt(r);
    if (tMap[char]) {
      tCount[char] = (tCount[char] || 0) + 1;
      // 统计的该字符数量与t中该字符数量相等
      if (tCount[char] === tMap[char]) {
        // t中的该字符统计完成
        tCountedNum++;
        // 如果t中字符都统计完成了
        if (tCountedNum === tKeyLen) {
          // 开始滑动左侧指针
          while (tCountedNum === tKeyLen) {
            // 左侧指针的字符
            const leftChar = s.charAt(l);
            // 左侧指针字符纯在于t中, 则计数减一
            if (tMap[leftChar]) {
              tCount[leftChar] = tCount[leftChar] - 1;
              if (tCount[leftChar] < tMap[leftChar]) {
                if ((minR === 0 && minL === 0) || minR - minL > r - l) {
                  minR = r + 1;
                  minL = l;
                }
                tCountedNum--;
              }
            }
            l++;
          }
        }
      }
    }
    r++;
  }
  return s.slice(minL, minR);
};

module.exports = minWindow;
// @lc code=end
