import Link from 'next/link';
import type { FC } from 'react';
import type { Url } from 'url';

export const VARIANTS = {
  purple: 'bg-purple-500',
  green: 'bg-green-500',
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-500',
  gray: 'bg-gray-500',
  lime: 'bg-lime-500',
  orange: 'bg-orange-500',
  pink: 'bg-pink-500',
  teal: 'bg-teal-500',
  indigo: 'bg-indigo-500',
};

export type ServiceButtonVariants = typeof VARIANTS;

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: keyof ServiceButtonVariants;
  href?: Url | string;
}

const ServiceButton: FC<Props> = ({
  children,
  className,
  variant = 'blue',
  href = '',
  ...props
}) => {
  return (
    <Link
      href={href}
      className={`flex aspect-video max-h-fit flex-col items-center justify-center rounded-lg  p-4 text-lg font-semibold text-white ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};
export default ServiceButton;
