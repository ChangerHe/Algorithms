/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const res = {
    val: root.val,
    right: null,
    left: null,
  };
  let point = res;
  const traverse = (node) => {
    if (node === null) {
      return;
    }
    const { left, right } = node;
    node.left = null;
    point.right = node;
    traverse(left);
    traverse(right);
  };
  traverse(root.left);
  traverse(root.right);
};
// @lc code=end
