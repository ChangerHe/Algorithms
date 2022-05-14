/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head) return null;
  let o = {
    val: head.val,
    next: null,
  };
  let h = null;

  let p = 2;
  while (head.next) {
    if (p < left) {
      o.next = {
        val: head.next.val,
        next: null,
      };
    }
    if (p === left) {
      h = {
        val: head.next.val,
        next: null,
      };
    }
    if (p > left && p < right) {
      h = {
        val: head.next.val,
        next: h,
      };
    }
    console.log(h, "--------h");
    if (p === right) {
      h.next = head.next.next;
      o.next = h;
    }
    head = head.next;
    p++;
  }
  return o;
};
// @lc code=end
