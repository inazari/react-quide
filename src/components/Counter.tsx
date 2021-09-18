import React, {forwardRef, useImperativeHandle, useState} from 'react';


interface ICounterRef {
}

export interface ICounterProps {
    handleAdd: ()=>void,
    handleSubtract: ()=>void,
}

const Counter = forwardRef<ICounterProps, ICounterRef>((props, ref) => {

    const [count, setCount] = useState(1)
    const handleAdd = () => setCount(prev => prev + 1)
    const handleSubtract = () => setCount(prev => prev - 1)

    useImperativeHandle(ref, () => ({handleAdd, handleSubtract}))

    return (
        <span style={{margin: '0 10px'}}>{count}</span>
    );

});

export default Counter;