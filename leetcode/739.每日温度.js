/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 这是一道典型的单调栈题
// 单调栈的使用场景是: 寻找任意元素的右边或左边第一个比自己大或小的元素位置
// 题目的要求是查找最近的比自己高的温度
// 我们逆向遍历温度, 构建单调栈queue, 并保存高温度的栈下标列表
// 新的温度通过while循环找到第一个比自己大的温度的下标, 并舍弃小于当前温度的下标, 并用该下标减去当前下标就是二者相距的天数
// 最后, 将当前数据压入单调栈
var dailyTemperatures = function (temperatures) {
  const res = [];
  const queue = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    const t = temperatures[i];
    while (queue.length && temperatures[queue[queue.length - 1]] <= t) {
      queue.pop();
    }
    res[i] = queue.length ? queue[queue.length - 1] - i : 0;
    queue.push(i);
  }
  return res;
};

module.exports = dailyTemperatures;
// @lc code=end
