/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// s1为子串, s2中需要查找一串符合子串中字符的字符串, 然后根据子串中字符数量来找到该子串是否符合排列规则
// 也就是说: s2上会有前后双指针, 来遍历获取符合子串条件的字符串, 然后与s1子串中的字符进行数量匹配, 如果数量大于s1子串, 则符合条件
var checkInclusion = function (s1, s2) {
  const s1Map = s1.split("").reduce((p, c) => {
    p[c] = (p[c] || 0) + 1;
    return p;
  }, {});
  const s1Len = s1.length;
  const s1Key = Object.keys(s1Map);
  const s1KeyLen = s1Key.length;
  let l = 0;
  loop1: while (l < s2.length - s1Len) {
    const s = s2.slice(l, l + s1Len);
    const sMap = {};
    const sKey = Object.keys(sMap);
    const sKeyLen = sKey.length;
    let sPoint = 0;
    let keyCount = 0;
    // 判断s是否为s1的字符, 非此情况, s跳转到此下标, 同时r加上对应下标差
    loop2: while (sPoint < s.length) {
      const sChar = s[sPoint];
      if (s1.indexOf(sChar) < 0) {
        l = l + sPoint + 1;
        break loop2;
        continue loop1;
      } else {
        sMap[sChar] = (sMap[sChar] || 0) + 1;
        if (sMap[sChar] === s1Map[sChar]) {
          keyCount++;
        }
        sPoint++;
      }
    }

    // s都是s1中的字符, 则判断字符数量, 不符合则r加一再来
    if (keyCount === s1KeyLen) {
      return true;
    }
  }
  return false;
};

module.exports = checkInclusion;
// @lc code=end
