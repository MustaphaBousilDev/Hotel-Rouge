import type { ToastVariants } from '@/hooks/useToast';
import { Context } from '@/hooks/useToast';
import type { FC, PropsWithChildren } from 'react';
import { useState } from 'react';
import type { ToastPlacement } from '../feedback/Toast';
import Toast from '../feedback/Toast';

export const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<{
    variant: ToastVariants;
    message: string;
    placement?: ToastPlacement;
  } | null>(null);

  const notify = async (
    variant: ToastVariants,
    message: string,
    delay?: number,
    placement?: ToastPlacement
  ) => {
    setData({ message, variant, placement });
    setVisible(true);
    const to = setTimeout(() => {
      setVisible(false);
      setData(null);
    }, delay ?? 5000);
    return () => clearTimeout(to);
  };
  const close = () => {
    setVisible(false);
    setData(null);
  };
  return (
    <Context.Provider value={notify}>
      {children}
      <Toast
        onClose={() => close()}
        visible={visible}
        message={data?.message ?? ''}
        variant={data?.variant ?? 'success'}
        placement={data?.placement}
      />
    </Context.Provider>
  );
};
