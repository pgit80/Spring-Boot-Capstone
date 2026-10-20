import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './components/Home';
import { PurchaseEntry } from './components/PurchaseEntry';
import { PurchaseSuccess } from './components/PurchaseSuccess';
import { PurchaseReport } from './components/PurchaseReport';
import { Footer } from './components/Footer';

function NavigationBar() {
  const location = useLocation();

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 32px',
    height: '64px',
    backgroundColor: '#000000',
    borderBottom: '3px solid #a100ff',
    fontFamily: "'Graphik', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  };

  const brandStyle = {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: '0.5px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const brandAccentStyle = {
    color: '#a100ff',
    fontSize: '1.3rem',
    fontWeight: '900'
  };

  const linkGroupStyle = {
    display: 'flex',
    gap: '28px'
  };

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      color: isActive ? '#a100ff' : '#ffffff',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.9rem',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      borderBottom: isActive ? '2px solid #a100ff' : '2px solid transparent',
      paddingBottom: '4px',
      transition: 'all 0.2s ease'
    };
  };

  return (
    <nav style={navStyle}>
      <div style={brandStyle}>
        <span>IMS</span>
        <span style={brandAccentStyle}>&gt;</span>
      </div>
      <div style={linkGroupStyle}>
        <Link to="/" style={getLinkStyle('/')}>Home</Link>
        <Link to="/purchase" style={getLinkStyle('/purchase')}>Purchase Entry</Link>
        <Link to="/report" style={getLinkStyle('/report')}>Purchase Reports</Link>
      </div>
    </nav>
  );
}

export default function App() {
  const appContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    fontFamily: "'Graphik', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  };

  const mainContentStyle = {
    flex: 1,
    backgroundColor: '#ffffff'
  };

  return (
    <BrowserRouter>
      <div style={appContainerStyle}>
        <NavigationBar />

        <main style={mainContentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/purchase" element={<PurchaseEntry />} />
            <Route path="/success" element={<PurchaseSuccess />} />
            <Route path="/report" element={<PurchaseReport />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}