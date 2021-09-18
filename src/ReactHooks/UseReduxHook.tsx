import React, {useReducer} from 'react';

const UseReduxHook = () => {

    const countReducer = (state: number, action: { type: string }) => {
        switch (action.type) {
            case 'add': {
                return state + 1;
            }
            case 'subtract': {
                return state - 1;
            }
            default: {
                return state
            }
        }
    }

    const [state, dispatch] = useReducer(countReducer, 10)

    return (
        <div>
            <button onClick={()=>dispatch({type: 'subtract'})}>-</button>
            <span>{state}</span>
            <button onClick={()=>dispatch({type: 'add'})}>+</button>
        </div>
    );
};

export default UseReduxHook;