import type { TLink } from '@/components/sidebars/SideBar';
import { BsBookmarkPlusFill } from 'react-icons/bs';
import { FaBook, FaClipboardList } from 'react-icons/fa';
import { MdMeetingRoom } from 'react-icons/md';
// import { RiPieChart2Fill } from 'react-icons/ri';

export const RECEPTION_NAV: TLink[] = [
  // { url: '/reception', label: 'Panneau', Icon: RiPieChart2Fill },
  {
    url: '/reception',
    label: 'Chambres',
    Icon: MdMeetingRoom,
  },
  {
    url: '',
    label: 'Réservations',
    Icon: FaBook,
    sub: [
      { url: '/reception/bookings', label: 'Liste', Icon: FaClipboardList },
      {
        url: '/reception/bookings/add',
        label: 'Ajouter',
        Icon: BsBookmarkPlusFill,
      },
    ],
  },
];
