import axios from 'axios';

const api = axios.create({
  baseURL: process.env.CEP_BASE_URL,
});

export default api;
