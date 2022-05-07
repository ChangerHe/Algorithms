/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
// 解法: 常规遍历手段下, 需要将链表节点塞入数组中, 取数组中点, 然后拼接后半段的链表结构, 时间复杂度O(0.5n2), 空间复杂度O(n)
// 使用快慢指针的方式, 可以将时间复杂度降低到O(n), 空间复杂度降低到常量级
var middleNode = function (head) {
  let fastPoint = head;
  let slowPoint = head;
  while (fastPoint !== null) {
    // 判断一下, 防止fastPoint溢出
    if (fastPoint.next) {
      fastPoint = fastPoint.next.next;
      slowPoint = slowPoint.next;
    } else {
      fastPoint = fastPoint.next;
      slowPoint = slowPoint;
    }
  }
  console.log(slowPoint, "slowPoint");
  return slowPoint;
};

module.exports = middleNode;
// @lc code=end
