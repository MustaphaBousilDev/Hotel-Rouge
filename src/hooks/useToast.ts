import type { ToastPlacement } from '@/components/feedback/Toast';
import { createContext, useContext } from 'react';

export type ToastVariants = 'success' | 'error' | 'info' | 'warning';

type ToastContextType = (
  variant: ToastVariants,
  message: string,
  delay?: number,
  placement?: ToastPlacement
) => void;


export const Context = createContext<ToastContextType>(() => {});

export const useToast = () => useContext(Context);
