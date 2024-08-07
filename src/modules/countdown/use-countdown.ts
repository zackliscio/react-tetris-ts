import { useEffect, useRef, useState } from "react";

type UseCountdownProps = {
  callback: (() => void) | undefined;
  seconds: number;
};

export function useCountdown({ callback, seconds }: UseCountdownProps) {
  const [secondsLeft, setSecondsLeft] = useState(seconds);

  const interval = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (interval.current) clearInterval(interval.current);
    interval.current = setInterval(() => setSecondsLeft((old) => old - 1), 1000);

    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, [seconds]);

  const isCallback = secondsLeft === 0;
  useEffect(() => {
    if (isCallback) callback?.();
  }, [callback, isCallback]);

  return secondsLeft;
}
