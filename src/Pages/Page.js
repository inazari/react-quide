import React from 'react'
import useInput from "../customHooks/useInput";
import useFetchAPI from "../customHooks/useFetchAPI"
import Checkbox from "../components/Checkbox";

const Page = () => {
    const [titleProps, resetTitle] = useInput()
    const {data, loading, error} = useFetchAPI('https://jsonplaceholder.typicode.com/users')
    if (loading) {
        return <h2>Data is loading....</h2>
    }
    if (error) {
        return <h2>Ops. Some error</h2>
    }
    return <form onSubmit={(e) => {
        e.preventDefault();
        console.log(titleProps.value);
        resetTitle('');
    }}>
        <label htmlFor="input1">Custom useInput &nbsp;</label>
        <input id='input1' {...titleProps} type="text"/>
        <ul>
            {data && data?.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>

        <Checkbox id="checkbox" label='label text here' />
    </form>
}


export default Page;