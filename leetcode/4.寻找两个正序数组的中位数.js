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
// 解法1: 直接归并排序之后, 再将中位数计算出来
// 算法复杂度: O(m + n) 没有达到log级别的复杂度
// var findMedianSortedArrays = function (nums1, nums2) {
//   let p1 = 0;
//   let p2 = 0;
//   let arr = [];
//   const isUndefined = (n) => n === undefined;
//   while (!isUndefined(nums1[p1]) || !isUndefined(nums2[p2])) {
//     if (isUndefined(nums1[p1])) {
//       arr = arr.concat(nums2.slice(p2));
//       break;
//     }
//     if (isUndefined(nums2[p2])) {
//       arr = arr.concat(nums1.slice(p1));
//       break;
//     }
//     const n1 = nums1[p1] || 0;
//     const n2 = nums2[p2] || 0;
//     if (n1 > n2) {
//       arr.push(n2);
//       p2++;
//     } else {
//       arr.push(n1);
//       p1++;
//     }
//   }
//   const arrLen = arr.length;
//   return arrLen % 2
//     ? arr[~~(arrLen / 2)]
//     : (arr[arrLen / 2] + arr[arrLen / 2 - 1]) / 2;
// };

// 解法2: 按需数到中间即可, 不需要遍历到所有的数组内容做排序
// 算法复杂度 O((m + n) / 2)  没有达到log级别的复杂度
var findMedianSortedArrays = function (nums1, nums2) {
  const nums1Len = nums1.length;
  const nums2Len = nums2.length;
  const total = nums1Len + nums2Len;
  const isOdd = total & 1;
  let before, curr;
  let p1 = 0,
    p2 = 0;
  for (let i = 0; i <= total / 2; i++) {
    before = curr;
    if ((nums1[p1] ?? Infinity) > (nums2[p2] ?? Infinity)) {
      curr = nums2[p2];
      p2++;
    } else {
      curr = nums1[p1];
      p1++;
    }
  }
  if (isOdd) {
    return curr;
  } else {
    return (curr + before) / 2;
  }
};

// 解法3:
var findMedianSortedArrays = function (nums1, nums2) {};

module.exports = findMedianSortedArrays;
// @lc code=end
