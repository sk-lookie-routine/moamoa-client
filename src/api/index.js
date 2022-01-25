import axios from 'axios';

function create(url, options) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  return instance;
}

export const auth = create(`${process.env.VUE_APP_API_URL}api/auth`);
export const user = create(`${process.env.VUE_APP_API_URL}api/user`);
export const post = create(`${process.env.VUE_APP_API_URL}api/post/`);
export const room = create(`${process.env.VUE_APP_API_URL}api/study/`);
export const join = create(`${process.env.VUE_APP_API_URL}api/join/`);
export const reply = create(`${process.env.VUE_APP_API_URL}api/reply/`);
export const mate = create(`${process.env.VUE_APP_API_URL}/api/mate/`);
