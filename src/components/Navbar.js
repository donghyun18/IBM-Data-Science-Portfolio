import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ isLogin, setIsLogin }) => {
  
  useEffect(() => {
    setIsLogin(localStorage.getItem("isLogin") === "true");
  }, [setIsLogin]);

  return (
    <header>
        <Link to='/' className='title'>Pet Heaven</Link>
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/aboutus'>About Us</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className='accounts'>
          {
            isLogin ? (
                <Link to='/profile'>Profile</Link>
            ) : (
              <>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Login</Link>
              </>
            )
          }
        </div>
    </header>
  )
}

export default Navbar