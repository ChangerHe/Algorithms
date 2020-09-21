
/**
 * 选择排序
 * 每次遍历, 取出最小元素, 并将最小元素与遍历位置进行互换, 直至最后
 * 算法时间复杂度: O(n2)
 * @param arr 需排序的数组
 */
export const selectSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      const restNum = arr[j];
      if (restNum < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const tempNum = arr[minIndex];
      arr[minIndex] = arr[i]
      arr[i] = tempNum;
    }
  }
  return arr;
}

module.exports = selectSort;