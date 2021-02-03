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
var deleteDuplicates = function(head) {
  const purge = (chain) => {
    if (!chain) return null;
    if (chain.next && chain.val === chain.next.val) {
      return {val: chain.val, next: purge(chain.next.next)}
    } else {
      return {val: chain.val, next: purge(chain.next)}
    }
  }
  return purge(head)
};
// @lc code=end

