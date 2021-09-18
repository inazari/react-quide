import React, {useState} from 'react';

import useTimeout from '../customHooks/useTimeout'

const TimeoutCounter = () => {
    const [count, setCount] = useState(500)
    const handleDecrement = () => {
        setCount((preCount)=> preCount && preCount - 100)
    }
    useTimeout(handleDecrement, 1000)
    const handleIncrement = () => setCount(count + 500)
    return (
        <div>
            <b>TimeoutCounter</b>
            <div>{count}</div>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default TimeoutCounter;