/* eslint-disable prettier/prettier */
import { auth } from './index';

function postUserData(postData) {
    return auth.post('/login', postData);
}
function deleteUser(userSeq) {
    console.log('userSeq상태2', userSeq);
    return auth.delete(`/reject/${userSeq}`);
}
export { postUserData, deleteUser }