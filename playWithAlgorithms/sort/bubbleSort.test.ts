import { bubbleSort, bubbleSort2 } from './bubbleSort'

describe("bubbleSort", () => {
  it("normal check", () => {
    expect(bubbleSort([1,2,5,3,2,1])).toEqual([1,1,2,2,3,5])
  })
  it("reverse check", () => {
    expect(bubbleSort([9,8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8,9])
  })
  it("normal check2", () => {
    expect(bubbleSort2([1,2,5,3,2,1])).toEqual([1,1,2,2,3,5])
  })
  it("reverse check2", () => {
    expect(bubbleSort2([9,8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8,9])
  })
})