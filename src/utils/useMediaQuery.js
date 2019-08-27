import { useMemo, useEffect, useState } from "react"

export function useMediaQuery(query) {
  const getMatches = (mediaQueryList) => mediaQueryList.matches;

  const mediaQueryList = useMemo(
    () => window.matchMedia(query),
    [query],
  );

  const [matches, setMatches] = useState(getMatches(mediaQueryList));

  useEffect(
    () => {
      const listener = (event) => {
        setMatches(getMatches(event));
      };

      mediaQueryList.addEventListener('change', listener);

      return () => {
        mediaQueryList.removeEventListener('change', listener);
      };
    },
    [mediaQueryList],
  );

  return matches;
};