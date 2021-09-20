import React from 'react'
import useInput from "../customHooks/useInput";
import Checkbox from "../components/Checkbox";
import Fetch from "../components/Fetch";

const PageForm = ({data, titleProps, resetTitle}) => {

    return <form onSubmit={(e) => {
        e.preventDefault();
        console.log(titleProps?.value);
        resetTitle('');
    }}>
        <label htmlFor="input1">Custom useInput &nbsp;</label>
        <input id='input1' {...titleProps} type="text"/>
        <ul>
            {data && data?.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>

        <Checkbox id="checkbox" label='label text here'/>
    </form>
}

const Page = () => {
    const [titleProps, resetTitle] = useInput()

    return <Fetch url={'https://jsonplaceholder.typicode.com/users'}
                  renderSuccess={({data}) => <PageForm data={data} titleProps={titleProps} resetTitle={resetTitle}/>}/>
}


export default Page;