import {useDebugValue, useEffect, useState} from 'react';

const UseFetchApi = (url = '', options = undefined) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(url, options).then(res => res.json()).then(json => {
            setData(json)
            setError(null)
        }).catch((error) => {
            setError(error);
            setData(null)
        }).finally(() => {
            setLoading(false)
        })
    }, [url, options])

    useDebugValue('API Fetcher.')
    return {data, error, loading};
};

export default UseFetchApi;