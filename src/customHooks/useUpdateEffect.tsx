import { useEffect, useRef } from "react";

const useUpdateEffect = (callback: () => void, dependencies: number) => {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      callback();
    }
  }, [callback, dependencies]);
};

export default useUpdateEffect;
