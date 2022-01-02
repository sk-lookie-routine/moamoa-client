/* eslint-disable prettier/prettier */
import { user } from './index';

function getUser(userId) {
    //토큰넘겨받는거였지
    return user.get('/', {
        params: { userId },
    });
}
function searchUserByName(username) {
    return user.get(`?username=${username}`, {
    });
}
function postUserData(postData) {
    return user.post('', postData);
}
function updateUserData(updateData) {
    return user.put('', updateData);
}
export { getUser, searchUserByName, postUserData, updateUserData };
