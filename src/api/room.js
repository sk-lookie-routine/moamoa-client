import { room } from './index';

function createRoom(postSeq) {
  return room.post('/', {
    postSeq,
  });
}

function updateRoom(roomData) {
  return room.put('/', roomData);
}

function fetchRoomsByTypeAndUserSeq(page, studyTypeList, userSeq) {
  return room.get('/', {
    params: {
      size: 4,
      page,
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
  fetchRoomsByTypeAndUserSeq,
  fetchRoomByStudySeq,
};
