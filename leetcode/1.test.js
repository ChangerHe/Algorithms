// import twoSum from './1';
const twoSum = require('./1.两数之和')

describe("two sum", () => {
  it('normal check', () => {
    expect(twoSum([1,2,3,4], 6)).toEqual([1,3])
  })
  it('same value check', () => {
    expect(twoSum([1,2,2,4], 4)).toEqual([1,2])
  })
  it('gap position check', () => {
    expect(twoSum([1,2,2,4], 5)).toEqual([0,3])
  })
  
})