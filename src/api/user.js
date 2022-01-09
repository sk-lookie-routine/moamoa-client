/* eslint-disable prettier/prettier */
import { user } from './index';

function getUser(userId) {
    //토큰넘겨받는거였지
    return user.get('/', {
        params: { userId },
    });
}

function getUserByUserSeq(userSeq) {
    return user.get('/', {
        params: { userSeq },
    });
}

function searchUserByName(username) {
    return user.get(`?username=${username}`, {
    });
}
function updateUserData(updateData) {
    return user.put('', updateData);
}

export { getUser, getUserByUserSeq, searchUserByName, updateUserData };