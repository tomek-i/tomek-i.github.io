import { Frontmatter, Post } from '../types';

/**
 * Calculates the total number of years between a start date and an end date.
 * @param startDate The start date.
 * @param endDate The end date.
 * @returns The total number of years between the start and end dates.
 */
export function calculateTotalYears(startDate: Date, endDate: Date) {
  const startYear = startDate.getFullYear();

  const endYear = endDate.getFullYear();

  let totalYears = endYear - startYear;

  return totalYears;
}

/**
 * Sorts two values in ascending or descending order.
 * @param a The first value.
 * @param b The second value.
 * @param direction The sort direction, either 'asc' for ascending or 'desc' for descending.
 * @returns The sorted values.
 */
export const sort = (a: unknown, b: unknown, direction: 'asc' | 'desc') => {
  return direction === 'asc'
    ? (a as any) - (b as any)
    : (b as any) - (a as any);
};

/**
 * Sorts two values in ascending order.
 * @param a The first value.
 * @param b The second value.
 * @returns The sorted values in ascending order.
 */
export const asc = (a: unknown, b: unknown) => sort(a, b, 'asc');

/**
 * Sorts two values in descending order.
 * @param a The first value.
 * @param b The second value.
 * @returns The sorted values in descending order.
 */
export const desc = (a: unknown, b: unknown) => sort(a, b, 'desc');

/**
 * Formats a date as "mm/yyyy".
 * @param date The date to format.
 * @returns The formatted date string.
 */
export const formatDate = (date: Date) => {
  // Get month and year
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();
  // Format the date as "mm/yyyy"
  return `${month.toString().padStart(2, '0')}/${year}`;
};

/**
 * Represents a tag and its count.
 */
export class TagCount {
  /**
   * Creates a new instance of TagCount.
   * @param tag The tag name.
   * @param count The count of the tag.
   */
  constructor(public tag: string, public count: number) {}
}

/**
 * Parses a date string in Australian format (dd/mm/yyyy) and returns a Date object.
 * @param dateString The date string in Australian format.
 * @returns The parsed Date object.
 */
export function parseDateInAustralianFormat(dateString: string): Date {
  const [day, month, year] = dateString.split('/');
  // JavaScript Date expects month values in the range of 0-11, so subtract 1 from the parsed month
  return new Date(Number(year), Number(month) - 1, Number(day));
}

/**
 * Counts the occurrences of each tag in an array of posts.
 * @param posts The array of posts.
 * @returns An array of TagCount objects representing the tag counts.
 */
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
