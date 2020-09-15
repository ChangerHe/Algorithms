import index from './index';

describe("run index successfully", () => {
  it("run index", () => {
    expect(index('a')).toBe(undefined)
  })
})