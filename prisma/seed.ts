import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
     const hotel = await prisma.hotel.upsert({
       where: { id: 1 },
       update: {},
       create: {
         id: 1,
         name: 'MUGIWARA Hotel',
         description: 'Hotel 1 description',
         phone: '123456789',
         address: '123 Main St',
         city: 'RAFTIL',
         email: 'zaki@hotel.com',
         website: 'www.zaki.com',
         latitude: 36.898,
         longitude: -1.9,
       },
     });
     const _adminUser = await prisma.user.upsert({
       where: { email: 'mugiwara@luffy.com' },
       update: {},
       create: {
         email: 'mugiwara@luffy.com',
         password:
           '$argon2id$v=19$m=4096,t=3,p=1$GVvD4ki+HryewjEsRp3Rvg$9Nb2c69CBxTgpUyS4IEaSJ/NheP+KdjRuD8IdKugyG8', //admin
         role: 'ADMIN',
         name: 'Admin',
         hotelId: hotel.id,
       },
     });
}



     
main()
.then(async () => {
  await prisma.$disconnect();
})
.catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
