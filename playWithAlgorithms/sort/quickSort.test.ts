// import { quickSort } from './quickSort';
// const mergeSort, { _merge} = require('./mergeSort');
import quickSort from './quickSort'

describe("quickSort", () => {
  it("normal check", () => {
    expect(quickSort([1,2,5,3,2,1])).toEqual([1,1,2,2,3,5])
  })
  it("reverse check", () => {
    expect(quickSort([9,8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8,9])
  })
})