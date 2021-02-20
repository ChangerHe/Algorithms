/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfits = 0;
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    for (let j = i; j < prices.length; j++) {
      const lastPrice = prices[j];
      maxProfits = maxProfits > lastPrice - price ? maxProfits : lastPrice - price
    }
  }
  return maxProfits
};
// @lc code=end

