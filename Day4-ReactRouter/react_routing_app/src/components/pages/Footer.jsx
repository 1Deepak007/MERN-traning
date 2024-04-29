import React from 'react'

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Deepak </p>
    </footer>
  )
}

const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '2px',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
  };
