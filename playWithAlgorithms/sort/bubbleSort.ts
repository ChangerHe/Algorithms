export const bubbleSort = (arr: number[]) => {
  const comparingArr = [...arr];
  const len = comparingArr.length;
  for (let i = 0; i < len - 1; i++) {
    const a = comparingArr[i];
    const b = comparingArr[i + 1];
    if (a > b) {
      comparingArr[i] = b;
      comparingArr[i + 1] = a;
    }
  }
  const lastComparedNum = comparingArr.pop();
  if (comparingArr.length) {
    return [...bubbleSort(comparingArr), lastComparedNum];
  } else {
    return [lastComparedNum];
  }
};

export const bubbleSort2 = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      const b = arr[j];
      const c = arr[j + 1]
      if (b > c) {
        arr[j] = c;
        arr[j + 1] = b;
      }
    }
  }
  return arr;
}