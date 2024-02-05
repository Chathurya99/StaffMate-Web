// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'top',
  minHeight: '100vh',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '18px',
  fontWeight: 'bold',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  background: '#3498db',
  color: '#fff',
  transition: 'background 0.3s ease',
  marginTop: '40px',
};

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');

    if (confirmLogout) {
      // User clicked "Yes" in the confirmation dialog
      // Perform logout actions, e.g., API call, clearing session, etc.

      // After logout actions, navigate to the login page
      navigate('/login');
    } else {
      // User clicked "No" in the confirmation dialog
      // Log out canceled
      // You may choose to stay on the logout page or navigate elsewhere
    }
  };

  return (
    <div style={buttonContainerStyle}>
      <h3 style={{ marginBottom: '40px', textAlign: 'center' }}>Logout</h3>
      <button style={buttonStyle} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
