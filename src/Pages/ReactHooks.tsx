import React from 'react';
import UseMemoHook from "../ReactHooks/UseMemoHook";
import UseCallbackHook from "../ReactHooks/UseCallbackHook";
import UseRefHook from "../ReactHooks/UseRefHook";
import UseReduxHook from "../ReactHooks/UseReduxHook";
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
            {false && <UseReduxHook/>}
            {false && <UseLayoutEffectHook/>}
            <UseEffectHook/>
        </div>
    );
};

export default ReactHooks;