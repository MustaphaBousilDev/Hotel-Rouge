import { type DefaultSession } from 'next-auth'


declare module 'next-auth' {
     interface Session {
          user?: {
               id: string | number 
               role: Role 
               hotelId:number
          } & DefaultSession['user']
     }
}



declare module 'next-auth/jwt' {
     interface JWT{
          id: string | number 
          role: Role 
          hotelId:number 
     }
}