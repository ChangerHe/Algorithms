/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 解法: headA和HeadB的尾部重复部分的链表节点是完全相等的
// 如果将二者拼接起来, 也就是 headA + headB 和 headB + headA
// 此时二者链表长度就是完全相等的, 我们找到第一个完全相等的节点
// 此时节点及之后内容即为重合部分
var getIntersectionNode = function (headA, headB) {
  let point1 = headA;
  let point2 = headB;
  while (point1 !== point2) {
    if (point1 === null) {
      point1 = headB;
    } else {
      point1 = point1.next;
    }
    if (point2 === null) {
      point2 = headA;
    } else {
      point2 = point2.next;
    }
  }
  return point1;
};
// @lc code=end
