import axios from 'axios';

const apiClient = axios.create();

const baseURL = import.meta.env.VITE_API_BASE_URL;

apiClient.defaults.baseURL = baseURL;

export default apiClient;
