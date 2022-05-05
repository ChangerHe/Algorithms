const subarraySum = require('./560.和为-k-的子数组')

describe('', () => {
  it('', () => {
    expect(subarraySum([1,1,1], 2)).toBe(2)
    expect(subarraySum([1,2,3], 3)).toBe(2)
    expect(subarraySum([1], 1)).toBe(1)
    expect(subarraySum([3,5,2,-2,4,1], 5)).toBe(4)
    expect(subarraySum([1, -1, 0], 0)).toBe(3)
    expect(subarraySum([0,0,0,0,0,0,0,0,0,0], 0)).toBe(55)
  })
})