/* eslint-disable prettier/prettier */
import { auth } from './index';

function postUserData(postData) {
    return auth.post('/login', postData);
}
function deleteUser(userData) {
    return auth.post('/reject', userData);
}
export { postUserData, deleteUser }