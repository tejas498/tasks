import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const Library = () => {
  return (
    <>
        <Navbar/>
        <h1 style={{textAlign: 'center'}}>Welcome to Library</h1>
        <div style={{display: 'flex' , justifyContent: 'space-around'}}>
            <NavLink style={{textDecoration: 'none'}} to="/library/1">Book</NavLink>
            <NavLink style={{textDecoration: 'none'}} to="/library/2">Book</NavLink>
            <NavLink style={{textDecoration: 'none'}} to="/library/3">Book</NavLink>
            <NavLink style={{textDecoration: 'none'}} to="/library/4">Book</NavLink>
        </div>
        
    </>
  )
}

export default Library