import React from 'react';
import ArrayComponent from "../components/ArrayComponent";
import UpdateEffect from "../components/UpdateEffect";
import DebounceComponent from "../components/DebounceComponent";
import TimeoutCounter from "../components/TimeoutCounter";
import ToggleComponent from "../components/ToggleComponent";

const CustomHooks = () => {
    return (
        <div>
            <div>Its custom hooks</div>
            {true && <>
                <ArrayComponent/>
                <UpdateEffect/>
                <DebounceComponent/>
                <TimeoutCounter/>
                <ToggleComponent/>
            </>}
        </div>
    );
};

export default CustomHooks;