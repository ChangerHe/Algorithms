/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
// 因为要计算倒数第N个节点, 因此直接暴力计算需要对节点列表进行两次遍历, 复杂度为O(n2)
// 如果我们用距离相等(为n)的双指针, 当后指针为null, 也就是后指针到达终点时, 前指针刚好与后指针相距n, 前指针即是倒数第n个节点
var removeNthFromEnd = function (head, n) {
  const dummy = {
    val: -1,
    next: head,
  };
  let pointBefore = dummy;
  let pointAfter = dummy;
  while (n >= 0) {
    n--;
    if (pointAfter && pointAfter.next) {
      pointAfter = pointAfter.next;
    } else {
      pointAfter = null;
    }
  }
  while (pointAfter !== null) {
    pointBefore = pointBefore.next;
    pointAfter = pointAfter.next;
  }
  if (pointBefore.next) {
    pointBefore.next = pointBefore.next.next;
  } else {
    return null;
  }
  return dummy.next;
};

module.exports = removeNthFromEnd;
// @lc code=end
