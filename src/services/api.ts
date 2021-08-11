import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.17.187.225',
  // baseURL: 'http://localhost:3333',
});

export default api;
