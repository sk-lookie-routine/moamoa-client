import { reply } from './index';

function fetchReply(postSeq) {
  return reply.get('/', {
    params: {
      postSeq,
    },
  });
}

function createReply(data) {
  return reply.post('/', data);
}

function updateReply(data) {
  return reply.put('/', data);
}

function deleteReply(replySeq) {
  return reply.delete('/', {
    data: {
      replySeq,
    },
  });
}

export { fetchReply, createReply, updateReply, deleteReply };
