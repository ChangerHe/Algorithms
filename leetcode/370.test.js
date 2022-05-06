const getModifiedArray = require('./370.区间加法')

describe('', () => {
  it('', () => {
    const modifiedArray = getModifiedArray(5, [[1,3,2], [2,4,3], [0,2,-2]])
    expect(modifiedArray).toEqual([-2,0,3,5,3])
  })
})