/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists.length || lists.every(v => !v || v.val === null)) {
    return null
  }
  const arr = [...lists.filter(v => !!v)]
  const chain = {
    val: null,
    next: null
  }
  let pointer = chain
  const sortChain = (l) => {
    return l.sort((a, b) => {
      if (!a || a.val === null) return 1
      if (!b || b.val === null) return -1
      return a.val - b.val
    })
  }
  while (arr[0] && arr[0].val !== null) {
    sortChain(arr)
    const minChain = arr.shift()
    if (minChain && minChain.val !== null) {
      pointer.val = minChain.val
      if (arr.length || minChain.next) {
        pointer.next = {
          val: null,
          next: null
        }
        pointer = pointer.next
      }
    }
    if (minChain.next) arr.push(minChain.next)
  }
  return chain
};

module.exports = mergeKLists
// @lc code=end

