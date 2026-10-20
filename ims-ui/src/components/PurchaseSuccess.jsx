import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export function PurchaseSuccess() {
  const location = useLocation();
  const purchase = location.state?.purchase;

  const containerStyle = {
    padding: '40px 24px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: "'Graphik', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    backgroundColor: '#ffffff',
    color: '#000000'
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
    marginBottom: '32px'
  };

  const cardStyle = {
    border: '1px solid #e6e6e6',
    borderTop: '4px solid #a100ff',
    padding: '32px',
    backgroundColor: '#fbfbfb',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
    marginBottom: '24px'
  };

  const itemStyle = {
    fontSize: '0.95rem',
    color: '#4a4a4a',
    margin: '12px 0',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #f0f0f0',
    paddingBottom: '8px'
  };

  const labelStyle = {
    fontWeight: '700',
    color: '#333333',
    textTransform: 'uppercase',
    fontSize: '0.85rem',
    letterSpacing: '0.5px'
  };

  const valueStyle = {
    fontWeight: '600',
    color: '#000000'
  };

  const statusValueStyle = {
    fontWeight: '700',
    color: '#008a00'
  };

  const linkStyle = {
    display: 'inline-block',
    padding: '12px 24px',
    fontSize: '0.9rem',
    fontWeight: '700',
    color: '#ffffff',
    backgroundColor: '#a100ff',
    textDecoration: 'none',
    letterSpacing: '0.5px',
    transition: 'background-color 0.2s ease'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Order Confirmation</h2>
      <div style={accentLineStyle}></div>

      <div style={cardStyle}>
        {purchase ? (
          <div>
            <div style={itemStyle}>
              <span style={labelStyle}>Status</span>
              <span style={statusValueStyle}>SUCCESS</span>
            </div>
            <div style={itemStyle}>
              <span style={labelStyle}>Vendor Name</span>
              <span style={valueStyle}>{purchase.vendorName}</span>
            </div>
            <div style={itemStyle}>
              <span style={labelStyle}>Quantity</span>
              <span style={valueStyle}>{purchase.quantity}</span>
            </div>
            <div style={itemStyle}>
              <span style={labelStyle}>Total Amount</span>
              <span style={valueStyle}>{purchase.purchaseAmount}</span>
            </div>
          </div>
        ) : (
          <p style={{ color: '#666666', margin: 0 }}>No purchase details found.</p>
        )}
      </div>

      <Link to="/purchase" style={linkStyle}>
        Create Another Purchase
      </Link>
    </div>
  );
}