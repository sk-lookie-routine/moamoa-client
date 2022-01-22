import { post } from './index';

function createPost(postData) {
  return post.post('/', postData);
}

function updatePost(postData) {
  return post.put('/', postData);
}

function deletePost(postSeq) {
  return post.delete('/', {
    data: {
      postSeq,
    },
  });
}

function fetchPosts() {
  return post.get('/');
}

function fetchPostsByType(postTypeList) {
  return post.get('/', {
    params: {
      postTypeList,
    },
  });
}

function fetchPostsByKeywordAndType(search, page, postTypeList) {
  if (search == '') {
    return post.get('/', {
      params: {
        size: 6,
        page,
        postTypeList,
      },
    });
  } else {
    return post.get('/', {
      params: {
        search,
        size: 6,
        page,
        postTypeList,
      },
    });
  }
}

function fetchPostByPostSeq(postSeq) {
  return post.get('/', {
    params: {
      postSeq,
    },
  });
}

function fetchPostByUserSeq(userSeq) {
  return post.get(`?userSeq=${userSeq}`);
} //마이페이지 프로필에 있는 스터디 개수 가져오기 위함

export {
  createPost,
  updatePost,
  deletePost,
  fetchPosts,
  fetchPostsByType,
  fetchPostsByKeywordAndType,
  fetchPostByPostSeq,
  fetchPostByUserSeq,
};
