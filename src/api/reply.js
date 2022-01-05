import { reply } from './index';

function fetchReply(studySeq) {
  return reply.get('/', {
    params: {
      studySeq,
    },
  });
}

function createReply(reply) {
  return reply.post('/', reply);
}

export { fetchReply, createReply };
