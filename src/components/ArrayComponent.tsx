import React from 'react';
import useArray from '../customHooks/useArray'

const ArrayComponent = () => {

    const {set, update, remove, push, filter, clear, array} = useArray([2, 4, 6, 8, 10, 12])
    return (
        <div>
            <b>ArrayComponent</b>
            <div>{array.join(', ')}</div>
            <button onClick={() => push(7)}>add 7</button>
            <button onClick={() => set([7])}>set 7</button>
            <button onClick={() => update(1, 8)}>set second 8</button>
            <button onClick={() => filter(n => n > 3)}>filter bigger than 3</button>
            <button onClick={() => remove(1)}>remove second element</button>
            <button onClick={() => clear()}>clean array</button>
        </div>
    );
};

export default ArrayComponent;