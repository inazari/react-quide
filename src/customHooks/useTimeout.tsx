import { useCallback, useEffect, useRef } from "react";

const useTimeout = (callback: () => void, delay: number) => {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<any>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { clear, reset };
};

export default useTimeout;
