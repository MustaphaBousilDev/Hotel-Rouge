import useFetch from '@/hooks/useFetch';
import { timestampToUnix } from '@/lib/formatters/dateFormat';
import type { Forecast } from '@/validation/forecast.type';
import type { Weather } from '@/validation/weather.type';
import { Dialog, Transition } from '@headlessui/react';
import type { Hotel } from '@prisma/client';
import type { AxiosError } from 'axios';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Image from 'next/image';
import type { FC } from 'react';
import { Fragment } from 'react';
import { BiWind } from 'react-icons/bi';
import { FaTemperatureHigh } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';

interface Props {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const WeatherModal: FC<Props> = ({ isOpen, onClose }) => {
  const { data: hotel, isLoading, error } = useFetch<Hotel>(['/api/tv/hotel']);

  const {
    isLoading: isForecastLoading,
    data: forecast,
    error: errorForecast,
  } = useFetch<Forecast, AxiosError>(
    ['/api/weather/forecast'],
    {
      enabled: !!hotel?.latitude && !!hotel?.longitude,
      staleTime: 1000 * 60 * 60,
    },
    { params: { lat: hotel?.latitude, lon: hotel?.longitude } }
  );
  const {
    isLoading: isWeatherLoading,
    data: weatherNow,
    error: errorWeather,
  } = useFetch<Weather>(
    ['/api/weather/now'],
    {
      enabled: !!hotel?.latitude && !!hotel?.longitude,
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    },
    { params: { lat: hotel?.latitude, lon: hotel?.longitude } }
  );
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-700 bg-opacity-40 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative mx-2 transform overflow-hidden rounded-lg text-left shadow-xl backdrop-blur-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl'>
                <div className='w-full  bg-blue-400 bg-opacity-70 text-white shadow-lg'>
                  {errorForecast || errorWeather || error ? (
                    <p className='text-2xl font-bold'>
                      Une erreur s&apos;est produite ...
                    </p>
                  ) : isForecastLoading || isWeatherLoading || isLoading ? (
                    <p className='text-2xl font-bold'>Chargement ...</p>
                  ) : (
                    <div className='grid h-full w-full grid-cols-3'>
                      <div className='flex h-full min-w-[30%] flex-col border-r border-white py-4 px-8'>
                        <div className='h-20'>
                          <p className='text-2xl font-bold'>
                            {forecast.city.name}
                          </p>
                          <p className='text-xl font-semibold first-letter:uppercase'>
                            {format(
                              timestampToUnix(weatherNow.dt),
                              'EEEE dd MMMM yyyy HH:mm',
                              { locale: fr }
                            )}
                          </p>
                        </div>
                        <div className='flex flex-grow flex-col items-center'>
                          <Image
                            src={`http://openweathermap.org/img/wn/${weatherNow.weather[0]?.icon}@4x.png`}
                            width={150}
                            height={150}
                            alt='icon'
                          />
                          <p className='text-center text-2xl font-semibold first-letter:uppercase'>
                            {weatherNow.weather[0]?.description ?? ''}
                          </p>
                        </div>
                        <div className='my-4 flex h-20 items-center justify-between'>
                          <div className='flex flex-col items-center'>
                            <FaTemperatureHigh className='h-8 w-8' />
                            <p className='text-2xl font-bold'>
                              {Math.floor(weatherNow.main.temp)}
                              <span className='text-lg font-medium'>°C</span>
                            </p>
                          </div>
                          <div className='flex flex-col items-center'>
                            <BiWind className='h-8 w-8' />
                            <p className='text-2xl font-bold'>
                              {weatherNow.wind.speed}
                              <span className='text-lg font-medium'>m/s</span>
                            </p>
                          </div>
                          <div className='flex flex-col items-center'>
                            <WiHumidity className='h-8 w-8' />
                            <p className='text-2xl font-bold'>
                              {weatherNow.main.humidity}
                              <span className='text-lg font-medium'>%</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='col-span-2 grid h-full flex-grow grid-cols-1'>
                        {forecast.list.map((item, idx) => (
                          <div
                            key={idx}
                            className='relative grid grid-cols-5 items-center gap-2 py-2 px-4'
                          >
                            <span className='text-xl font-medium'>
                              {format(timestampToUnix(item.dt), 'HH:mm', {
                                locale: fr,
                              })}
                            </span>
                            <div className='relative'>
                              <Image
                                src={`http://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`}
                                width={40}
                                height={40}
                                className='object-cover'
                                alt='icon'
                              />
                            </div>
                            <span className='flex items-center text-xl font-medium'>
                              <FaTemperatureHigh className='mr-2' />
                              {Math.floor(item.main.temp)}°C
                            </span>

                            <span className='flex items-center text-xl font-medium'>
                              <BiWind className='mr-2' />
                              {item.wind.speed}m/s
                            </span>
                            <span className='flex items-center text-xl font-medium'>
                              <WiHumidity className='mr-2 h-full w-auto' />
                              {item.main.humidity}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default WeatherModal;
