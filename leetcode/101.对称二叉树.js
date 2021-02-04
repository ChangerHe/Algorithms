/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 对称二叉树, 其实本质上还是一个二叉树的比较问题
  // 不过, 比较的方式与完全比较有差异, 需要treeA的左比treeB的右
  if (!root || (!root.left && !root.right)) return true;
  const compareTree = (treeA, treeB) => {
    if (!treeA && !treeB) return true;
    if (treeA && treeB && treeA.val === treeB.val) {
      return compareTree(treeA.left, treeB.right) && compareTree(treeA.right, treeB.left);
    } else {
      return false;
    }
  };

  return compareTree(root.left, root.right)
};
// @lc code=end
