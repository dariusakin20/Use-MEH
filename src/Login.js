import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormLogin.css'

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

    //Email and Password validation 
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
      <h1 className='headerText'>UseMeh</h1>
      <h2 className='subHeaderText'>Sign In</h2>
      <form className='inputForm' onSubmit={handleLogin}>
        <input
          type="text"
          placeholder='Email'
          className='inputFormInputs'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          className='inputFormInputs'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className='buttons'>Sign In</button>
      </form>
      <h6>Created by Darius Akinrimisi</h6>
    </div>
  );
};