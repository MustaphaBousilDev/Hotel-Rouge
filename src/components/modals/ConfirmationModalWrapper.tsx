import { Dialog, Transition } from '@headlessui/react';
import type { FC, ReactNode } from 'react';
import { Fragment } from 'react';
import { HiX } from 'react-icons/hi';
import SubmitButton from '../buttons/SubmitButton';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  variant?: 'danger' | 'success' | 'warning' | 'primary';
  buttonText: string;
  handleSubmit: () => void;
  isSubmitting?: boolean;
}

const VARIANTS = {
  primary: 'bg-blue-600 enabled:hover:bg-blue-700 focus:ring-blue-500',
  success: 'bg-green-600 enabled:hover:bg-green-700 focus:ring-green-500',
  warning: 'bg-yellow-600 enabled:hover:bg-yellow-700 focus:ring-yellow-500',
  danger: 'bg-red-600 enabled:hover:bg-red-700 focus:ring-red-500',
};

const ConfirmationModalWrapper: FC<Props> = ({
  onClose,
  isOpen,
  buttonText,
  variant = 'primary',
  handleSubmit,
  children,
  isSubmitting,
}) => {
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
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-50 overflow-y-auto'>
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
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='relative bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <HiX
                    className='absolute right-6 top-6 h-6 w-6 cursor-pointer text-gray-600'
                    onClick={onClose}
                  />
                  <div className='sm:flex sm:items-start'>
                    <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-medium leading-6 text-gray-900'
                      >
                        Confirmation
                      </Dialog.Title>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>{children}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  <SubmitButton
                    type='button'
                    className={`${VARIANTS[variant]}`}
                    isSubmitting={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {buttonText}
                  </SubmitButton>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default ConfirmationModalWrapper;
