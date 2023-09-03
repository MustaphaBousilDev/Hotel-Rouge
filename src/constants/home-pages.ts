import type { Role } from '@prisma/client';

export type T_HOME_PAGES = {
  [k in Role]: `/${string}`;
};

export const HOME_PAGES = {
  GUEST: '/',
  ADMIN: '/admin',
  RECEPTION: '/reception',
  CASHIER: '/cashier',
  CHEF: '/chef',
} satisfies T_HOME_PAGES;
