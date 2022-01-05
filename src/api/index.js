import axios from 'axios';
import { setInterceptors } from './config.js';

// instance & interceptor
function create(url, options) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  return instance;
}

function createWithAuth(url, options) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  setInterceptors(instance);
  return instance;
}

export const auth = create(`${process.env.VUE_APP_API_URL}api/auth/`);
export const user = createWithAuth(`${process.env.VUE_APP_API_URL}api/user`);
export const post = create(`${process.env.VUE_APP_API_URL}api/study/`);
export const join = createWithAuth(`${process.env.VUE_APP_API_URL}api/join/`);
export const reply = createWithAuth(`${process.env.VUE_APP_API_URL}api/reply/`);
