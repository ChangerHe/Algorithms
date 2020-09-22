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

export default mergeSort;
