import React from "react";
import {pipe} from 'lodash/fp'

const FunctionEx: React.FC = () => {

    const input = ' sOme strIng ';
    const trim = (str: string) => str.trim();
    const toLowercase = (str: string) => str.toLowerCase()
    const wrapToDiv = (str: string) => <div>${str}</div>;


    // const result = wrapDiv(trim(toLowercase(input)));
    const transform = pipe(trim, toLowercase, wrapToDiv)
    return transform(input);
}


export default FunctionEx