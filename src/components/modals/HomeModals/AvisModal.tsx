import Asset from '@/assets/backgrounds/3.jpg';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import type { FC, ReactNode } from 'react';
import { Fragment } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const AvisModal: FC<Props> = ({ isOpen, onClose }) => {
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
              <Dialog.Panel className='relative mx-4 transform overflow-hidden rounded-lg text-left shadow-xl backdrop-blur-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl'>
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
                  <div className='flex-grow p-4'>
                    <h2 className='text-center text-2xl font-bold text-gray-700'>
                      Que pensez vous de notre hôtel?
                    </h2>
                    <div className='mt-8 flex justify-center text-yellow-500'>
                      <AiFillStar className='h-12 w-12' />
                      <AiFillStar className='h-12 w-12' />
                      <AiFillStar className='h-12 w-12' />
                      <AiOutlineStar className='h-12 w-12' />
                      <AiOutlineStar className='h-12 w-12' />
                    </div>
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
export default AvisModal;
