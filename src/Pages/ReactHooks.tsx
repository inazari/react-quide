import React from 'react';
import UseMemoHook from "../ReactHooks/UseMemoHook";
import UseCallbackHook from "../ReactHooks/UseCallbackHook";
import UseRefHook from "../ReactHooks/UseRefHook";
import UseReducerHook from "../ReactHooks/UseReducerHook";
import UseImperativeHandleHook from "../ReactHooks/UseImperativeHandleHook";
import UseLayoutEffectHook from "../ReactHooks/UseLayoutEffectHook";
import UseEffectHook from "../ReactHooks/UseEffectHook";

const ReactHooks = () => {
    return (
        <div>
            {false && <UseMemoHook/>}
            {false && <UseCallbackHook/>}
            {false && <UseRefHook/>}
            {false && <UseImperativeHandleHook/>}
            {false && <UseReducerHook/>}
            {false && <UseLayoutEffectHook/>}
            <UseEffectHook/>
        </div>
    );
};

export default ReactHooks;