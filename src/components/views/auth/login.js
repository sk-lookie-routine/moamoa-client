/* eslint-disable prettier/prettier */
import axios from 'axios';

const kakaoHeader = {
    Authorization: '428ec49aac71c1fd18d4e667fdf2a61e',
    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
};
const getKakaoToken = async (code) => {
    try {
        const data = {
            grant_type: 'authorization_code',
            client_id: 'a75b5aef214abdc69ec5214ce6706d98',
            redirectUri: 'https://moa-moa.kr/redirect',
            code: code,
        };
        const queryString = Object.keys(data)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
            .join('&');
        const result = await axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader });

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
        fail: function () {
        },
    });
    return data;
}

export { getKakaoToken, getKakaoUserInfo };
