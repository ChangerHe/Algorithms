/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start

var MedianFinder = function () {
  this.nums = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  const numsLen = this.nums.length;
  if (!numsLen) {
    this.nums.push(num);
    return;
  }
  let left = 0;
  let right = numsLen - 1;
  let inserted = false;
  // 这里的循环需要注意的是:
  // 1. 第一次的时候就存在left = right的情况, 因此需要加上等号的判断
  // 2. 当中位数刚好等于要插入的值时, 直接在中位数后插入该值
  // 3. 当完成循环遍历, left已经大于right的时候, 取左侧(right)的位置, 在right之后插入该值
  // 4. 完成while循环之后, 并不知道是否已经因刚好等于mid而插入, 因此加了一个inserted的flag
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (this.nums[mid] > num) {
      right = mid - 1;
    } else if (this.nums[mid] < num) {
      left = mid + 1;
    } else {
      inserted = true;
      this.nums.splice(mid + 1, 0, num);
      break;
    }
  }
  if (!inserted) {
    this.nums.splice(right + 1, 0, num);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const numsLen = this.nums.length;
  const mid = Math.floor(numsLen / 2);
  const isEven = numsLen % 2 === 0;
  return isEven ? (this.nums[mid] + this.nums[mid - 1]) / 2 : this.nums[mid];
};

module.exports = MedianFinder;

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
