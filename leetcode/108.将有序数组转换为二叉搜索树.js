const TreeNode = require('./helper').TreeNode
/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const genTree = (arr) => {
    const len = arr.length
    if (!len) return null;
    const mid = ~~(len / 2)
    console.log('mid:', mid ,'len', len)
    const l = mid !== 0 ? genTree(arr.slice(0, mid)) : null;
    const r = mid !== 0 ? genTree(arr.slice(mid)) : null
    return new TreeNode(arr[mid], l, r)
  };
  console.log(JSON.stringify(genTree(nums)))
  return genTree(nums);
};

module.exports = sortedArrayToBST;
// @lc code=end
