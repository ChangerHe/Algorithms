import {randomArrayGenerator} from './array'

describe("array tests", () => {
  it("generate random array", () => {
    console.log(randomArrayGenerator(3, [1, 2]), 'randomArrayGenerator(3, [1, 2])')
    expect(randomArrayGenerator(3, [1, 2])).toBeTruthy()
  })
})