import axios from 'axios';
import { setInterceptors } from './config.js';

function create(url, options) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  return instance;
}

function createWithAuth(url, options) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  setInterceptors(instance);
  return instance;
}

export const auth = create(`/api/auth`);
export const user = createWithAuth(`/api/user`);
export const post = create(`/api/post/`);
export const room = create(`/api/study/`);
export const join = create(`/api/join/`);
export const mate = create(`/api/mate/`);
export const reply = create(`/api/reply/`);
