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

function fetchPostsByStudyType(studyType) {
  return instance.get('/api/study', {
    params: {
      studyType,
    },
  });
}

function fetchPostsByStudyTypeList(studyTypeList) {
  return instance.get('/api/study', {
    params: {
      studyTypeList,
    },
  });
}

function fetchPostById(studySeq) {
  return instance.get('/api/study', {
    params: {
      studySeq,
    },
  });
}

function fetchPostsByTitle(title) {
  return instance.get('/api/study', {
    params: {
      title,
    },
  });
}

function fetchReply(userSeq, studySeq) {
  return instance.get('/api/reply', {
    params: {
      userSeq,
      studySeq,
    },
  });
}

function createReply(reply) {
  return instance.post('/api/reply', reply);
}

function getUser() {
  return instance.get('/api/user');
}

export {
  createPost,
  updatePost,
  fetchPosts,
  fetchPostsByStudyType,
  fetchPostsByStudyTypeList,
  fetchPostById,
  fetchPostsByTitle,
  fetchReply,
  createReply,
  getUser,
};
