import { useEffect, useRef, useState } from 'react';

const Loader = () => {
  const [width, setWidth] = useState(0);
  const widthRef = useRef(0);
  useEffect(() => {
    const i = setInterval(() => {
      setWidth((w) => w + 5);
      widthRef.current += 5;
      if (widthRef.current >= 90) clearInterval(i);
    }, 500);
    return () => clearInterval(i);
  }, []);
  return (
    <div className='fixed inset-x-0 top-0 z-50 h-1 w-full rounded-full bg-gray-200 bg-opacity-80'>
      <div
        className='h-1 rounded-full bg-blue-600 transition-[width]'
        style={{ width: `${width}%` }}
      />
    </div>
  );
};
export default Loader;
