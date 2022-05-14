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

// 官方题解解法1: 用一个临时变量来缓存之后的链, 然后将当前链节点插入新链
// 然后再迭代之后的链
// var reverseList = function (head) {
//   let h = null;
//   let p = head;
//   while (p) {
//     const next = p.next;
//     p.next = h;
//     h = p;
//     p = next;
//   }
//   return h;
// };

// 官方题解解法2: 通过递归的方式来将链表进行翻转
// 递归退出条件是  链表为null, 或链表的next为null
// 递归时, 我们有这样的一个链表结构
// h1 -> h2 -> ... -> hm
//                       \(向下箭头)
// hn -> hn-1 -> ... -> hm+1
// 这个时候的 hm.next 为hm+1, 再next就是和hm+1都是null
// 如果我们将hm.next.next = hm 则有
// h1 -> h2 -> ... -> hm
//                       \(向下箭头)
// hn -> hn-1 -> ... -> hm+1 -> hm -> hm+1 -> null
// 此时已经存在hm到hm+1的环, 将hm.next为null, 去掉此环
// h1 -> h2 -> ... -> hm
//                       \(向下箭头)
// hn -> hn-1 -> ... -> hm+1 -> hm -> null
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  const last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};
// @lc code=end
