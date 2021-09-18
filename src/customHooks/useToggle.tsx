import {MouseEventHandler, useState} from 'react';


export default function useToggle(initialState = false): [value: boolean, toggleValue: (value: boolean | undefined | MouseEventHandler<HTMLButtonElement>) => void] {
    const [value, setValue] = useState(initialState)

    function toggleValue(value: boolean | undefined | MouseEventHandler<HTMLButtonElement>): void {
        setValue(current => typeof value === 'boolean' ? value : !current)
    }

    return [value, toggleValue]
}