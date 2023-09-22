import { useEffect, useState } from 'react';

export function useWidthIfAspectRatioNotWorking(ref: React.RefObject<HTMLDivElement>) {
  const [isIssue, setIsIssue] = useState<undefined | boolean>(undefined);
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const w = ref.current ? ref.current.offsetWidth : null;
    if (typeof w === 'number') setIsIssue(w <= 5);
  }, []);

  useEffect(() => {
    function handler() {
      if (!ref.current) return;
      console.log('SETTING WIDTH!', ref.current.offsetHeight);
      setWidth(ref.current.offsetHeight / 2);
    }

    window.removeEventListener('resize', handler);
    if (isIssue) {
      handler();
      window.addEventListener('resize', handler);
    }

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [isIssue]);

  return width;
}
