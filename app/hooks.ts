import { useEffect, useRef } from 'react';

export const useIntervalEffect = (callbackfn: () => void, ms?: number) => {
  const currentfn = useRef(callbackfn);

  useEffect(() => {
    currentfn.current = callbackfn;
  }, [callbackfn]);
  
  useEffect(() => {
    const fn = () => {
      currentfn.current();
    };
    if (ms !== undefined) {
      const interval = setInterval(fn, ms);
      return () => clearInterval(interval);
    }
  }, [ms]);
}
