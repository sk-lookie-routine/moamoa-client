/* eslint-disable prettier/prettier */
import { auth } from './index';

function postUserData(postData) {
    return auth.post('/login', postData);
}
export default { postUserData }