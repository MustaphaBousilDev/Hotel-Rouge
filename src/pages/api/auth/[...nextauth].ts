import { prisma } from '@/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { Role } from '@prisma/client';
import type { AxiosError } from 'axios';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { env } from '@/env/server.mjs';

export const authOptions: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: 'admin-login',
      name: 'Admin login',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'test@test.com',
        },
        password: { label: 'Mot de passe', type: 'password' },
      },
      async authorize(credentials, _request) {
        try {
          const { data: user } = await axios.post<{
            id: string;
            email: string;
            name: string;
            role: Role;
            hotelId: number;
          }>(`${env.APP_URL}/api/auth/admin/login`, credentials);
          return user;
        } catch (err) {
          throw Error(
            (err as AxiosError<{ message: string }>).response?.data.message
          );
        }
      },
    }),
    CredentialsProvider({
      id: 'room-login',
      name: 'Room login',
      credentials: {
        roomId: { label: 'Id de la chambre', type: 'text' },
        password: { label: 'Mot de passe', type: 'password' },
      },
      authorize: async (credentials, _request) => {
        try {
          const { data: room } = await axios.post<{
            id: string;
            role: 'GUEST';
            hotelId: number;
          }>(`${env.APP_URL}/api/auth/room/login`, credentials);
          return room;
        } catch (err) {
          throw Error(
            (err as AxiosError<{ message: string }>).response?.data.message
          );
        }
      },
    }),
  ],
  callbacks: {
    async signIn({}) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user?.role ?? 'GUEST';
        token.hotelId = user?.hotelId;
      }
      return token;
    },
    async session({ session, token }) {
      const sess = {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
          hotelId: token.hotelId,
        },
      };
      return sess;
    },
  },
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: env.JWT_SECRET,
    maxAge: 10 * 24 * 30 * 60, // 30 days
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/login',
    newUser: '/api/auth/register',
    error: '/auth/login',
  },
  debug: env.NODE_ENV === 'development',
  useSecureCookies: env.NODE_ENV === 'production',
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return NextAuth(req, res, authOptions);
}
