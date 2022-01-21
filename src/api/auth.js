/* eslint-disable prettier/prettier */
import { auth } from './index';

function postUserData(postData) {
    return auth.post('/login', postData);
}
function deleteUser() {
    return auth.post('/reject');
}
export { postUserData, deleteUser }