import { useEffect, useState } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window ? window.innerWidth : undefined);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);
  return width;
};

export default useWindowWidth;
