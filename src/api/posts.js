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

function getStudyForMyPage(userSeq) {
  console.log('userSeq', userSeq);
  return post.get(`?isMyPage=YES&userSeq=${userSeq}&studyType=READY`);
}

export {
  createPost,
  updatePost,
  fetchPosts,
  fetchPostById,
  fetchPostsByStudyType,
  fetchPostsByKeyword,
  fetchPostByPageAndStudyType,
  getStudyForMyPage,
};
