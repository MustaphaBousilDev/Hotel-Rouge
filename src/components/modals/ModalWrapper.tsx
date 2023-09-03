import { Dialog, Transition } from '@headlessui/react';
import type { ReactNode } from 'react';
import { Fragment } from 'react';
import { HiX } from 'react-icons/hi';
import Button, { type ButtonVariant } from '../buttons/Button';

interface Props<T extends string | null> {
  children?: ReactNode;
  isOpen: boolean;
  setOpen: (v: boolean) => void;
  variant?: T extends string ? ButtonVariant : never;
  buttonText?: T;
  handleSubmit?: T extends string ? () => void : never;
  title: string;
  isSubmitting?: T extends string ? boolean : never;
}

const ModalWrapper = <T extends string | null>({
  setOpen,
  isOpen,
  buttonText,
  variant,
  handleSubmit,
  title,
  children,
  isSubmitting,
}: Props<T>) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={setOpen}>
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
              <Dialog.Panel className='relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='relative px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <HiX
                    className='absolute right-6 top-6 h-6 w-6 cursor-pointer text-gray-600'
                    onClick={() => setOpen(false)}
                  />
                  <div className='sm:flex sm:items-start'>
                    <div className='mt-3 flex-grow text-center sm:mt-0 sm:ml-4 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-medium leading-6 text-gray-900'
                      >
                        {title}
                      </Dialog.Title>
                      <div className='mt-2'>{children}</div>
                    </div>
                  </div>
                </div>
                {typeof buttonText === 'string' ? (
                  <div className='px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                    <Button
                      variant={variant ?? 'primary'}
                      isLoading={isSubmitting}
                      onClick={handleSubmit}
                    >
                      {buttonText}
                    </Button>
                  </div>
                ) : null}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default ModalWrapper;
