import { room } from './index';

function createRoom(postSeq) {
  return room.post('/', {
    postSeq,
  });
}

function updateRoom(roomData) {
  return room.put('/', roomData);
}

function fetchPostsByTypeAndUserSeq(studyTypeList, userSeq) {
  return room.get('/', {
    params: {
      studyTypeList,
      userSeq,
    },
  });
}

function fetchRoomByStudySeq(studySeq) {
  return room.get('/', {
    params: {
      studySeq,
    },
  });
}

export {
  createRoom,
  updateRoom,
  fetchPostsByTypeAndUserSeq,
  fetchRoomByStudySeq,
};
