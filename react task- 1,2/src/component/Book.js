import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const Book = () => {

    const { id } = useParams()
    return (
        <>
            <Navbar/>
            
            <h1 style={{ textAlign: 'center'}}>Book {id}</h1>
        </>
    )
}

export default Book