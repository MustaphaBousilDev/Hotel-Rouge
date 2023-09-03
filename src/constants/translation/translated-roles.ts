import type { Role } from '@prisma/client';

export const STAFF_ROLE_LABELS: {
  [k in Exclude<Role, 'ADMIN' | 'GUEST'>]: string;
} = {
  RECEPTION: 'Receptionist(e)',
  CASHIER: 'Caissier',
  CHEF: 'Chef',
};
