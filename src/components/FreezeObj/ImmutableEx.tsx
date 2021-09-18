import React from 'react'
import {Map} from "immutable";

const ImmutableEx = () => {

    let book = Map({name: 'Harry Potter'});
    console.log(book.get('name'));
    console.log(book.toJS());
    // @ts-ignore
    const publish = (book) => {
        return book.set('isPublished', true);
    }
    const updated = publish(book)


    return <>
        <h3>Immutable</h3>
        <pre>{JSON.stringify(book, undefined, 2)}</pre>
        <pre>{JSON.stringify(updated, undefined, 2)}</pre>
    </>
}

export default ImmutableEx