import {useEffect, useState} from 'react';

const useAnyKeyToRender = () => {
    const [, forceRender] = useState<Event>()
    useEffect(() => {
        window.document.addEventListener('keydown', forceRender)
        return () => window.removeEventListener('keydown', forceRender)
    }, [])
};

export default useAnyKeyToRender;