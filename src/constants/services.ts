import type { ServiceButtonVariants } from '@/components/buttons/ServiceButton';
import type { ServiceName } from '@prisma/client';
import type { IconType } from 'react-icons';
import { AiOutlineWechat } from 'react-icons/ai';
import { BiTrip } from 'react-icons/bi';
import { BsFillCalendar2EventFill } from 'react-icons/bs';
import { FaBed, FaSpa } from 'react-icons/fa';
import { IoLogOut, IoRestaurant, IoShirt, IoTvSharp } from 'react-icons/io5';

enum StaticServiceNames {
  CHAT,
  TV,
  EXPRESS_CHECKOUT,
}

export type TEnabledServices = {
  [k in ServiceName]: boolean;
};

export type TStaticServiceNames = keyof typeof StaticServiceNames;

export type AllServices = TStaticServiceNames | ServiceName;

type T = {
  [k in AllServices]: {
    Icon: IconType;
    variant: keyof ServiceButtonVariants;
    link?: string;
  };
};

export const SERVICES_NAVIGATION = {
  RESTAURANT: {
    Icon: IoRestaurant,
    variant: 'purple',
    link: '/services/restaurant',
  },
  SPA: { Icon: FaSpa, variant: 'red', link: '/services/spa' },
  // GYM: { Icon: CgGym, variant: 'teal' },
  HOUSEKEEPING: { Icon: FaBed, variant: 'indigo' },
  LAUNDRY: { Icon: IoShirt, variant: 'lime' },
  // WAKE_UP_SERVICE: { Icon: IoAlarm, variant: 'orange' },
  EXCURSIONS: { Icon: BiTrip, variant: 'green', link: '/services/excursions' },
  // ROOM_SERVICE: { Icon: MdRoomService, variant: 'pink' },
  // SWIMMING_POOL: { Icon: FaSwimmer, variant: 'blue' },
  // ATTRACTIONS: { Icon: IoLocationSharp, variant: 'green' },
  EVENTS: {
    Icon: BsFillCalendar2EventFill,
    variant: 'pink',
    link: '/services/events',
  },
  CHAT: { Icon: AiOutlineWechat, variant: 'blue' },
  TV: { Icon: IoTvSharp, variant: 'gray' },
  EXPRESS_CHECKOUT: { Icon: IoLogOut, variant: 'orange' },
} satisfies T;
