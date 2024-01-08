import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulating an asynchronous operation (e.g., API request)
    setTimeout(() => {
      // Assuming login is successful
      console.log('Login successful');

      // Navigate to the '/app' route
      navigate('/app');
    }, 1000); // Simulating a delay of 1 second
  };

  return (
    <div className='loginForm'>
      <h1>Sign In</h1>
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
    </div>
  );
};