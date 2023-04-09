/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function(root) {
    let beforeVal = -Infinity
    const dfs = (tree) => {
        if (!tree) return 0;
        const l = dfs(tree.left)
        const r = dfs(tree.right)
        beforeVal = Math.max(beforeVal, tree.val + l + r)
        const sum = tree.val + Math.max(0, l, r)
        return sum < 0 ? 0 : sum
    }
    dfs(root)
    return beforeVal
};

module.exports = maxPathSum;
// @lc code=end

