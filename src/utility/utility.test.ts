import { asc, desc, parseDateInAustralianFormat } from '.';

describe('the australian date parsing function', () => {
  it('can parse a string in format DD/MM/YYYY into the right format', () => {
    const date = parseDateInAustralianFormat('10/06/1986');

    expect(date.getFullYear()).toBe(1986);
    //starts at 0
    expect(date.getMonth()).toBe(5);
    expect(date.getDate()).toBe(10);

    expect(String(date.toLocaleDateString())).toBe('10/06/1986');
  });
  it('can parse the date 03/03/2021', () => {
    const date = parseDateInAustralianFormat('03/03/2021');

    expect(date.getFullYear()).toBe(2021);
    //starts at 0
    expect(date.getMonth()).toBe(2);
    expect(date.getDate()).toBe(3);
  });

  it('can parse the date 01/06/2006', () => {
    const date = parseDateInAustralianFormat('01/06/2006');

    expect(date.getFullYear()).toBe(2006);
    //starts at 0
    expect(date.getMonth()).toBe(5);
    expect(date.getDate()).toBe(1);
  });
  it('can parse the date 01/06/2010', () => {
    const date = parseDateInAustralianFormat('01/06/2010');

    expect(date.getFullYear()).toBe(2010);
    //starts at 0
    expect(date.getMonth()).toBe(5);
    expect(date.getDate()).toBe(1);
  });

  it('can parse the date 01/08/2014', () => {
    const date = parseDateInAustralianFormat('01/08/2014');

    expect(date.getFullYear()).toBe(2014);
    //starts at 0
    expect(date.getMonth()).toBe(7);
    expect(date.getDate()).toBe(1);
  });

  it('can parse the date 01/04/2023', () => {
    const date = parseDateInAustralianFormat('01/04/2023');

    expect(date.getFullYear()).toBe(2023);
    //starts at 0
    expect(date.getMonth()).toBe(3);
    expect(date.getDate()).toBe(1);
  });
});

describe('the sorting function', () => {
  it('can sort an array of numbers ascending', () => {
    expect([1, 5, 7, 3, 9, 10].sort(asc)).toEqual([1, 3, 5, 7, 9, 10]);
  });

  it('can sort an array of numbers descending', () => {
    expect([1, 5, 7, 3, 9, 10].sort(desc)).toEqual([10, 9, 7, 5, 3, 1]);
  });

  it('can sort an array of dates ascending', () => {
    const dates = [
      '03/03/2021',
      '01/06/2006',
      '01/06/2010',
      '01/08/2014',
      '01/04/2023',
    ].map((item) => Number(parseDateInAustralianFormat(item)));

    expect(
      dates
        .sort(asc)
        .map((number) => new Date(number).toLocaleDateString('en-AU'))
    ).toEqual([
      '01/06/2006',
      '01/06/2010',
      '01/08/2014',
      '03/03/2021',
      '01/04/2023',
    ]);
  });

  it('can sort these dates 01/06/2010 and 01/08/2014 correctly ascending', () => {
    const date1 = parseDateInAustralianFormat('01/06/2010');
    const date2 = parseDateInAustralianFormat('01/08/2014');
    const date3 = new Date();
    expect(
      [date3, date2, date1].sort(asc).map((x) => x.toLocaleDateString())
    ).toStrictEqual(['01/06/2010', '01/08/2014', date3.toLocaleDateString()]);
  });
  it('can sort these dates 01/06/2010 and 01/08/2014 correctly descending', () => {
    const date1 = parseDateInAustralianFormat('01/06/2010');
    const date2 = parseDateInAustralianFormat('01/08/2014');
    const date3 = new Date();
    expect(
      [date3, date1, date2].sort(desc).map((x) => x.toLocaleDateString())
    ).toStrictEqual([date3.toLocaleDateString(), '01/08/2014', '01/06/2010']);
  });

  it('can sort an array of dates descending', () => {
    const dates = [
      '03/03/2021',
      '01/06/2006',
      '01/06/2010',
      '01/08/2014',
      '01/04/2023',
    ].map((item) => Number(parseDateInAustralianFormat(item)));

    expect(
      dates
        .sort(desc)
        .map((number) => new Date(number).toLocaleDateString('en-AU'))
    ).toEqual([
      '01/04/2023',
      '03/03/2021',
      '01/08/2014',
      '01/06/2010',
      '01/06/2006',
    ]);
  });
});
