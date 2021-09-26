import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import useAnyKeyToRender from "../customHooks/useAnyKeyToRender";

const UseEffectHook = () => {
  const array = useMemo(() => [1, 2, 3], []);
  const spanRef = useRef<HTMLElement | null>(null);
  useAnyKeyToRender();
  useEffect(() => {
    console.log(
      "useEffect was called, but array was not changed",
      spanRef.current?.innerText
    );
  }, [array]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect", spanRef.current?.innerText);
  });
  useEffect(() => {
    console.log("useEffect");
  }, []);
  const fn = useCallback(() => {
    console.log("word");
  }, []);

  useEffect(() => {
    fn();
  }, [fn]);

  return (
    <>
      <input type="text" />
      <div>
        {console.log("render")}[{array.join(",")}]
      </div>
      <span ref={spanRef}>span text here</span>
      <h3>press any key to render component</h3>
    </>
  );
};

export default UseEffectHook;
