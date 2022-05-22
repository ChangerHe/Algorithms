/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start
// 如果需要插入, 删除都是O1, 则必然是需要一个map结构来处理这样的关系
// 但是map结构存在的问题是, 无法在O(1)时间获取random数值
// 因此, 我们使用一个数组来保存值, map中保存值到数组下标的映射
// 此时需要注意的点则是: 某值删除之后, 需要将数组最后一位值的下标指向删除值的下标
var RandomizedSet = function () {
  this.map = new Map();
  this.nums = new Array();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (!this.map.has(val)) {
    this.map.set(val, this.nums.length);
    this.nums.push(val);
    return true;
  }
  return false;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map.has(val)) {
    const swapVal = this.nums[this.nums.length - 1];
    const idx = this.map.get(val);
    this.nums[idx] = swapVal;
    this.map.set(swapVal, idx);
    this.map.delete(val);
    this.nums.pop();
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIdx = Math.floor(Math.random() * this.nums.length);
  return this.nums[randomIdx];
};

// 直接用map结构求解
// var RandomizedSet = function () {
//   this.map = Object.create({});
// };
// RandomizedSet.prototype.insert = function (val) {
//   if (this.map[val] === undefined) {
//     this.map[val] = Symbol(val);
//     return true;
//   }
//   return false;
// };
// RandomizedSet.prototype.remove = function (val) {
//   if (this.map[val] !== undefined) {
//     delete this.map[val];
//     return true;
//   }
//   return false;
// };
// RandomizedSet.prototype.getRandom = function () {
//   const keys = Object.keys(this.map);
//   const randomIdx = Math.floor(Math.random() * keys.length);
//   return keys[randomIdx];
// };
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
