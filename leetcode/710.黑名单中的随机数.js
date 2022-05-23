/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} blacklist
 */
// var Solution = function (n, blacklist) {
//   const whiteList = [];
//   for (let i = 0; i < n; i++) {
//     if (blacklist.indexOf(i) < 0) {
//       whiteList.push(i);
//     }
//   }
//   this.whiteList = whiteList;
// };

/**
 * @return {number}
 */
// Solution.prototype.pick = function () {
//   const len = this.whiteList.length;
//   return this.whiteList[Math.floor(Math.random() * len)];
// };

// 直接创建白名单数组, 算法空间复杂度为O(m * n) 时间复杂度为O(m * n), 会导致溢出
// 所以这里采用了map结构, 处理黑名单的映射, 循环遍历前n - blacklist.length个数据
// 如果数据在map结构中时, 则返回黑名单的映射数据
// 因为黑名单数据也可能存在于[blacklist.length, n)中, 因此我们提前将map创建好
// 当遍历blacklist时, 如果在[0, n - blacklist.length)区间时, 我们只需判断后序的指针是否被占用, 如果被占用, 指针向前一位, 直到找到空的指针, 然后将指针值赋值给黑名单map, 作为value
// 这样就能形成一个不重复的, 黑名单 > 白名单对应数据的map了
// 随机计算的时候, 如果是黑名单值, 则返回对应的map的白名单value即可
// 算法时间复杂度 O(2m) 空间复杂度 O(m)
var Solution = function (n, blacklist) {
  const exchangeMap = Object.create(null);
  const s = n - blacklist.length;
  for (let i = 0; i < blacklist.length; i++) {
    const b = blacklist[i];
    exchangeMap[b] = b;
  }
  let point = n - 1;
  for (let i = 0; i < blacklist.length; i++) {
    const b = blacklist[i];
    if (b < s) {
      while (exchangeMap[point]) {
        point--;
      }
      exchangeMap[b] = point;
      point--;
    }
  }
  this.exchangeMap = exchangeMap;
  this.size = s;
};
Solution.prototype.pick = function () {
  const randomNum = Math.floor(Math.random() * this.size);
  return this.exchangeMap[randomNum] || randomNum;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end
