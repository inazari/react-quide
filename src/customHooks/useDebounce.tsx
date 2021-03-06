import { useEffect } from "react";
import useTimeout from "./useTimeout";

const useDebounce = (
  callback: () => void,
  delay: number,
  dependencies: number
) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [dependencies, reset]);
  useEffect(clear, [clear]);
};

export default useDebounce;
