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
var addTwoNumbers = function(l1, l2) {
  const reverseToLinkedList = (num) => {
    const waitLinkedArray = num.toString().split('').reverse()

  }
  const reverseToNumber = (linkedList) => {
    let numStr = ''
    do {
      numStr += linkedList.val || 0
    } while (linkedList.next !== undefined || linkedList.next !== null)
    return parseInt(numStr.split('').reverse().join(''))
  }

  const num1 = reverseToNumber(l1)
  const num2 = reverseToNumber(l2)
  return reverseToLinkedList(num1 + num2)
};
// @lc code=end

