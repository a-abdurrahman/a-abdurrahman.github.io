import CONFIG from './config';

const API_ENDPOINTS = {
  PRODUCTS : `${CONFIG.BASE_URL}/products`,
  AUTHENTICATIONS : (id) => `${CONFIG.BASE_URL}/authentications`,
  OWNERS : `${CONFIG.BASE_URL}/owners`,
  USERS : `${CONFIG.BASE_URL}/users`,
};

export default API_ENDPOINTS;
