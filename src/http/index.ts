import axios, { AxiosInstance } from 'axios';

const $api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // add in env
});

const post = $api.post;

export { post };
