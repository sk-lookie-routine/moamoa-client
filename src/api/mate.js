import { mate } from './index';

function createMate(data) {
  return mate.post('/', data);
}

function updateMate(data) {
  return mate.put('/', data);
}

function fetchProgressMateByStudySeq(studySeq) {
  return mate.get('/', {
    params: {
      studySeq,
      mateType: 'PROGRESS',
    },
  });
}

export { createMate, updateMate, fetchProgressMateByStudySeq };
