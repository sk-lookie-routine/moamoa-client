import { reply } from './index';

function fetchReply(studySeq) {
  return reply.get('/', {
    params: {
      studySeq,
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
