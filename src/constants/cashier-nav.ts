import type { TLink } from '@/components/sidebars/SideBar';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { IoListCircle } from 'react-icons/io5';
// import { RiPieChart2Fill } from 'react-icons/ri';

export const CASHIER_NAV: TLink[] = [
  // { url: '/cashier', label: 'Panneau', Icon: RiPieChart2Fill },
  { url: '/cashier', label: 'Commandes', Icon: IoListCircle },
  { url: '/cashier/pos', label: 'POS', Icon: BsFillCartPlusFill },
];
