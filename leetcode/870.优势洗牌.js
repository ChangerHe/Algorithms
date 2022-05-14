/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  const sort1 = nums1.sort((a, b) => b - a);
  const sort2WithIndex = nums2
    .map((v, i) => ({ val: v, index: i }))
    .sort((a, b) => b.val - a.val);

  const sort2 = sort2WithIndex.map((v) => v.val);
  const sort2Index = sort2WithIndex.map((v) => v.index);
  console.log(sort2, sort2Index, "sort2 sort2Index");
  let left = 0;
  let right = sort2.length - 1;
  const newNums1 = [];

  for (let i = 0; i < sort2.length; i++) {
    const n = sort2[i];
    // 需要优势最大化, 因此当nums2大于等于nums1的值的时候, 使用num1的最小值来与num2的最大值匹配
    // 和田忌赛马的原则一样, 打不过, 就换最差的马
    if (n >= sort1[left]) {
      newNums1.push(sort1[right]);
      right--;
    } else {
      newNums1.push(sort1[left]);
      left++;
    }
  }
  return [...newNums1].map((v, i) => {
    return newNums1[sort2Index[i]];
  });
};

module.exports = advantageCount;
// @lc code=end
