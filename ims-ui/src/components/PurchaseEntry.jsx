import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';

export function PurchaseEntry() {
  const navigate = useNavigate();
  const [vendors, setVendors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [units, setUnits] = useState([]);
  const [types, setTypes] = useState([]);

  const [formData, setFormData] = useState({
    vendorName: '',
    materialCategoryId: '',
    materialTypeId: '',
    brandName: '',
    unitId: '',
    quantity: '',
    purchaseAmount: '',
    purchaseDate: ''
  });

  useEffect(() => {
    api.getVendors().then(res => setVendors(res.data));
    api.getCategories().then(res => setCategories(res.data));
  }, []);

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setFormData({ ...formData, materialCategoryId: categoryId, materialTypeId: '', unitId: '' });
    
    if (categoryId) {
      api.getUnitsAndTypes(categoryId).then(res => {
        setUnits(res.data.unitList || []);
        setTypes(res.data.materialTypeList || []);
      });
    } else {
      setUnits([]);
      setTypes([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      quantity: Number(formData.quantity),
      purchaseAmount: Number(formData.purchaseAmount)
    };

    api.addPurchaseDetail(payload)
      .then(res => {
        if (res.data.status === 'SUCCESS') {
          navigate('/success', { state: { purchase: res.data.purchase } });
        }
      })
      .catch(err => {
        console.error("Validation Error:", err.response?.data);
        alert(err.response?.data?.message || "Failed to submit purchase order.");
      });
  };

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

  const formCardStyle = {
    border: '1px solid #e6e6e6',
    borderTop: '4px solid #a100ff',
    padding: '32px',
    backgroundColor: '#fbfbfb',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const fieldGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
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
    transition: 'border-color 0.2s ease',
    fontFamily: 'inherit'
  };

  const dateInputStyle = {
    ...inputStyle,
    cursor: 'pointer',
    colorScheme: 'light'
  };

  const buttonStyle = {
    marginTop: '12px',
    padding: '14px 28px',
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#ffffff',
    backgroundColor: '#a100ff',
    border: 'none',
    borderRadius: '0px',
    cursor: 'pointer',
    letterSpacing: '0.5px',
    transition: 'background-color 0.2s ease'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Create Purchase Order</h2>
      <div style={accentLineStyle}></div>

      <form onSubmit={handleSubmit} style={formCardStyle}>
        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Vendor</label>
          <select 
            style={inputStyle} 
            value={formData.vendorName} 
            onChange={e => setFormData({...formData, vendorName: e.target.value})} 
            required
          >
            <option value="">Select Vendor</option>
            {vendors.map(v => <option key={v.vendorId || v.vendorName} value={v.vendorName}>{v.vendorName}</option>)}
          </select>
        </div>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Material Category</label>
          <select 
            style={inputStyle} 
            value={formData.materialCategoryId} 
            onChange={handleCategoryChange} 
            required
          >
            <option value="">Select Category</option>
            {categories.map(c => <option key={c.categoryId} value={c.categoryId}>{c.categoryName}</option>)}
          </select>
        </div>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Material Type</label>
          <select 
            style={inputStyle} 
            value={formData.materialTypeId} 
            onChange={e => setFormData({...formData, materialTypeId: e.target.value})} 
            required
          >
            <option value="">Select Type</option>
            {types.map(t => <option key={t.typeId} value={t.typeId}>{t.typeName}</option>)}
          </select>
        </div>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Brand Name</label>
          <input 
            type="text" 
            style={inputStyle} 
            value={formData.brandName} 
            onChange={e => setFormData({...formData, brandName: e.target.value})} 
            placeholder="Enter Brand Name" 
            required 
          />
        </div>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Unit</label>
          <select 
            style={inputStyle} 
            value={formData.unitId} 
            onChange={e => setFormData({...formData, unitId: e.target.value})} 
            required
          >
            <option value="">Select Unit</option>
            {units.map(u => <option key={u.unitId} value={u.unitId}>{u.unitName}</option>)}
          </select>
        </div>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Quantity</label>
          <input 
            type="number" 
            style={inputStyle} 
            value={formData.quantity} 
            onChange={e => setFormData({...formData, quantity: e.target.value})} 
            required 
          />
        </div>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Purchase Amount</label>
          <input 
            type="number" 
            style={inputStyle} 
            value={formData.purchaseAmount} 
            onChange={e => setFormData({...formData, purchaseAmount: e.target.value})} 
            required 
          />
        </div>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Purchase Date</label>
          <input 
            type="date" 
            style={dateInputStyle} 
            value={formData.purchaseDate} 
            onChange={e => setFormData({...formData, purchaseDate: e.target.value})} 
            required 
          />
        </div>

        <button type="submit" style={buttonStyle}>Submit Order</button>
      </form>
    </div>
  );
}