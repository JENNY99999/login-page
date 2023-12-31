import React, { useState } from 'react';
import './style.css';
import { login } from './utils.js';

//======LOGIN FROM===
//
//GUIDLELINES:
//You have an incomplete login form.
//You are not allowed to add any additional HTML elements.
//You are not allowed to use refs.

//Tasks:
//THe login button should trigger the login() action imported above and pass required data to it.
//Disable the Login button if email is blank OR if password is under 6 letters
//Disable the Login button while login action is being performed
//Show an error message from the login() if login fails. The error should be cleared every time user re-attempts to log in
// Show an alert box (native Javascript alert ) if login succeeds. Investigate the login fuction to find out how to log in

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const disableButton = !email || password.length < 6 || loading;

  const handleLogin = async () => {
    setError(null);
    setLoading(true);

    try {
      await login({ email, password });
      alert('Login successful');
      setLoading(false);
    } catch (error) {
      setError(error.message); // Assuming the error object has a 'message' property
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <h2>Login Form</h2>
      <div className="row">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="errorMessage">{error && <p>{error}</p>}</div>
      <div className="button">
        <button disabled={disableButton} onClick={handleLogin}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </div>
  );
}
