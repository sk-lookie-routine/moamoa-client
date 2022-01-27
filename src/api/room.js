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

function fetchRoomByUserSeq(userSeq) {
  return room.get('/', {
    params: {
      userSeq,
    },
  });
}

export {
  createRoom,
  updateRoom,
  fetchRoomsByTypeAndUserSeq,
  fetchRoomByStudySeq,
  fetchRoomByUserSeq,
};
