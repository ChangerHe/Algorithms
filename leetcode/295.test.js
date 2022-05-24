const MedianFinder = require("./295.数据流的中位数");

describe("", () => {
  // it("", () => {
  //   const medianFinder = new MedianFinder();
  //   medianFinder.addNum(1);
  //   medianFinder.addNum(2);
  //   expect(medianFinder.findMedian()).toEqual(1.5);
  //   medianFinder.addNum(3);
  //   expect(medianFinder.findMedian()).toEqual(2);
  // });
  // it("", () => {
  //   const medianFinder = new MedianFinder();
  //   medianFinder.addNum(-1);
  //   expect(medianFinder.findMedian()).toEqual(-1);
  //   medianFinder.addNum(-2);
  //   expect(medianFinder.findMedian()).toEqual(-1.5);
  //   medianFinder.addNum(-3);
  //   expect(medianFinder.findMedian()).toEqual(-2);
  //   medianFinder.addNum(-4);
  //   expect(medianFinder.findMedian()).toEqual(-2.5);
  //   medianFinder.addNum(-5);
  //   expect(medianFinder.findMedian()).toEqual(-3);
  // });
  it("", () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(6);
    expect(medianFinder.findMedian()).toEqual(6);
    medianFinder.addNum(10);
    expect(medianFinder.findMedian()).toEqual(8);
    medianFinder.addNum(2);
    expect(medianFinder.findMedian()).toEqual(6);
    medianFinder.addNum(6);
    expect(medianFinder.findMedian()).toEqual(6);
    medianFinder.addNum(5);
    expect(medianFinder.findMedian()).toEqual(6);
    medianFinder.addNum(0);
    expect(medianFinder.findMedian()).toEqual(5.5);
    medianFinder.addNum(6);
    expect(medianFinder.findMedian()).toEqual(6);
    medianFinder.addNum(3);
    expect(medianFinder.findMedian()).toEqual(5.5);
    medianFinder.addNum(1);
    expect(medianFinder.findMedian()).toEqual(5);
    medianFinder.addNum(0);
    expect(medianFinder.findMedian()).toEqual(4);
    medianFinder.addNum(0);
    expect(medianFinder.findMedian()).toEqual(3);
  });
});
