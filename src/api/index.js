import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function createPost(postData) {
  return instance.post('/api/study', postData);
}

/*
function fetchPost() {
	return instance.post('/api/study');
}

function fetchPostById(id) {
	return instance.post('/api/study');
}
*/

export { createPost };
