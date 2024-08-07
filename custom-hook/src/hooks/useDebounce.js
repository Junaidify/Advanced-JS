import { useEffect, useState } from "react";

export const useDebounce = ({ value, delay }) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const val = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => {
      clearTimeout(val);
    };
  }, [value, delay]);

  return debounce;
};
