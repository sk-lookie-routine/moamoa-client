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

function fetchPostById(studySeq) {
  return posts.get('/', {
    params: {
      studySeq,
    },
  });
}
function fetchPostsByStudyType(studyType) {
  return posts.get('/', {
    params: {
      studyType,
    },
  });
}

function fetchPostsByStudyTypeList(studyTypeList) {
  return posts.get('/', {
    params: {
      studyTypeList,
    },
  });
}

function fetchPostsByTitle(title) {
  return posts.get('/', {
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
  fetchPostsByStudyTypeList,
  fetchPostsByTitle,
};
