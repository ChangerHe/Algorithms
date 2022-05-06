const carPooling = require('./1094.拼车')

describe('', () => {
  it('', () => {
    const bool = carPooling([[3,2,7],[3,7,9],[8,3,9]], 11)
    expect(bool).toBe(true)
    const bool1 = carPooling([[2,1,5]], 1)
    expect(bool1).toBe(false)
  })
})