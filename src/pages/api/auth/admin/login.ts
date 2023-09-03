import { router } from '@/lib/router';
import { prisma } from '@/lib/prisma';
import { loginSchema } from '@/validation/auth/login.type';
import { verify } from 'argon2';

export default router().post(async (req, res) => {
  const { email, password } = loginSchema.parse(req.body);
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
    select: {
      id: true,
      email: true,
      password: true,
      name: true,
      role: true,
      active: true,
      hotelId: true,
    },
  });
  if (!user || !user.active)
    return res.status(401).json({ message: 'Identifiants incorrects' });
  const isValid = await verify(user.password, password);
  if (!isValid)
    return res.status(401).json({ message: 'Identifiants incorrects' });
  res.status(200).json({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    hotelId: user.hotelId,
  });
});
