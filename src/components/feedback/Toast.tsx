import type { ToastVariants } from '@/hooks/useToast';
import { Transition } from '@headlessui/react';
import { type FC, Fragment } from 'react';
import type { IconType } from 'react-icons';
import { BsCheckCircleFill, BsInfoCircleFill } from 'react-icons/bs';
import { HiX, HiXCircle } from 'react-icons/hi';
import { RiErrorWarningFill } from 'react-icons/ri';
type VariantsObj = {
  [key in ToastVariants]: { color: string; icon: IconType };
};

const VARIANTS: VariantsObj = {
  success: {
    color: 'bg-green-600',
    icon: BsCheckCircleFill,
  },
  error: {
    color: 'bg-red-600',
    icon: HiXCircle,
  },
  warning: {
    color: 'bg-orange-600',
    icon: RiErrorWarningFill,
  },
  info: {
    color: 'bg-blue-600',
    icon: BsInfoCircleFill,
  },
};

export type ToastPlacement = keyof typeof PLACEMENTS;

const PLACEMENTS = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
};

interface Props {
  variant: ToastVariants;
  message: string;
  onClose: () => void;
  className?: string;
  visible?: boolean;
  placement?: keyof typeof PLACEMENTS;
}

const Toast: FC<Props> = ({
  message,
  visible,
  onClose,
  variant,
  className,
  placement = 'top-right',
}) => {
  const Icon = VARIANTS[variant].icon;
  return (
    <Transition
      show={visible}
      as={Fragment}
      enter='transition ease-out duration-300'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-300'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'
    >
      <div
        className={`fixed ${PLACEMENTS[placement]} z-30 mb-4 flex w-full max-w-xs items-center rounded-lg p-4 text-white shadow-lg ${VARIANTS[variant].color} ${className}`}
      >
        <div className='flex items-center gap-2 text-sm font-medium'>
          <Icon className='h-6 w-6' />
          {message}
        </div>
        <button
          type='button'
          className='-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 text-gray-100 focus:ring-2 focus:ring-gray-300'
          onClick={onClose}
        >
          <HiX className='h-5 w-5' />
        </button>
      </div>
    </Transition>
  );
};
export default Toast;
