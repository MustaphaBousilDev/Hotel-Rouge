import Bg from '@/assets/services/room.jpg';
import ErrorPage from '@/components/ErrorPage';
import LoadingSpiner from '@/components/LoadingSpinner';
import ShoppingCart from '@/components/ShoppingCart';
import HomeButton from '@/components/buttons/HomeButton';
import AvisModal from '@/components/modals/HomeModals/AvisModal';
import HotelModal from '@/components/modals/HomeModals/HotelModal';
import InfoModal from '@/components/modals/HomeModals/InfoModal';
import LanguageModal from '@/components/modals/HomeModals/LanguageModal';
import ServicesModal from '@/components/modals/HomeModals/ServicesModal';
import WeatherModal from '@/components/modals/HomeModals/WeatherModal';
import WifiModal from '@/components/modals/HomeModals/WifiModal';
import { title } from '@/lib/formatters/stringFormat';
import type { Weather } from '@/validation/weather.type';
import type { Booking, Guest, Hotel, Room } from '@prisma/client';
import useFetch from '@/hooks/useFetch';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaFileInvoiceDollar, FaHotel, FaStar, FaWifi } from 'react-icons/fa';
import { ImSpinner3 } from 'react-icons/im';
import { IoLanguage } from 'react-icons/io5';
import { MdOutlineError } from 'react-icons/md';
import { TbHotelService } from 'react-icons/tb';
import { TiWeatherSunny } from 'react-icons/ti';

const Home = () => {
  
  
  return (
    <>Home</>
  )
};

Home.auth = {
  role: 'GUEST',
};

export default Home;
