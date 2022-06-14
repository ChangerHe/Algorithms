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
// var reverseBetween = function (head, left, right) {
//   let count = 0;
//   let prev = null;
//   // 之后有p的赋值操作, 因此需要构造出一个虚拟头节点
//   const c = {
//     val: -1,
//     next: head,
//   };
//   let p = c;
//   while (count < left - 1) {
//     p = p.next;
//     count++;
//   }
//   let restChain = null;
//   const reverseN = (chain, n) => {
//     if (n === 1) {
//       restChain = chain.next;
//       return chain;
//     }
//     const last = reverseN(chain.next, n - 1);
//     chain.next.next = chain;
//     chain.next = restChain;
//     return last;
//   };
//   p.next = reverseN(p.next, right - left + 1);
//   return c.next;
// };

// 解法2: 当left为1的时候, 其实就是翻转N的场景
// 也就是说, 我们并不需要先遍历到left的位置, 然后再操作翻转N操作
// 但这种算法效率比上面的低???
var reverseBetween = function (head, left, right) {
  if (left === 1) {
    let restChain = null;
    const reverseN = (chain, n) => {
      if (n === 1) {
        restChain = chain.next;
        return chain;
      }
      const last = reverseN(chain.next, n - 1);
      chain.next.next = chain;
      chain.next = restChain;
      return last;
    };
    return reverseN(head, right - left + 1);
  }
  head.next = reverseBetween(head.next, left - 1, right - 1);

  return head;
};
// @lc code=end
