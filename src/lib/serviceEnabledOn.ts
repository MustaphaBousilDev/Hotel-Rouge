import type { ServiceName } from '@prisma/client';
import { prisma } from '@/lib/prisma';

export default async function serviceEnabledOn(
  service: ServiceName,
  hotelId: number
) {
  return (
    (await prisma.enabledService.findUnique({
      where: {
        name_hotelId: { hotelId, name: service },
      },
    })) !== null
  );
}
