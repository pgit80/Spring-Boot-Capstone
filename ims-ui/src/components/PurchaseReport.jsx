import React, { useState, useEffect } from 'react';
import { api } from '../api';

export function PurchaseReport() {
  const [vendors, setVendors] = useState([]);
  const [vendorName, setVendorName] = useState('');
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [reports, setReports] = useState([]);

  useEffect(() => {
    api.getVendors().then(res => setVendors(res.data));
  }, []);

  const handleVendorChange = (e) => {
    const selectedName = e.target.value;
    setVendorName(selectedName);
    const vendorObj = vendors.find(v => v.vendorName === selectedName);
    setSelectedVendor(vendorObj || null);
  };

  const handleGenerateReport = (e) => {
    e.preventDefault();
    api.getPurchaseReport({ vendorName, fromDate, toDate }).then(res => {
      setReports(res.data);
    });
  };

  const containerStyle = {
    padding: '40px 24px',
    maxWidth: '900px',
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

  const formCardStyle = {
    border: '1px solid #e6e6e6',
    borderTop: '4px solid #a100ff',
    padding: '24px',
    backgroundColor: '#fbfbfb',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
    marginBottom: '32px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    alignItems: 'flex-end'
  };

  const fieldGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    flex: '1 1 200px'
  };

  const labelStyle = {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#333333',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const inputStyle = {
    padding: '12px 14px',
    fontSize: '0.95rem',
    border: '1px solid #cccccc',
    borderRadius: '0px',
    backgroundColor: '#ffffff',
    color: '#000000',
    outline: 'none',
    fontFamily: 'inherit'
  };

  const dateInputStyle = {
    ...inputStyle,
    cursor: 'pointer',
    colorScheme: 'light'
  };

  const buttonStyle = {
    padding: '13px 28px',
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#ffffff',
    backgroundColor: '#a100ff',
    border: 'none',
    borderRadius: '0px',
    cursor: 'pointer',
    letterSpacing: '0.5px',
    transition: 'background-color 0.2s ease',
    alignSelf: 'flex-end'
  };

  const detailsCardStyle = {
    border: '1px solid #e6e6e6',
    borderLeft: '4px solid #000000',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    marginBottom: '32px'
  };

  const detailsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '12px',
    marginTop: '12px'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #e6e6e6',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)'
  };

  const thStyle = {
    backgroundColor: '#000000',
    color: '#ffffff',
    textAlign: 'left',
    padding: '14px 16px',
    fontSize: '0.85rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    borderBottom: '3px solid #a100ff'
  };

  const tdStyle = {
    padding: '14px 16px',
    fontSize: '0.95rem',
    color: '#333333',
    borderBottom: '1px solid #e6e6e6'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Vendor Purchase Report</h2>
      <div style={accentLineStyle}></div>

      <form onSubmit={handleGenerateReport} style={formCardStyle}>
        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Vendor</label>
          <select 
            style={inputStyle} 
            value={vendorName} 
            onChange={handleVendorChange} 
            required
          >
            <option value="">Select Vendor</option>
            {vendors.map(v => (
              <option key={v.vendorId || v.vendor_id || v.vendorName} value={v.vendorName || v.vendor_name}>
                {v.vendorName || v.vendor_name}
              </option>
            ))}
          </select>
        </div>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>From Date</label>
          <input 
            type="date" 
            style={dateInputStyle} 
            value={fromDate} 
            onChange={e => setFromDate(e.target.value)} 
            required 
          />
        </div>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>To Date</label>
          <input 
            type="date" 
            style={dateInputStyle} 
            value={toDate} 
            onChange={e => setToDate(e.target.value)} 
            required 
          />
        </div>

        <button type="submit" style={buttonStyle}>Generate Report</button>
      </form>

      {selectedVendor && (
        <div style={detailsCardStyle}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#000000' }}>
            {selectedVendor.vendorName || selectedVendor.vendor_name} ({selectedVendor.vendorId || selectedVendor.vendor_id})
          </h4>
          <div style={detailsGridStyle}>
            <div>
              <span style={{ fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', color: '#666' }}>Contact Person</span>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.95rem' }}>{selectedVendor.contactPerson || selectedVendor.contact_person}</p>
            </div>
            <div>
              <span style={{ fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', color: '#666' }}>Contact Number</span>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.95rem' }}>{selectedVendor.contactNumber || selectedVendor.contact_number}</p>
            </div>
            <div>
              <span style={{ fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', color: '#666' }}>Address</span>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.95rem' }}>{selectedVendor.vendorAddress || selectedVendor.vendor_address}</p>
            </div>
          </div>
        </div>
      )}

      {reports.length > 0 && (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Purchase ID</th>
              <th style={thStyle}>Vendor</th>
              <th style={thStyle}>Quantity</th>
              <th style={thStyle}>Amount</th>
              <th style={thStyle}>Date</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r, i) => (
              <tr key={r.purchaseId || i}>
                <td style={tdStyle}>{r.purchaseId}</td>
                <td style={tdStyle}>{r.vendorName}</td>
                <td style={tdStyle}>{r.quantity}</td>
                <td style={tdStyle}>{r.purchaseAmount}</td>
                <td style={tdStyle}>{r.purchaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}