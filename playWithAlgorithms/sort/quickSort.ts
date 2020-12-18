export const quickSort = (arr: number[]) => {
  let tempPos = arr[0];
  const largerArr = [];
  const smallerArr = [];
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > tempPos) {
      largerArr.push(arr[i])
    } else {
      smallerArr.push(arr[i])
    }
    
  }
  return [...quickSort(smallerArr), tempPos, ...quickSort(largerArr)]
}

export default quickSort;