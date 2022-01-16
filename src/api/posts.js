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

function fetchPostsByUserSeqAndStudyType(userSeq, studyTypeList) {
  return post.get('/', {
    params: {
      userSeq,
      studyTypeList,
    },
  });
}

function fetchPostsInStudyRoom(userSeq, studyType) {
  return post.get('/', {
    params: {
      origin: 'studyRoom',
      userSeq,
      studyType,
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

function fetchPostsByKeyword(search) {
  return post.get('/', {
    params: {
      search,
    },
  });
}

function fetchPostByPageAndStudyType(page, studyTypeList) {
  return post.get('/', {
    params: {
      size: 6,
      page,
      studyTypeList,
    },
  });
}

export {
  createPost,
  updatePost,
  fetchPosts,
  fetchPostById,
  fetchPostsByUserSeqAndStudyType,
  fetchPostsInStudyRoom,
  fetchPostsByStudyType,
  fetchPostsByKeyword,
  fetchPostByPageAndStudyType,
};
