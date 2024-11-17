import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({setIsLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userEmail = localStorage.getItem("email");
    const userPassword = localStorage.getItem("password");

    if (email === userEmail && password === userPassword) {
      setEmail('');
      setPassword('');
      localStorage.setItem("isLogin", true);
      setIsLogin(true);
      navigate('/');
    } else {
      alert('Wrong Email Or Password'); 
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>


          <label htmlFor="email">Eamil:</label>
          <input
            type="email"
            id="email"
            className="login-input"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />


          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="login-input"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        <button type="submit" className="login-btn">Login</button>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;














