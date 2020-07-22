import React from 'react';

const LoginPage = () => (
  <div>
    <h1>Login Page</h1>
    <button
      type="submit"
      onClick={() => {
        window.location = 'http://localhost:8080/';
      }}
    >
      Login with Spotify
    </button>
  </div>
);

export default LoginPage;