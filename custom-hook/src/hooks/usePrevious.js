import { useEffect, useRef } from "react";

export const usePrevious = (title) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = title;
  }, [title]);

  return ref.current;
};
