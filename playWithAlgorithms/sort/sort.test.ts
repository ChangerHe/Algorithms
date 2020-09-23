import { mergeSort, mergeSortBottomUp } from './mergeSort';
import selectSort from './selectSort';
import { randomArrayGenerator, timeSpendRecord } from './../utils/array';
import quickSort from './quickSort';

describe('compare sort time spent', () => {
  const randomArray = randomArrayGenerator(100000, [1, 100]);
  const truthySort = randomArray.sort((a, b) => (a > b ? 1 : -1));
  // 选择排序的时间复杂度O(n2)过于耗时, 先注释
  // it('select sort', () => {
  //   const curArray = [...randomArray];
  //   expect(timeSpendRecord(selectSort, curArray, 'select sort')).toEqual(truthySort);
  // })
  it('merge sort', () => {
    const curArray = [...randomArray];
    expect(timeSpendRecord(mergeSort, curArray, 'merge sort')).toEqual(truthySort);
  })
  it('merge sort bottom up', () => {
    const curArray = [...randomArray];
    expect(timeSpendRecord(mergeSortBottomUp, curArray, 'merge sort bottom up')).toEqual(truthySort);
  })
  it('quick sort', () => {
    const curArray = [...randomArray];
    expect(timeSpendRecord(quickSort, curArray, 'quick sort')).toEqual(truthySort);
  })
  // 50w条数据的测试结论
  // 归并: 19621   自底向上的归并: 23973  快排: 29208

  // 10w条数据的测试结论:
  // 归并: 180   自底向上的归并: 860  快排: 678
  // TODO: 为什么归并会比快排速度快这么多??? 

  // 1w条数据的测试结论
  // 选择: 90    归并: 19   自底向上的归并: 14  快排: 26

  // 1k条数据的测试结论
  // 选择: 3    归并: 2   自底向上的归并: 7  快排: 9
})