import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

function createPost(postData) {
	return instance.post('/api/study', postData);
}

/*
function getPost() {
	return instance.post('/api/study');
}
*/

export { createPost };
