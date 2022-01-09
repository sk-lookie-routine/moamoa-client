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

export { fetchReply, createReply };
