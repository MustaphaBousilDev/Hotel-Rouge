import { prisma } from '@/lib/prisma';
import type { Role, Room, User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextHandler } from 'next-connect';
import { getServerAuthSession } from '../session';
import type { NextApiRequestWithSession } from './auth.middleware';

// some hack to make sure that roles in the array are not duplicated
type Invalid<T> = Error & { __errorMessage: T };
export type Valid<Roles extends Role[]> = {
  [K in keyof Roles]: unknown extends {
    [P in keyof Roles]: K extends P
      ? never
      : Roles[P] extends Roles[K]
      ? unknown
      : never;
  }[keyof Roles]
    ? Invalid<[Roles[K], 'is repeated']>
    : Roles[K];
};

function roleMiddleware<T extends NextApiRequest, Roles extends Role[]>(
  ...roles: Valid<Roles>
) {
  return async (req: T, res: NextApiResponse, next: NextHandler) => {
    const session = await getServerAuthSession({ req, res });
    if (!session || !session.user) {
      res.status(401).json({ error: 'Non autorisé' });
      return;
    }

    let user: Room | User | null;

    if (session.user?.role && !roles.includes(session.user.role)) {
      res.status(401).json({ error: 'Non autorisé' });
      return;
    }
    if (session.user?.role === 'GUEST') {
      user = await prisma.room.findUnique({
        where: { id: session.user?.id as string },
      });
    } else {
      user = await prisma.user.findUnique({
        where: { id: session.user?.id as number },
      });
    }
    if (!user) {
      res.status(401).json({ error: 'Non Autorisé' });
      return;
    }
    (req as T & NextApiRequestWithSession).session = {
      id: user.id,
      role: session.user.role,
      hotelId: user.hotelId,
    };
    return next();
  };
}
export default roleMiddleware;
