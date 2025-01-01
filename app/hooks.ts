import { useEffect, useRef, useState } from 'react';

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
