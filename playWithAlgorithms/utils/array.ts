/**
 * generate a random array in range 
 * @param length generated array length
 * @param range array item range
 */
export const randomArrayGenerator = (length: number, range: [number, number]) => {
  return [...new Array(length)].map(() => Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0])
}

export const timeSpendRecord = (func: (arr: number[]) => number[], arr: number[], symbol: string) => {
  const prevTime = new Date().getTime();
  func(arr);
  const nextTime = new Date().getTime();
  console.log(`function ${symbol} used time: `, nextTime - prevTime)
}