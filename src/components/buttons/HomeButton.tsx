import type { FC, PropsWithChildren } from 'react';
import type { IconType } from 'react-icons';

interface Props {
  icon?: IconType;
  handler?: () => void;
}

const HomeButton: FC<PropsWithChildren<Props>> = ({
  children,
  icon,
  handler,
}) => {
  const Icon = icon;
  return (
    <button
      onClick={handler}
      className={`mx-4 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-white text-xl font-medium text-white backdrop-blur-[2.5px] transition-all duration-150 hover:h-32 hover:w-32 hover:bg-white hover:text-black`}
    >
      {Icon && <Icon className='text-2xl' />}
      {children}
    </button>
  );
};
export default HomeButton;
