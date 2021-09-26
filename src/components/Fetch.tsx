import React, { ReactElement } from "react";
import useFetchAPI from "../customHooks/useFetchApi";
import useMountedRef from "../customHooks/useMountedRef";

interface IFetchProps {
  url: string;
  renderSuccess: (value: { data: string }) => void;
  loadingFallback?: ReactElement;
  renderError?: (value: {}) => ReactElement;
}

const Fetch = (props: IFetchProps) => {
  const {
    url,
    renderSuccess,
    loadingFallback = <p>loading...</p>,
    renderError = (error) => <div>{JSON.stringify(error)}</div>,
  } = props;

  const { data, loading, error } = useFetchAPI(url);

  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) {
    return renderSuccess({ data });
  } else return <>I dont know</>;
};

export default Fetch;
