/* eslint-disable prettier/prettier */
import { user } from './index';

function getUser(token) {
    //토큰넘겨받는거였지
    return user.get('/', {
        params: { token },
    });
}
function UserDataPost(postData) {
    return user.post('', postData);
}
export { getUser, UserDataPost };
