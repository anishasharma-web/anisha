import React, { useState } from 'react';
import './Login.css'; // Import your CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container"> {/* Apply a CSS class */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group"> {/* Apply a CSS class */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group"> {/* Apply a CSS class */}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="button-container"> {/* Apply a CSS class */}
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

