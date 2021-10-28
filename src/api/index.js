import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function createPost(postData) {
  return instance.post('/api/study', postData);
}

function fetchPosts() {
  return instance.get('/api/study');
}

function fetchPostById() {
  return instance.get('/api/study');
}

export { createPost, fetchPosts, fetchPostById };
