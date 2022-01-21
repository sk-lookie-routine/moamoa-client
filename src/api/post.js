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

function fetchPostById(postSeq) {
  return post.get('/', {
    params: {
      postSeq,
    },
  });
}

export {
  createPost,
  updatePost,
  deletePost,
  fetchPosts,
  fetchPostsByType,
  fetchPostsByKeywordAndType,
  fetchPostById,
};
