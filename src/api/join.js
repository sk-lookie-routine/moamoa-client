import { join } from './index';

function createJoin(data) {
  return join.post('/', data);
}

function updateJoin(data) {
  return join.put('/', data);
}

function fetchJoinByUserSeq(userSeq) {
  return join.get('/', {
    params: {
      userSeq,
    },
  });
}

function fetchJoinByPostSeq(postSeq) {
  return join.get('/', {
    params: {
      postSeq,
    },
  });
}

function fetchOnlyApprovedJoinByUserSeq(userSeq) {
  return join.get(`?userSeq=${userSeq}&joinType=APPROVED`);
}

function fetchApprovedJoinByStudySeq(studySeq) {
  return join.get('/', {
    params: {
      studySeq,
      joinType: 'APPROVED',
    },
  });
}

export {
  createJoin,
  updateJoin,
  fetchJoinByUserSeq,
  fetchJoinByPostSeq,
  fetchApprovedJoinByStudySeq,
  fetchOnlyApprovedJoinByUserSeq,
};
