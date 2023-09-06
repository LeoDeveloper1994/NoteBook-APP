import axios, { AxiosRequestConfig } from 'axios';
import { decrypt } from './cryptoJs';

const apiClient = axios.create();

const baseURL = import.meta.env.VITE_API_BASE_URL;

apiClient.defaults.baseURL = baseURL;

export const axiosInterceptor = () => {
  const updateHeader = async (request: AxiosRequestConfig) => {
    const token = await decrypt('토큰');

    if (token) {
      const fullToken = `Bearer ${token}`;

      const newHeaders = {
        Authorization: fullToken,
        'Content-Type': 'application/json',
      };

      request.headers = newHeaders;

      return request;
    }

    return request;
  };

  apiClient.interceptors.request.use((request): any => {
    const req = updateHeader(request);
    return req;
  });
};

export default apiClient;
