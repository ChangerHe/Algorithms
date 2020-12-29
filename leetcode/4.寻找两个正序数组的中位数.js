/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // const concatNum = nums1.concat(nums2).sort((a, b) => a - b);
  // const total = concatNum.reduce((p, c) => {
  //   return p + c;
  // }, 0);
  // const len = concatNum.length;
  // if (len % 2) {
  //   return concatNum[Math.floor(len / 2)]
  // } else {
  //   return (concatNum[len / 2] + concatNum[len / 2 - 1]) / 2
  // }

  // WIP: 运行结果是错的
  const calcMiddle = (arr) => {
    const len = arr.length
    if (len % 2) {
      return arr[Math.floor(len / 2)];
    } else {
      return (arr[Math.floor(len / 2)] + arr[Math.floor(len / 2) - 1]) / 2;
    }
  }
  const total = nums1.length + nums2.length;
  if (total === 1) return nums1[0] !== undefined ? nums1[0] : nums2[0];
  if (!nums1.length) {
    return calcMiddle(nums2)
  }
  if (!nums2.length) {
    return calcMiddle(nums1)
  }
  const middle = Math.floor(total / 2);
  const needAverage = total % 2 ? false : true;
  let po1 = 0;
  let po2 = 0;

  while (po1 + po2 < middle - 1) {
    console.log(nums1[po1], nums2[po2], po1, po2, "po1");
    if (nums1[po1] > nums2[po2]) {
      if (nums2[po2 + 1] !== undefined) {
        po2++;
      } else {
        po1++;
      }
    } else {
      if (nums1[po1 + 1] !== undefined) {
        po1++;
      } else {
        po2++;
      }
    }
  }
  console.log(po1, po2, "--------");
  if (needAverage) {
    return (nums1[po1] + nums2[po2]) / 2;
  } else {
    return po1 > po2 ? nums1[po1] : nums2[po2];
  }
};

module.exports = findMedianSortedArrays;
// @lc code=end
