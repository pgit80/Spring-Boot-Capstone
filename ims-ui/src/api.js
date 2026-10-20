import axios from 'axios';

// this url to test application in VM
//const BASE_URL = 'http://localhost:8081/inventory';

// to check the application in the local system use this base url
const BASE_URL = 'http://localhost:8083';


export const api = {
  // 1. Home 
  getWelcome: () => axios.get(`${BASE_URL}/welcome`),

  // 2. Initial Form 
  getVendors: () => axios.get(`${BASE_URL}/vendors`),
  getCategories: () => axios.get(`${BASE_URL}/categories`),

  // 3. Dynamic Dropdowns based on Category
  getUnitsAndTypes: (materialCategoryId) =>
    axios.post(`${BASE_URL}/getUnitAndTypeList`, { materialCategoryId }),

  // 4. Submit Purchase
  addPurchaseDetail: (purchaseData) =>
    axios.post(`${BASE_URL}/addPurchaseDetail`, purchaseData),

  // 5. Vendor Wise Purchase Report
  getPurchaseReport: (reportParams) =>
    axios.post(`${BASE_URL}/report/controller/getPurchaseDetails`, reportParams),
};