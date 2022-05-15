/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 直接使用暴力国战运算获取范围最大值, 会导致出现计算超时
// var maxSlidingWindow = function (nums, k) {
//   const res = [];
//   for (let i = 0; i <= nums.length - k; i++) {
//     res.push(Math.max(...nums.slice(i, k + i)));
//   }
//   return res;
// };

// 解法2: 使用单调栈的方式, 维护一个持续的单调栈
// 当滑动窗口新增数据的时候, 将新增数据放到单调栈中
// 同时, 移出滑出的值, 滑出的值如果在单调栈栈顶, 则栈顶弹出一个值
// 新的栈顶值即是当前滑动窗口的最大值
var maxSlidingWindow = function (nums, k) {
  // 需要注意的是: 这里并不能直接通过数组切割排序的方式来进行初始化
  // 数组切割初始化会造成可能产生重复的数字, 而导致数据出现问题
  const queue = [];
  const res = [];
  const enqueue = (v) => {
    // 不能判断栈底的元素是否等于当前值的情况
    // 因为如果等于就弹出, 会在队列中去掉重复值, 使得后面的较大值计算有误
    while (queue.length && queue[queue.length - 1] < v) {
      queue.pop();
    }
    queue.push(v);
  };
  for (let i = 0; i < nums.length; i++) {
    enqueue(nums[i]);
    if (i >= k - 1) {
      if (nums[i - k] === queue[0]) {
        queue.shift();
      }
      res.push(queue[0]);
    }
  }
  return res;
};
module.exports = maxSlidingWindow;
// @lc code=end
