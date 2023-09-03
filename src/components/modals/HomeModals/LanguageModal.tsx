import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import type { FC, ReactNode } from 'react';
import { Fragment } from 'react';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const LANGUAGES = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
];

const LanguageModal: FC<Props> = ({ isOpen, onClose }) => {
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
              <Dialog.Panel className='relative mx-4 transform overflow-hidden rounded-lg text-left shadow-xl backdrop-blur-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl'>
                <div className='flex h-72 flex-col items-center justify-evenly bg-white px-4 py-8 shadow-lg'>
                  <h3 className='text-2xl font-bold text-gray-800'>
                    Choisire votre langue
                  </h3>
                  <div className='flex'>
                    {LANGUAGES.map(({ code, name }) => (
                      <button
                        key={code}
                        className='group relative mx-4 h-16 w-16 focus:outline-none'
                      >
                        <Image
                          alt={code}
                          src={`/flags/${code}.png`}
                          className='object-cover'
                          fill
                        />
                        <span className='absolute -top-8 left-1/2 hidden -translate-x-1/2 rounded-md bg-black px-2 py-1 text-sm text-white focus:outline-none group-hover:block group-focus:block'>
                          {name}
                        </span>
                      </button>
                    ))}
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
export default LanguageModal;
