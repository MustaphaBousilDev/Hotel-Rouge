import { HOME_PAGES } from '@/constants/home-pages';
import { useUser } from '@/hooks/useUser';
import type { Role } from '@prisma/client';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import LoadingSpiner from '../LoadingSpinner';

const AuthGuard: FC<{ children: ReactNode; role: Role }> = ({
  children,
  role, 
}) => {
  const router = useRouter();
  const { user, status } = useUser();
  // to prevent content rendering before user is authorized
  if (status === 'loading') return <LoadingSpiner />;
  if (user && user.role !== role) {
    router.push(HOME_PAGES[user.role as Role]);
    return <LoadingSpiner />;
  }
  return <>{children}</>;
};
export default AuthGuard;
