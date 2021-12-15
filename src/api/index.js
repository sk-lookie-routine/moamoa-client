import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function createPost(postData) {
  return instance.post('/api/study', postData);
}

function updatePost(postData) {
  return instance.put('/api/study', postData);
}

function fetchPosts() {
  return instance.get('/api/study');
}

function fetchPostById() {
  return instance.get('/api/study');
}

function getUser() {
  return instance.get('/api/user');
}

export { createPost, updatePost, fetchPosts, fetchPostById, getUser };
