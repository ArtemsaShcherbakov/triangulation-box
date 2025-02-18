import axios, { AxiosInstance } from 'axios';

const $api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const post = $api.post;

export { post };
