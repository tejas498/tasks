import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <header style={{ display: 'flex' , justifyContent: 'space-around'}}>
            <NavLink to="/"style={{textDecoration: 'none'}} > LOGO</NavLink>
            <NavLink to="/" style={{textDecoration: 'none'}}>Home</NavLink>
            <NavLink to="/about" style={{textDecoration: 'none'}}>About</NavLink>
            <NavLink to="/button" style={{textDecoration: 'none'}}>Props</NavLink>
            <NavLink to="/library" style={{textDecoration: 'none'}}>Library</NavLink>
        </header>

    </>
  )
}

export default Navbar