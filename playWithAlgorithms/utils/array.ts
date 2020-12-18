/**
 * generate a random array in range 
 * @param length generated array length
 * @param range array item range
 */
export const randomArrayGenerator = (length: number, range: [number, number]) => {
  return [...new Array(length)].map(() => Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0])
}

/**
 * record the function run spend time
 * @param func function want to record
 * @param arr test array
 * @param symbol the only symbol of the function
 */
export const timeSpendRecord = (func: (arr: number[]) => number[], arr: number[], symbol: string) => {
  const prevTime = new Date().getTime();
  const newArr = func(arr);
  const nextTime = new Date().getTime();
  console.log(`function ${symbol} used time: `, nextTime - prevTime)
  return newArr;
}