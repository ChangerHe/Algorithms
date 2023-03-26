/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const add = (v1, v2, carry) => {
    if (!v1 && !v2 && !carry) return null;
    const val = (v1?.val || 0) + (v2?.val || 0) + carry;
    const remain = val % 10;
    const pre = (val - remain) / 10;
    console.log(val, remain, pre, "val, remain, pre");
    const node = {
      val: remain,
      next: add(v1?.next, v2?.next, pre),
    };
    return node;
  };
  return add(l1, l2, 0);
};

module.exports = addTwoNumbers;
// @lc code=end
