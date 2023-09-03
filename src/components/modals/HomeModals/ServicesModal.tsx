import RoomImg from '@/assets/services/room.jpg';
import ServiceButton from '@/components/buttons/ServiceButton';
import type { AllServices, TEnabledServices } from '@/constants/services';
import { SERVICES_NAVIGATION } from '@/constants/services';
import { translatedServiceName } from '@/constants/translation/translated-services';
import { fetcher } from '@/hooks/useFetch';
import { useUser } from '@/hooks/useUser';
import { capitalize } from '@/lib/formatters/stringFormat';
import { Dialog, Transition } from '@headlessui/react';
import type { Hotel, Room, RoomType, ServiceName } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import type { FC } from 'react';
import { Fragment } from 'react';

interface Props {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ServicesModal: FC<Props> = ({ isOpen, onClose }) => {
  const { user } = useUser({ redirectIfUnauthenticated: '/auth/room-login' });
  const { data, isLoading, error } = useQuery({
    queryKey: ['getServices'],
    queryFn: async () => await fetcher<TEnabledServices>('/api/services'),
  });
  const {
    data: room,
    isLoading: isLoadingRoom,
    error: errorRoom,
  } = useQuery({
    queryKey: ['/api/hotel/rooms', user?.id],
    queryFn: async () =>
      await fetcher<Room & { hotel: Hotel; roomType: RoomType }>(
        `/api/hotel/rooms/${user?.id}`
      ),
  });
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
              <Dialog.Panel className='relative mx-4 transform overflow-hidden rounded-lg text-left shadow-xl backdrop-blur-xl transition-all'>
                {isLoading || isLoadingRoom ? (
                  <h1 className='my-auto text-center text-xl font-semibold text-white'>
                    Chargement des services
                  </h1>
                ) : error || errorRoom ? (
                  <h1 className='my-auto text-center text-xl font-semibold text-white'>
                    Une Erreur est survenue
                  </h1>
                ) : !data || !room ? (
                  <h1 className='my-auto text-center text-xl font-semibold text-white'>
                    Pas de services
                  </h1>
                ) : (
                  <div className='grid-rows-auto ml-4 grid max-h-[28rem] min-h-[28rem] grid-flow-row-dense grid-cols-6 justify-evenly gap-2 overflow-auto px-4 py-4'>
                    <div className='col-span-2 row-span-2 flex flex-col overflow-hidden rounded-lg'>
                      <div className='h-14 bg-gray-900 p-4 text-lg font-semibold text-white'>
                        <span className='uppercase'>
                          {room.roomType.name} N° {room.number}
                        </span>
                      </div>
                      <div className='relative flex-grow'>
                        <Image
                          src={room.roomType.feature ?? RoomImg}
                          alt='room'
                          className='rounded-b-lg bg-cover bg-bottom object-cover'
                          fill
                        />
                      </div>
                    </div>
                    {Object.entries(SERVICES_NAVIGATION).map(
                      ([service, { Icon, variant, link }]) => {
                        if (data[service as ServiceName] === false) return null;
                        return (
                          <ServiceButton
                            key={service}
                            href={link}
                            variant={variant}
                            className='col-span-auto'
                          >
                            <Icon className='h-10 w-10' />
                            {capitalize(
                              translatedServiceName[service as AllServices].fr
                            )}
                          </ServiceButton>
                        );
                      }
                    )}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default ServicesModal;
