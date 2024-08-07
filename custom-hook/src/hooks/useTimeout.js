import { useCallback, useEffect, useRef } from "react";

export const useTimeout = (callback, delay) => {
  const savedFunc = useRef();
  const timeout = useRef();

  useEffect(() => {
    savedFunc.current = callback;
  }, [callback]);

  const call = useCallback(() => {
    timeout.current = setInterval(() => {
      if (savedFunc.current) {
        savedFunc.current();
      }
    }, [delay]);
  }, [delay]);

  const clear = useCallback(() => {
    if (timeout.current) {
      clearInterval(timeout.current);
    }
  }, []);

  useEffect(() => {
    call();
    return clear;
  }, [call, clear, delay]);

  return { reset : call, clear };
};
