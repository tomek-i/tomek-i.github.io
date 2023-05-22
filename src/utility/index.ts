export const sort = (a: unknown, b: unknown, direction: 'asc' | 'desc') => {
  // console.log('SORT', { a, b, an: Number(a), bn: Number(b) });
  return direction === 'asc' ? Number(a) - Number(b) : Number(b) - Number(a);
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
