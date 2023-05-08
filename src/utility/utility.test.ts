import { asc, desc } from '.';

describe('the sorting function', () => {
  it('can sort an array of numbers ascending', () => {
    expect([1, 5, 7, 3, 9, 10].sort(asc)).toEqual([1, 3, 5, 7, 9, 10]);
  });

  it('can sort an array of numbers descending', () => {
    expect([1, 5, 7, 3, 9, 10].sort(desc)).toEqual([10, 9, 7, 5, 3, 1]);
  });
});
