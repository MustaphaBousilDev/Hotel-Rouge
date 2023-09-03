import Asset from '@/assets/backgrounds/3.jpg';
import useFetch from '@/hooks/useFetch';
import { Dialog, Transition } from '@headlessui/react';
import type { Wifi } from '@prisma/client';
import Image from 'next/image';
import type { FC } from 'react';
import { Fragment } from 'react';

interface Props {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const WifiModal: FC<Props> = ({ isOpen, onClose }) => {
  const { data, isLoading, error } = useFetch<Wifi[]>(['/api/services/wifi']);

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
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg text-left shadow-xl backdrop-blur-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl'>
                <div className='flex h-96 items-center bg-white shadow-lg'>
                  <div className='relative aspect-square h-full w-auto'>
                    <Image
                      src={Asset}
                      placeholder='blur'
                      alt='Wifi'
                      className='object-cover'
                      fill
                    />
                  </div>
                  <div className='flex-grow p-6'>
                    <h2 className='text-5xl font-bold text-gray-800'>Wi-Fi</h2>
                    <div className='my-4 flex justify-between border-b-2 pb-2 text-xl font-medium italic text-gray-600'>
                      <span className='text-2xl font-semibold text-gray-700'>
                        Point d&apos;accès
                      </span>
                      <span className='text-2xl font-semibold text-gray-700'>
                        Mot de passe
                      </span>
                    </div>
                    {isLoading ? (
                      <p>Chargement...</p>
                    ) : error ? (
                      <p>Une erreur est survenue</p>
                    ) : (
                      data.map(({ id, name, password }) => (
                        <div
                          key={id}
                          className='my-4 flex justify-between text-2xl font-semibold text-gray-800'
                        >
                          <span>{name}</span>
                          <span>{password}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default WifiModal;
