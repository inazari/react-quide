import {ChangeEvent, useState} from 'react';

const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue)

    return [{value, onChange: ((e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value))}, setValue];
};

export default useInput;