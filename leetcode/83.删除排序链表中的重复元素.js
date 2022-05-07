/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function (head) {
  if (!head) return null;
  let point1 = head;
  let point2 = head;
  while (point2.next) {
    if (point2.next.val !== point2.val) {
      point1.next.val = point2.next.val;
      point1 = point1.next;
    }
    point2 = point2.next;
  }
  point1.next = null;
  return head;
};
// @lc code=end
