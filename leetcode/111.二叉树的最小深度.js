/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  // 这个其实本质上还是一个深度优先遍历的问题
  // 区别于最最长链条长度, 只需要在null的时候返回并中断掉即可
  if (root.left && root.right) {

    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
  } else {
    return 1
  }
};
// @lc code=end

