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
  const romaMap = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  const strArr = s.split("");
  return strArr.reduce((p, c, i) => {
    const cNum = romaMap[c];
    if (i === 0) {
      return cNum;
    }
    const pNum = romaMap[strArr[i - 1]];
    if (cNum > pNum) {
      // 加当前数字, 因为之前应该减的已经加了一次, 所以这里要减两次
      return p + cNum - 2 * pNum;
    } else {
      return p + cNum;
    }
  }, 0);
  // 解法2:
  // const romaArr = ["M", "D", "C", "L", "X", "V", "I"];
  // const numberArr = [1000, 500, 100, 50, 10, 5, 1];
  // const strArr = s.split("");
  // return strArr.reduce((p, c, i) => {
  //   const cNum = numberArr[romaArr.indexOf(c)];
  //   if (i === 0) {
  //     return cNum;
  //   }
  //   const pNum = numberArr[romaArr.indexOf(strArr[i - 1])];
  //   if (cNum > pNum) {
  //     // 加当前数字, 因为之前应该减的已经加了一次, 所以这里要减两次
  //     return p + cNum - 2 * pNum;
  //   } else {
  //     return p + cNum;
  //   }
  // }, 0);

  // 解法1: 分割多个独立的罗马字符串, 再换算成数字相加
  // const stringArr = ["M", "D", "C", "L", "X", "V", "I"].reverse();
  // const numberArr = [1000, 500, 100, 50, 10, 5, 1].reverse();

  // const splitString = s.split("");
  // const sliceArr = splitString.reduce((p, c, i) => {
  //   if (i > 0 && stringArr.indexOf(c) > stringArr.indexOf(splitString[i - 1])) {
  //     const slicedP = p.slice(0, -1);
  //     slicedP.push(p[p.length - 1] + c);
  //     return slicedP;
  //   } else {
  //     p.push(c);
  //     return p;
  //   }
  // }, []);
  // return sliceArr.reduce((p, c, i) => {
  //   const numArr = c.split("").map((v) => numberArr[stringArr.indexOf(v)]);
  //   return (
  //     p +
  //     numArr[numArr.length - 1] -
  //     (numArr.slice(0, -1).reduce((p, c, i) => p + c, 0) || 0)
  //   );
  // }, 0);
};
// @lc code=end
