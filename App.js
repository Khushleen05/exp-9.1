import React from 'react';

function App() {
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '100px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#61dafb' }}>🚀 My Dockerized React App</h1>
      <p style={{ fontSize: '18px' }}>
        This React application is running inside a Docker container using Nginx.
      </p>
      <p>Successfully built and deployed with a multi-stage Docker build! 🎯</p>
    </div>
  );
}

export default App;
