/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  // 自己的实现思路: 将每次生成的string保存起来, 轮流对上一次string进行操作
  // 操作方式是: 先分成每个一个string的数组, 合并相同内容
  // 第二次遍历的时候, 再将之前合并之后的数组拿出来, 根据长度组合成一个新的string, 并保存起来
  // let str = '1'
  // if (n === 1)  return str
  // const parseStringToArray = () => {
  //   const arr = str.split('')
  //   const parsedArray = []
  //   arr.forEach(a => {
  //     const parsedArrayLen = parsedArray.length
  //     const lastStr = parsedArray[parsedArrayLen - 1]
  //     if (lastStr && lastStr.split('')[0] === a) {
  //       parsedArray[parsedArrayLen - 1] = lastStr + a
  //     } else {
  //       parsedArray.push(a)
  //     }
  //   });
  //   return parsedArray
  // }
  // const addDescribe = (arr) => {
  //   let str = ''
  //   arr.forEach(v => {
  //     str += `${v.length}${v.split('')[0]}`
  //   })
  //   str = str;
  // }
  // let runTime = 1;
  // while (runTime < n) {
  //   addDescribe(parseStringToArray());
  //   runTime++
  // }
  // return str

  // 官方题解
  // 核心点: \1代表的是对第一个匹配值的引用, 也就是说通过这个正则可以找到连续相同的值
  let prev = "1";
  for (let i = 1; i < n; i++) {
    prev = prev.replace(/(\d)\1*/g, (item) => `${item.length}${item[0]}`);
  }
  return prev;
};
// @lc code=end
