export const sort = (a: unknown, b: unknown, direction: 'asc' | 'desc') => {
  return direction === 'asc' ? Number(a) - Number(b) : Number(b) - Number(a);
};
export const asc = (a: unknown, b: unknown) => sort(a, b, 'asc');
export const desc = (a: unknown, b: unknown) => sort(a, b, 'desc');
