import {ChangeEvent, useState} from 'react';

const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue)

    const handleChange = ((e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value))

    return [{value, onChange: handleChange}, setValue];
};

export default useInput;