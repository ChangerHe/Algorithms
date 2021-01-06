/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 更好的解法
  const symbolsMap = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ])
  const symbolStack = [];
  s.split("").forEach((v) => {
    if (symbolsMap.has(v) && symbolStack.length && symbolStack[symbolStack.length - 1] === symbolsMap.get(v)) {
      symbolStack.pop();
    } else {
      symbolStack.push(v)
    }
  })
  return !symbolStack.length
  
  // 自己的解法
  // const symbols = ["(", ")", "{", "}", "[", "]"];
  // const symbolStack = [];
  // const findCouple = (s) => {
  //   switch (s) {
  //     case ")":
  //       return "(";
  //       break;
  //     case "]":
  //       return "[";
  //       break;
  //     case "}":
  //       return "{";
  //       break;

  //     default:
  //       break;
  //   }
  // };
  // s.split("").forEach((v) => {
  //   if (symbols.indexOf(v) > -1) {
  //     const coupleV = findCouple(v);
  //     if (coupleV && coupleV === symbolStack[symbolStack.length - 1]) {
  //       symbolStack.pop();
  //     } else {
  //       symbolStack.push(v);
  //     }
  //   }
  // });
  // return symbolStack.length === 0;
};
// @lc code=end
