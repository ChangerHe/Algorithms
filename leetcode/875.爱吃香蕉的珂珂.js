/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function (piles, H) {
  // 思考: 先根据小时数, 算出大约的平均吃香蕉个数
  // 根据这个个数, 再向上枚举出最优解
  const pilesTotal = piles.reduce((p, c) => {
    return p + c;
  }, 0);
  let pilesAverage = Math.ceil(pilesTotal / H);
  const checkRealTime = (per) => {
    const allTime = piles.reduce((p, c) => {
      return p + Math.ceil(c / pilesAverage);
    }, 0);
    return allTime;
  };
  let realTime = checkRealTime(pilesAverage);

  while (realTime > H) {
    pilesAverage++;
    realTime = checkRealTime(pilesAverage);
  }
  return pilesAverage;
};
// @lc code=end
