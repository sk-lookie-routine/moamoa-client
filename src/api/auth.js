/* eslint-disable prettier/prettier */
import { auth } from './index';

function getToken(code) {
    return auth.get('kakao', {
        // params: { code: store.state.code },
        params: { code },
    });
}
export { getToken };
