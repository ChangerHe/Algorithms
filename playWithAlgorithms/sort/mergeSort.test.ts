// import { mergeSort } from './mergeSort';
// const mergeSort, { _merge} = require('./mergeSort');
import mergeSort, {mergeSortBottomUp, _merge} from './mergeSort'

describe("mergeSort", () => {
  it('merge function check', () => {
    expect(_merge([1,3], [2,4])).toEqual([1,2,3,4])
  })
  it("normal check", () => {
    expect(mergeSort([1,2,5,3,2,1])).toEqual([1,1,2,2,3,5])
  })
  it("reverse check", () => {
    expect(mergeSort([9,8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8,9])
  })
  it("reverse check bottom up", () => {
    expect(mergeSortBottomUp([9,8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8,9])
  })
})