import React from 'react';

export function Footer() {
  const footerStyle = {
    backgroundColor: '#000000',
    color: '#ffffff',
    borderTop: '3px solid #a100ff', 
    padding: '24px 20px',
    marginTop: 'auto',
    fontFamily: "'Graphik', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  };

  const mainTextStyle = {
    fontSize: '0.95rem',
    fontWeight: '500',
    letterSpacing: '0.5px',
    margin: 0,
    color: '#e6e6e6',
  };

  const brandAccentStyle = {
    color: '#a100ff', 
    fontWeight: '700',
  };

  const subTextStyle = {
    fontSize: '0.75rem',
    color: '#8c8c8c',
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  return (
    <footer style={footerStyle}>
      <p style={mainTextStyle}>
        Made by <span style={brandAccentStyle}>Pryanshu</span> for <span style={brandAccentStyle}>Accenture Capstone</span>
      </p>
      <p style={subTextStyle}>
        Inventory Management System &copy; {new Date().getFullYear()}
      </p>
      <p style={mainTextStyle}>Contact: pryanshug88@gmail.com</p>
    </footer>
  );
}