/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 解法:
// 这题本质是要将二叉树的左节点的next指向右节点
// 同时需要注意的是, 相邻的两个树, 左树的右节点需要指向右树的左节点, 这是这题难点所在
// 我们在递归时, 设置左右两个参数, 方便进行next处理
// 同时, 我们也将左子树的right和右子树的left同时递归, 这样即可实现跨子树的next传递
var connect = function (root) {
  if (root === null) {
    return root;
  }
  const traverse = (left, right) => {
    if (left === null || right === null) {
      return;
    }
    left.next = right;
    traverse(left.left, left.right);
    traverse(right.left, right.right);
    traverse(left.right, right.left);
  };
  traverse(root.left, root.right);
  return root;
};
// @lc code=end
