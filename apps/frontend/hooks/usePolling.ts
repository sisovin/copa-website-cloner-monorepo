import { useEffect, useRef } from 'react';

export function usePolling() {
  const intervalIdRef = useRef<number | null>(null);

  const startPolling = (callback: () => void, interval: number) => {
    if (intervalIdRef.current !== null) {
      clearInterval(intervalIdRef.current);
    }

    intervalIdRef.current = window.setInterval(callback, interval);
    return intervalIdRef.current;
  };

  const stopPolling = (intervalId: number) => {
    clearInterval(intervalId);
    if (intervalIdRef.current === intervalId) {
      intervalIdRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  return { startPolling, stopPolling };
}
