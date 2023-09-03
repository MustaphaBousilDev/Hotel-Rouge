import { useRouter } from 'next/router';
import { type FC, type PropsWithChildren, useEffect, useState } from 'react';

const ErrorPage: FC<PropsWithChildren> = ({ children }) => {
  // make a five second timer
  //that will redirect to the home page
  const router = useRouter();
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);
  useEffect(() => {
    if (timer === 0) router.back();
  }, [timer, router]);
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-br from-rose-600 via-red-600 to-red-700 font-bold text-white'>
      <div className='mb-4 text-center text-5xl'>
        {children ?? 'Une erreur inattendue est survenue.'}
      </div>
      <div className='text-center text-7xl'>{timer}</div>
    </div>
  );
};
export default ErrorPage;
