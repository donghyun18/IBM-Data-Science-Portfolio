import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signed up:', { username, email, password });
    setUsername("");
    setEmail("");
    setPassword("");
    localStorage.setItem("name", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Signup Successfully!");
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Sign Up</h1>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="login-input"
          placeholder="Enter Full Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="login-input"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="login-input"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;








