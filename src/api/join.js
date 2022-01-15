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
function fetchJoinByStudySeq(studySeq) {
  return join.get('/', {
    params: {
      studySeq,
    },
  });
}
function fetchOnlyApprovedJoinByUserSeq(userSeq) {
  return join.get(`?userSeq=${userSeq}&joinType=APPROVED`);
}

export {
  createJoin,
  updateJoin,
  fetchJoinByUserSeq,
  fetchJoinByStudySeq,
  fetchOnlyApprovedJoinByUserSeq,
};
