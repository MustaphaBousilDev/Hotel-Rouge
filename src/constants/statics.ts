 import UsersIcon from "@/icons/UsersIcon";
 import BathRoomIcon from "@/icons/BathRoomIcon";
 import OrdersIcon from "@/icons/OrdersIcon";
 import BookingIcon from "@/icons/BookingIcon";
 import ArrowTradingIcon from "@/icons/ArrowTradingIcon";
import { TStatic } from "@/pages/admin";



export const STATICS: TStatic[] = [
    {
      url: '/admin/hotel',
      label: 'Total Guasts', 
      percent: 2,
      total: 100,
      Icon: UsersIcon,
      IconTradinf: ArrowTradingIcon,
    },
    {
        url: '/admin/hotel',
        label: 'Total Rooms',
        percent: 2,
        total: 100,
        Icon: BathRoomIcon,
        IconTradinf: ArrowTradingIcon,
    },
    {
        url: '/admin/hotel',
        label: 'Total Orders',
        percent: 2,
        total: 100,
        Icon: OrdersIcon,
        IconTradinf: ArrowTradingIcon,
    },
    {
        url: '/admin/hotel',
        label: 'Total Bookings',
        percent: 2,
        total: 100,
        Icon: BookingIcon,
        IconTradinf: ArrowTradingIcon,
    },
  ];


  export const BOOKING_DASH_STATICS: TStatic[] = [
    {
      url: '/admin/hotel',
      label: 'Free Rooms', 
      percent: 2,
      total: 100,
      Icon: UsersIcon,
      IconTradinf: ArrowTradingIcon,
    },
    {
        url: '/admin/hotel',
        label: 'Total Bookings',
        percent: 2,
        total: 100,
        Icon: BathRoomIcon,
        IconTradinf: ArrowTradingIcon,
    },
  ];