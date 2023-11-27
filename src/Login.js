import React, { useState } from 'react';
import './style.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Corrected the spelling of preventDefault()

    if (email === "email" && password === "password") {
      setIsLogin(true);
      setError('');
    } else {
      setIsLogin(false);
      setError('Invalid username or password, please try again.');
    }
  };

  return (
    <div className="wrapper">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
      {isLogin && <p className="success">Login successfully!</p>}
    </div>
  );
}
