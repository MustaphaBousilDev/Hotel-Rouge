import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { type GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';

/**
 * Wrapper for getServerSession https://next-auth.js.org/configuration/nextjs
 * See example usage in the restricted API route
 */
export const getServerAuthSession = async (ctx: {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
}) => {
  return await getServerSession(ctx.req, ctx.res, authOptions);
};
