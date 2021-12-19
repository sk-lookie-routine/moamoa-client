import axios from 'axios';
import store from '@/store/modules/auth';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function createPost(postData) {
  return instance.post('/api/study', postData);
}

function updatePost(postData) {
  return instance.get('/api/study', postData);
}

function fetchPosts() {
  return instance.get('/api/study');
}

function fetchPostById() {
  return instance.get('/api/study');
}

function getUser() {
  return instance.get('/api/user', {
    params: { token: store.state.token },
  });
}
function callKakaoLoginHandler() {
  return axios.get({
    pathname: 'https://kauth.kakao.com/oauth/authorize',
    query: {
      response_type: 'code',
      client_id: 'c63c08657e63a89661f53f6bbf43a349',
      redirect_uri: 'http://localhost:3000/',
    },
  });
}

export {
  createPost,
  updatePost,
  fetchPosts,
  fetchPostById,
  getUser,
  callKakaoLoginHandler,
};
