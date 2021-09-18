import React from 'react'
import {produce} from 'immer'

export interface IBook {
    name: string;
    isPublished?: boolean;
}

const ImmerEx = () => {

    let book: IBook = {name: "Harry Potter"}

    const publish = (book: IBook) => {
        // book.isPublished = true
        return produce(book, draftBook => {
            draftBook.isPublished = true
        })
    }
    let updated = publish(book)
    return <>
        <h3>ImmerEx</h3>
        <pre>{JSON.stringify(book, undefined, 2)}</pre>
        <pre>{JSON.stringify(updated, undefined, 2)}</pre>
    </>
}


export default ImmerEx