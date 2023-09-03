import type { TLink } from '@/components/sidebars/SideBar';
import { BsPlusCircleFill, BsToggleOn } from 'react-icons/bs';
import { FaHotel, FaUserPlus, FaWifi } from 'react-icons/fa';
import { HiPresentationChartLine } from 'react-icons/hi';
import { IoListCircleSharp, IoRestaurant } from 'react-icons/io5';
import { MdBedroomParent, MdRoomPreferences, MdSpa } from 'react-icons/md';
import {
  RiAccountPinCircleFill,
  RiPieChart2Fill,
  RiSettings4Fill,
} from 'react-icons/ri';
import { TbHotelService } from 'react-icons/tb';

export const ADMIN_NAV: TLink[] = [
  
  {
    url: '/admin',
    label: 'Dashboard',
    Icon: HiPresentationChartLine,
    sub: [
      {
        url: '/admin/statistics/rooms',
        label: 'Chambres & réservations',
        Icon: MdRoomPreferences,
      },
      {
        url: '/admin/statistics/employees',
        label: 'Employés',
        Icon: RiAccountPinCircleFill,
      },
      {
        url: '/admin/statistics/services',
        label: 'Services',
        Icon: TbHotelService,
      },
    ],
  },
  {
    url: '/admin/hotel',
    label: 'Analyses',
    Icon: FaHotel
  },
  {
    url: '/admin/hotel',
    label: 'Chats',
    Icon: FaHotel
  },
  {
    url: '/admin/hotel',
    label: 'Calendar',
    Icon: FaHotel
  },
  {
    url: '/admin/hotel',
    label: 'Hôtel',
    Icon: FaHotel
  },
  {
    url: '',
    label: 'Employés',
    Icon: RiAccountPinCircleFill,
    sub: [
      {
        url: '/admin/staff/add',
        label: 'Ajouter un employé',
        Icon: FaUserPlus,
      },
      {
        url: '/admin/staff/list',
        label: 'Liste des comptes',
        Icon: IoListCircleSharp,
      },
    ],
  },
  {
    url: '',
    label: 'Chambres',
    Icon: MdRoomPreferences,
    sub: [
      {
        url: '/admin/rooms',
        label: 'Liste des chambres',
        Icon: IoListCircleSharp,
      },
      {
        url: '/admin/rooms/add',
        label: 'Ajouter les chambres',
        Icon: BsPlusCircleFill,
      },
      {
        url: '/admin/rooms/room-types',
        label: 'Types de chambres',
        Icon: MdBedroomParent,
      },
    ],
  },
  {
    url: '',
    label: 'Services',
    Icon: TbHotelService,
    sub: [
      {
        url: '/admin/services',
        label: 'Liste des services',
        Icon: BsToggleOn,
      },
      {
        url: '/admin/services/wifi',
        label: 'Wifi',
        Icon: FaWifi,
      },
      {
        url: '/admin/services/restaurant',
        label: 'Restaurant',
        Icon: IoRestaurant,
      },
      {
        url: '/admin/services/spa',
        label: 'SPA',
        Icon: MdSpa,
      },
    ],
  },
  { url: '/admin/settings', label: 'Paramètres', Icon: RiSettings4Fill },
];
