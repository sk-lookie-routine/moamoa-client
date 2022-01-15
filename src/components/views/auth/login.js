/* eslint-disable prettier/prettier */
import axios from 'axios';

const kakaoHeader = {
    Authorization: '428ec49aac71c1fd18d4e667fdf2a61e',
    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
};
const getKakaoToken = async (code) => {
    console.log('loginWithKakao');
    try {
        const data = {
            grant_type: 'authorization_code',
            client_id: 'a75b5aef214abdc69ec5214ce6706d98',
            redirect_uri: 'http://localhost:3000',
            //redirect_uri: 'http://moa-moa.kr',
            code: code,
        };
        const queryString = Object.keys(data)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
            .join('&');
        const result = await axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader });
        console.log('카카오 토큰', result);
        return result;
    } catch (e) {
        return e;
    }
};
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

export { getKakaoToken, getKakaoUserInfo };
