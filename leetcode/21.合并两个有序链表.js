/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function (l1, l2) {
  // 更好的解法
  if (!l1) return l2
  if (!l2) return l1
  if (l1.val > l2.val) {
    return {
      val: l2.val,
      next: mergeTwoLists(l1, l2.next)
    }
  } else {
    return {
      val: l1.val,
      next: mergeTwoLists(l2, l1.next)
    }
  }

  
  // 自己的解法
  // const linkList = {
  //   val: null,
  //   next: null,
  // };
  // let curL1 = l1;
  // let curL2 = l2;
  // if (!curL1 && !curL2) return null;
  // if (!curL1)
  //   return {
  //     val: l2.val,
  //     next: l2.next,
  //   };
  // if (!curL2)
  //   return {
  //     val: l1.val,
  //     next: l1.next,
  //   };

  // if (curL1.val > curL2.val) {
  //   linkList.val = curL2.val;
  //   curL2 = curL2.next;
  // } else {
  //   linkList.val = curL1.val;
  //   curL1 = curL1.next;
  // }
  // linkList.next = mergeTwoLists(curL1, curL2);
  // return linkList;
};
// @lc code=end
