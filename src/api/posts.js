/* eslint-disable prettier/prettier */
import { posts } from './index';

function createPost(postData) {
    return posts.post('/', postData);
}

function updatePost(postData) {
    return posts.get('/', postData);
}

function fetchPosts() {
    return posts.get('/');
}

function fetchPostById() {
    return posts.get('/');
}

export { createPost, updatePost, fetchPosts, fetchPostById };
