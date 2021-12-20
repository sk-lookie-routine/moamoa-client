/* eslint-disable prettier/prettier */
// import axios from 'axios';
// import { getToken } from '@/api/index.js';

// const kakaoHeader = {
//     Authorization: '428ec49aac71c1fd18d4e667fdf2a61e',
//     'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
// };
// const getKakaoToken = async code => {
//     console.log('loginWithKakao');
//     try {
//         const result = getToken(code);
//         console.log('카카오 토큰', result);
//         return result;
//     } catch (e) {
//         return e;
//     }
// };
const getKakaoUserInfo = async () => {
    let data = '';

    await window.Kakao.API.request({
        url: "/v2/user/me",
        success: function (response) {
            data = response;
        },
        fail: function (error) {
            console.log(error);
        },
    });
    console.log('카카오 계정 정보', data);
    return data;
}

export { getKakaoUserInfo };
