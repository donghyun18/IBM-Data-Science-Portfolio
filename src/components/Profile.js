import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Profile = ({ setIsLogin }) => {
    const username = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    const navigate = useNavigate()

    const logout = () => {
        localStorage.setItem("isLogin", false);
        setIsLogin(false);
        navigate('/');
    }
  return (
    <div className='profile'>
        <h1>Name: {username}</h1>
        <h3>Email: {email}</h3>
        <button onClick={logout}>Log Out</button>
    </div>
  )
}
