import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export const useUser = ({
  redirectIfUnauthenticated = '/auth/login',
} = {}) => {
  const { push } = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      push(redirectIfUnauthenticated);   
    },
  });
  const logout = () => signOut({ callbackUrl: redirectIfUnauthenticated });
  return {
    user: session?.user,
    status,
    logout,
  };
};
