import { z } from 'zod';

export interface Paginated<T> {
  data: T[];
  from: number;
  to: number;
  hasMore: boolean;
  links: { next: number | null; prev: number | null };
  total: number;
  pages: number;
}

export const paginationObject = (cPage: number, by = 10) => ({
  skip: (cPage - 1) * by,
  take: by + 1,
});

export const paginate = <T>(
  list: T[],
  total: number,
  currentPage: number,
  by = 10
): Paginated<T> => ({
  data: list.length > by ? list.slice(0, by) : list,
  from: list.length ? (currentPage - 1) * by + 1 : 0,
  to: (currentPage - 1) * by + list.length,
  hasMore: list.length > by,
  links: {
    next: list.length > by ? currentPage + 1 : null,
    prev: currentPage === 1 ? null : currentPage - 1,
  },
  total: total ?? 0,
  pages: Math.ceil(total / by),
});

export const parsePage = (n?: string | string[] | null) => {
  const page = z.coerce
    .number()
    .transform((n) => (n < 1 ? 1 : n))
    .safeParse(n);
  if (!page.success) return 1;
  return page.data;
};

export interface CursorPaginated<T> {
  data: T[];
  firstItemId: number;
  lastItemId: number;
  nextCursor: number | null;
  perPage: number;
  total: number;
  hasMore: boolean;
}

export function cursorPaginate<T extends { id: number }>(
  data: T[],
  perPage: number,
  total: number
): CursorPaginated<T> {
  const hasMore = data.length > perPage;
  const result = hasMore ? data.slice(0, perPage) : data;
  return {
    data: result,
    firstItemId: (result[0] as T).id,
    lastItemId: hasMore ? (result.at(-2) as T).id : (result.at(-1) as T).id,
    perPage,
    hasMore,
    total,
    nextCursor: hasMore ? (data.at(-1) as T).id : null,
  };
}
