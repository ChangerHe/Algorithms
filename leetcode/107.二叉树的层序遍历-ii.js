/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  /**
   * 自己的解题思路:
   * 1. 通过遍历拿到同一层级的所有node
   * 2. 取出value, 放入数组
   * 3. 取出left和right, 放入之后再次需要执行的数组, 也就相当于是二叉树一排一排地来
   * 4. 定义外部变量, unshift值的数组(压栈), 再用相同机制执行节点的数组
   */
  const valArr = []
  const parseTree = (...trees) => {
    const treeValArr = []
    const treeNodeArr = []
    trees.forEach(v => {
      if (v && v.val !== null) {
        treeValArr.push(v.val)
        if (v.left) treeNodeArr.push(v.left)
        if (v.right) treeNodeArr.push(v.right)
      }
    })
    if (treeValArr.length) {
      valArr.unshift(treeValArr)
    }
    if (treeNodeArr.length) {
      parseTree(...treeNodeArr)
    }
  }
  parseTree(root)
  return valArr;
};
// @lc code=end

