import {useState} from 'react';

const UseArray = (defaultValue: number[]) => {
    const [array, setArray] = useState(defaultValue)

    const clear = () => {
        setArray([])
    }
    const filter = (callback: (value: number) => boolean) => {
        setArray(a => a.filter(callback))
    }
    const push = (element : number) => {
        setArray([...array, element])
    }

    const remove = (index: number) => {
        setArray(prevState => [...prevState.slice(0, index), ...prevState.slice(index + 1)])
    }

    const update = (index: number, newElement: number) => {
        setArray(prevState => [...prevState.slice(0, index), newElement, ...prevState.slice(index + 1)])
    }

    return {set: setArray, update, remove, push, filter, clear, array};
};

export default UseArray;