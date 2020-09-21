import {randomArrayGenerator} from './array'

describe("array tests", () => {
  it("generate random array", () => {
    const randomArr = randomArrayGenerator(10, [1, 5])
    expect(randomArr).toHaveLength(10)
    randomArr.forEach(r => {
      expect(r).toBeLessThanOrEqual(5)
      expect(r).toBeGreaterThanOrEqual(1)
    });
  })
})