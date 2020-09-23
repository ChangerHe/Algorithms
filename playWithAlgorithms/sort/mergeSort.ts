export const _merge = (arrFirst: number[], arrSecond: number[]) => {
  const newArr = []
  while (arrFirst.length > 0 && arrSecond.length > 0) {
    if (arrFirst[0] > arrSecond[0]) {
      newArr.push(arrSecond.shift())
    } else {
      newArr.push(arrFirst.shift())
    }
  }
  return newArr.concat(arrFirst).concat(arrSecond)
}

export const mergeSort = (arr: number[]) => {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2)
  return _merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

/**
 * 自顶向上的归并排序
 * 整体思路是: 将数组进行大小划分, 前数组的大小是后数组大小的二分之一
 * 划分好之后, 逐步进行归并即可
 * @param arr 待排序数组
 */
export const mergeSortBottomUp = (arr: number[]) => {
  let mergedArr = [arr[0]]
  let r = 1;
  for (let i = r; i < arr.length;  i = r = r * 2) {
    mergedArr = _merge(mergedArr, mergeSortBottomUp(arr.slice(r, r * 2)))
  }
  return mergedArr
}

export default mergeSort;
