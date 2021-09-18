const defaultExport = {}
export default defaultExport
/*
interface IA {
    a: number;
}

interface IB {
    b: number;
}

interface IC {
    c: number;
}

interface IT {
    test: number;
}


type AliasMultipleObj = IA & IB & IC & IT;
type AliasGeneric<T> = T[]

function sum(value: Omit<AliasMultipleObj, "test">): number {
    return value.a + value.b + value.c
}


const combineObj = <IA extends object, IB extends object, IC>(objA: IA, objB: IB, objC: IC): IA & IB & IC => {

    return {...objA, ...objB, ...objC}
}

const combineObjRes = combineObj({a: 100}, {b: 200}, {c: 1});

const res = sum(combineObjRes)
console.log(res);*/
