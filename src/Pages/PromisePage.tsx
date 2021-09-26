import React, { useEffect } from "react";
import useMountedRef from "../customHooks/useMountedRef";

const PromisePage = () => {
  const mounted = useMountedRef();
  const loadSave = () => {
    console.log("loadSave failed");
    throw new Promise((resolve) => setTimeout(resolve, 3000));
  };

  const safe = (fn: () => void) => {
    try {
      fn();
    } catch (error) {
      if (error instanceof Promise && mounted.current) {
        error.then(() => safe(fn));
      } else {
        throw error;
      }
    }
  };

  useEffect(() => {
    console.log("call safe(loadSave) fn");

    safe(loadSave);
  }, []);

  return <div>promise</div>;
};

export default PromisePage;
