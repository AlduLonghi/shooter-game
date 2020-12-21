import sortAndSlice from '../helpers/sort-and-slice';

describe('Sorting and slicing array', () => {
  it('Sorts and slice an array having more than 5 elements', () => {
    const testArr = [1, 2, 3, 4, 5, 6, 7];
    expect(sortAndSlice(testArr).length).toEqual(5);
  });
  it('Sorts and slice an array having less than 5 elements', () => {
    const testArr = [1, 2, 3, 4];
    expect(sortAndSlice(testArr).length).toEqual(4);
  });
});