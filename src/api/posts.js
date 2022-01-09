import { post } from './index';

function createPost(postData) {
  return post.post('/', postData);
}

function updatePost(postData) {
  return post.put('/', postData);
}

function fetchPosts() {
  return post.get('/');
}

function fetchPostById(studySeq) {
  return post.get('/', {
    params: {
      studySeq,
    },
  });
}

function fetchPostsByStudyType(studyTypeList) {
  return post.get('/', {
    params: {
      studyTypeList,
    },
  });
}

function fetchPostsByTitle(title) {
  return post.get('/', {
    params: {
      title,
    },
  });
}

export {
  createPost,
  updatePost,
  fetchPosts,
  fetchPostById,
  fetchPostsByStudyType,
  fetchPostsByTitle,
};
