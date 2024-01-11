import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log('Login successful');
      navigate('/app');
    }, 1000); 

    // const emailVali = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailVali.test(email)) {
    //   alert("Please enter a valid email address!");
    //   return;
    // }

    // if (password.length < 8) {
    //   alert('Password must be at least 8 characters long!');
    //   return;
    // }

  };

  return (
    <div className='loginForm'>
      <h1>Welcome to UseMeh</h1>
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign In</button>
      </form>
      <h6>Created by Darius Akinrimisi</h6>
    </div>
  );
};