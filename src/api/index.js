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

export { createPost, updatePost, fetchPosts, fetchPostById, getUser };
