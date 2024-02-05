/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function AdminLogin({ invalid }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle your login logic here, e.g., send a request to the server
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <h2 className="text-center"><strong>Admin Login</strong></h2>
      <div className="illustration"><i className="fas fa-user-cog" style={{ color: 'rgb(38,33,33)' }}></i></div>
      <p style={{ color: 'red', textAlign: 'center' }}>{invalid}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block bg-dark" type="submit">Log In</button>
        </div>
      </form>
    </>
  );
}

export default AdminLogin;
