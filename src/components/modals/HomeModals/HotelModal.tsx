import Asset from '@/assets/backgrounds/3.jpg';
import useFetch from '@/hooks/useFetch';
import { Dialog, Transition } from '@headlessui/react';
import type { Hotel } from '@prisma/client';
import Image from 'next/image';
import type { FC } from 'react';
import { Fragment } from 'react';

interface Props {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const HotelModal: FC<Props> = ({ isOpen, onClose }) => {
  const {
    data: hotel,
    isLoading,
    isError,
    error,
  } = useFetch<Hotel>(['/api/tv/hotel']);
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
              <Dialog.Panel className='relative mx-4 transform overflow-hidden rounded-lg text-left shadow-xl backdrop-blur-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl'>
                <div className='flex h-96 items-center bg-white shadow-lg'>
                  <div className='relative aspect-square h-full w-auto'>
                    <Image
                      src={Asset}
                      placeholder='blur'
                      alt='image'
                      className='object-cover'
                      fill
                    />
                  </div>
                  {isLoading ? (
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='h-32 w-32 animate-spin rounded-full border-t-2 border-b-2 border-gray-900' />
                    </div>
                  ) : isError ? (
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='text-red-500'>{error?.message}</div>
                    </div>
                  ) : (
                    <div className='flex-grow p-4'>
                      <h2 className='text-4xl font-bold text-gray-700'>
                        {hotel.name}
                      </h2>
                      <p className='mt-2 text-lg font-medium text-gray-500 first-letter:text-3xl first-letter:font-bold first-letter:uppercase'>
                        {hotel.description}
                      </p>
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
export default HotelModal;
