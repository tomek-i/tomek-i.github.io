import { Frontmatter, Post } from '../types';

export function calculateTotalYears(startDate: Date, endDate: Date) {
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const startDay = startDate.getDate();

  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();
  const endDay = endDate.getDate();

  let totalYears = endYear - startYear;

  // // Check if the end date's month and day are earlier than the start date's month and day
  // if (startMonth > endMonth || (startMonth === endMonth && startDay > endDay)) {
  //   totalYears--;
  // }

  // // Check if the end date's month and day are later than the start date's month and day
  // if (
  //   startMonth < endMonth ||
  //   (startMonth === endMonth && startDay <= endDay)
  // ) {
  //   totalYears++;
  // }

  return totalYears;
}

export const sort = (a: unknown, b: unknown, direction: 'asc' | 'desc') => {
  return direction === 'asc'
    ? (a as any) - (b as any)
    : (b as any) - (a as any);
};
export const asc = (a: unknown, b: unknown) => sort(a, b, 'asc');
export const desc = (a: unknown, b: unknown) => sort(a, b, 'desc');

export const formatDate = (date: Date) => {
  // Get month and year
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();
  // Format the date as "mm/yyyy"
  return `${month.toString().padStart(2, '0')}/${year}`;
};

export class TagCount {
  constructor(public tag: string, public count: number) {}
}

export function parseDateInAustralianFormat(dateString: string): Date {
  const [day, month, year] = dateString.split('/');
  // JavaScript Date expects month values in the range of 0-11, so subtract 1 from the parsed month
  return new Date(Number(year), Number(month) - 1, Number(day));
}

export function countTags(posts: Post<Frontmatter>[]): TagCount[] {
  const tagCounts = new Map<string, number>();
  for (const obj of posts) {
    for (const tag of obj.frontmatter.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    }
  }
  return Array.from(tagCounts.entries()).map(
    ([tag, count]) => new TagCount(tag, count)
  );
}
