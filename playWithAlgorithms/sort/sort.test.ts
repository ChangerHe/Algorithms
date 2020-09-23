import { mergeSort, mergeSortBottomUp } from './mergeSort';
import selectSort from './selectSort';
import { randomArrayGenerator, timeSpendRecord } from './../utils/array';

describe('compare sort time spent', () => {
  const randomArray = randomArrayGenerator(50000, [1, 100]);
  it('select sort', () => {
    const curArray = [...randomArray];
    timeSpendRecord(selectSort, curArray, 'select sort')
  })
  it('merge sort', () => {
    const curArray = [...randomArray];
    timeSpendRecord(mergeSort, curArray, 'merge sort')
  })
  it('merge sort bottom up', () => {
    const curArray = [...randomArray];
    timeSpendRecord(mergeSortBottomUp, curArray, 'merge sort bottom up')
  })
})