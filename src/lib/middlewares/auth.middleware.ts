import { prisma } from '@/lib/prisma';
import type { Role, Room, User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextHandler } from 'next-connect';
import { getServerAuthSession } from '../session';

export type NextApiRequestWithSession = NextApiRequest & {
  session: {
    role: Role;
    id: number | string;
    hotelId: number;
  };
};

export default async function authMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) {
  const session = await getServerAuthSession({ req, res });
  if (!session || !session.user) {
    res.status(401).json({ error: 'Non autorisé' });
    return;
  }

  let user: Room | User | null;
  if (session.user.role === 'GUEST') {
    user = await prisma.room.findUnique({
      where: { id: session.user.id as string },
    });
  } else {
    user = await prisma.user.findUnique({
      where: { id: session.user.id as number },
    });
  }
  if (!user) {
    res.status(404).json({ error: 'Non Autorisé' });
    return;
  }
  (req as NextApiRequestWithSession).session = {
    id: user.id,
    role: session.user.role,
    hotelId: user.hotelId,
  };
  return next();
}
