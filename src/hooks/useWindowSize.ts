import { useLayoutEffect, useState } from 'react';

export function useWindowSize() {
  const [size, setSize] = useState({
    windowWidth: 0,
    windowHeight: 0,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}
