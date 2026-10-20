import React, { useEffect, useState } from 'react';
import { api } from '../api';

export function Home() {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    api.getWelcome()
      .then(res => setMsg(res.data.message))
      .catch(() => setMsg('Welcome to Inventory Management System'));
  }, []);

  const containerStyle = {
    padding: '40px 24px',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: "'Graphik', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    color: '#000000',
    backgroundColor: '#ffffff'
  };

  const headerStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#000000',
    marginBottom: '8px',
    letterSpacing: '-0.5px'
  };

  const accentLineStyle = {
    width: '40px',
    height: '4px',
    backgroundColor: '#a100ff',
    marginBottom: '24px'
  };

  const messageStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333333',
    marginBottom: '32px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px'
  };

  const cardStyle = {
    border: '1px solid #e6e6e6',
    borderTop: '4px solid #a100ff',
    borderRadius: '0px',
    padding: '24px',
    backgroundColor: '#fbfbfb',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  };

  const cardTitleStyle = {
    marginTop: 0,
    marginBottom: '16px',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#000000'
  };

  const itemStyle = {
    fontSize: '0.95rem',
    color: '#4a4a4a',
    margin: '8px 0',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #f0f0f0',
    paddingBottom: '6px'
  };

  const valueStyle = {
    fontWeight: '700',
    color: '#a100ff'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>System Architecture</h2>
      <div style={accentLineStyle}></div>
      <p style={messageStyle}>{msg}</p>

      <div style={gridStyle}>
        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>Backend Microservices</h3>
          <div style={itemStyle}>
            <span>Vendor Service Port</span>
            <span style={valueStyle}>8087</span>
          </div>
          <div style={itemStyle}>
            <span>Material Service Port</span>
            <span style={valueStyle}>8888</span>
          </div>
          <div style={itemStyle}>
            <span>IMS Service Port</span>
            <span style={valueStyle}>8083</span>
          </div>
        </div>

        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>Deployment Host</h3>
          <div style={itemStyle}>
            <span>Tomcat Server</span>
            <span style={valueStyle}>8081</span>
          </div>
        </div>

        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>Frontend Application</h3>
          <div style={itemStyle}>
            <span>Vite Dev Server</span>
            <span style={valueStyle}>3001</span>
          </div>
        </div>
      </div>
    </div>
  );
}