import { useDebugValue, useEffect, useState } from "react";
import useMountedRef from "./useMountedRef";

const useFetchApi = (url = "", options = undefined) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const mounted = useMountedRef();

  useEffect(() => {
    if (!url) return;
    if (!mounted.current) return;
    setLoading(true);
    fetch(url, options)
      .then((res) => {
        if (!mounted.current) {
          throw new Error("component is not mounted");
        }
        return res;
      })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, options]);

  useDebugValue("API Fetcher.");
  return { data, error, loading };
};

export default useFetchApi;
