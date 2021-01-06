/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const stringArr = ["M", "D", "C", "L", "X", "V", "I"].reverse();
  const numberArr = [1000, 500, 100, 50, 10, 5, 1].reverse();

  const splitString = s.split("");
  const sliceArr = splitString.reduce((p, c, i) => {
    if (i > 0 && stringArr.indexOf(c) > stringArr.indexOf(splitString[i - 1])) {
      const slicedP = p.slice(0, -1);
      slicedP.push(p[p.length - 1] + c);
      return slicedP;
    } else {
      p.push(c);
      return p;
    }
  }, []);
  return sliceArr.reduce((p, c, i) => {
    const numArr = c.split("").map((v) => numberArr[stringArr.indexOf(v)]);
    return (
      p +
      numArr[numArr.length - 1] -
      (numArr.slice(0, -1).reduce((p, c, i) => p + c, 0) || 0)
    );
  }, 0);
};
// @lc code=end
