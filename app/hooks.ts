import { useCallback, useEffect, useRef, useState } from 'react';

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

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const handleChange = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", handleChange);

    return () => {
      media.addEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

export const useQueue = <T>(initialItems: T[] = []): {
  push: (item: T) => void;
  pop: () => T | undefined;
  top: () => T | undefined;
  back: () => T | undefined;
  items: T[];
} => {
  const [queue, setQueue] = useState<T[]>(initialItems);

  const push = useCallback((item: T) => setQueue(prev => [...prev, item]), []);

  const pop = useCallback(() => {
    const [front, ...remaining] = queue;
    setQueue(remaining);
    return front;
  }, [queue]);

  const top = useCallback(() => queue[0], [queue]);

  const back = useCallback(() => queue.at(-1), [queue]);

  return { push, pop, top, back, items: queue };
}

export const useTimeoutEffect = (callbackfn: () => void, ms?: number, deps: any[] = []) => {
  const currentfn = useRef(callbackfn);

  useEffect(() => {
    currentfn.current = callbackfn;
  }, [callbackfn]);
  
  useEffect(() => {
    const fn = () => {
      currentfn.current();
    };
    if (ms !== undefined) {
      const timeout = setTimeout(fn, ms);
      return () => clearTimeout(timeout);
    }
  }, [ms, ...deps]);
}
