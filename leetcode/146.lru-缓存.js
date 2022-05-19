/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
// var LRUCache = function (capacity) {
//   this.map = new Map();
//   this.capacity = capacity;
// };

/**
 * @param {number} key
 * @return {number}
 */
// LRUCache.prototype.get = function (key) {
//   if (this.map.has(key)) {
//     const val = this.map.get(key);
//     this.map.delete(key);
//     this.map.set(key, val);
//     return val;
//   }
//   return -1;
// };

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
// LRUCache.prototype.put = function (key, value) {
//   if (this.map.has(key)) {
//     this.map.delete(key);
//   }
//   this.map.set(key, value);
//   if (this.map.size > this.capacity) {
//     this.map.delete(this.map.keys().next().value);
//   }
// };

var LRUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
  this.dummyHead = {
    key: -1,
    value: -1,
    prev: null,
    next: null,
  };
  this.dummyTail = {
    key: -1,
    value: -1,
    prev: null,
    next: null,
  };
  this.dummyHead.next = this.dummyTail;
  this.dummyTail.prev = this.dummyHead;
};

LRUCache.prototype.get = function (key) {
  const curNode = this.map.get(key);
  if (curNode) {
    // 删除当前双向链表节点
    const prevNode = curNode.prev;
    const nextNode = curNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.map.delete(key);
    // 再在头部插入改节点
    const dummyNext = this.dummyHead.next;
    this.dummyHead.next = curNode;
    curNode.prev = this.dummyHead;
    curNode.next = dummyNext;
    dummyNext.prev = curNode;
    this.map.set(key, curNode);
    return curNode.value;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  let curNode = this.map.get(key);
  if (curNode) {
    // 存在此节点, 则更新节点值, 并放置到头部
    curNode.value = value;
    const prevNode = curNode.prev;
    const nextNode = curNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.map.delete(key);
    // 再在头部插入改节点
    const dummyNext = this.dummyHead.next;
    this.dummyHead.next = curNode;
    curNode.prev = this.dummyHead;
    dummyNext.prev = curNode;
    this.map.set(key, curNode);
  } else {
    curNode = {
      key,
      value,
      prev: null,
      next: null,
    };
    const dummyNext = this.dummyHead.next;
    this.dummyHead.next = curNode;
    curNode.prev = this.dummyHead;
    curNode.next = dummyNext;
    dummyNext.prev = curNode;
    this.map.set(key, curNode);
    if (this.map.size > this.capacity) {
      const curNode = this.dummyTail.prev;
      const prevNode = curNode.prev;
      prevNode.next = this.dummyTail;
      this.dummyTail.prev = prevNode;
      this.map.delete(this.map.keys().next().value);
    }
  }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
