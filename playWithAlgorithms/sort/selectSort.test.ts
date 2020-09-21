const selectSort = require('./selectSort');

describe("selectSort", () => {
  it("normal check", () => {
    expect(selectSort([1,2,5,3,2,1])).toEqual([1,1,2,2,3,5])
  })
  it("reverse check", () => {
    expect(selectSort([9,8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8,9])
  })
})