import { useState, useEffect } from 'react';

let defaultWidth;

if (typeof window !== 'undefined') {
  defaultWidth = window.innerWidth;
}

const useWindowWidth = () => {
  const [width, setWidth] = useState(defaultWidth);

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);

    setTimeout(() => {
      handler();
    }, 100);

    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return width;
};

export default useWindowWidth;
