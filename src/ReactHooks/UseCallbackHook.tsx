import React, {useCallback, useState} from 'react';
import Counter from "../components/Counter";

// useMeme is for value
// useCallback is for function

interface ChildComponentProps {
    setToggle: (prevValue: (prev: boolean) => boolean) => void;
    randomValue: () => string
}

const ChildComponent = React.memo((props: ChildComponentProps) => {
    const {setToggle, randomValue} = props
    console.log('child only run on count');
    return <>
        {randomValue()}
        <button onClick={() => setToggle(prev => !prev)}>toggle</button>
    </>
})

const UseCallbackHook = () => {
    const [count, setCount] = useState(1)
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const getRandomValue = useCallback(() => {
        console.log('oppes.');
        for (let i = 0; i < 1000000000; i++) {
        }
        return 'slow function count value is ' + count;
    }, [count])
    return (
        <div>
            {<div>
                <button onClick={() => setCount(prevState => prevState - 1)}>-</button>
                <span style={{margin: '0 10px'}}>{count}</span>
                <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
            </div>}
            <Counter/>
            <p> {toggle.toString()}</p>
            <button onClick={handleToggle}>toggle button</button>
            <ChildComponent setToggle={setToggle} randomValue={getRandomValue}/>
        </div>
    );
};

export default UseCallbackHook;