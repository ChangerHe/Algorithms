/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
// var reverseList = function (head) {
//   if (!head) {
//     return null;
//   }
//   let h = {
//     val: head.val,
//     next: null,
//   };
//   while (head.next) {
//     h = {
//       val: head.next.val,
//       next: h,
//     };
//     head = head.next;
//   }
//   return h;
// };
var reverseList = function (head) {
  let h = null;
  let p = head;
  while (p) {
    // 官方题解解法: 用一个临时变量来缓存之后的链, 然后将当前链节点插入新链
    // 然后再迭代之后的链
    const next = p.next;
    p.next = h;
    h = p;
    p = next;
  }
  return h;
};
// @lc code=end
