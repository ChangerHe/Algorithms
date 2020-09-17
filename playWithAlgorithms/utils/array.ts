/**
 * generate a random array in range 
 * @param length generated array length
 * @param range array item range
 */
export const randomArrayGenerator = (length: number, range: [number, number]) => {
  return [...new Array(length)].map(() => Math.random() * (range[1] - range[0]) + range[0])
}