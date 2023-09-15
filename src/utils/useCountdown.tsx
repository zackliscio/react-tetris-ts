import { useEffect, useRef, useState } from 'react';

export function useCountdown(value: number) {
  const [isFinished, setIsFinished] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [countdown, setCountdown] = useState(value);

  const interval = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (interval.current) clearInterval(interval.current);

    if (isRunning) {
      setIsFinished(false);
      interval.current = setInterval(() => {
        setCountdown((old) => {
          const r = old - 1;
          if (r < 0) {
            setIsFinished(true);
            setIsRunning(false);
            clearInterval(interval.current);
          }
          return r;
        });
      }, 1000);
    }

    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, [isRunning]);

  return {
    restart: () => {
      setCountdown(value);
      setIsRunning(true);
    },
    number: isRunning ? countdown : 0,
    isFinished,
  };
}
