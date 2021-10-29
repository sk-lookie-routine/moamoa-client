import axios from 'axios';

const kakaoHeader = {
  Authorization: 'bb5018086be2351a3f9c2e95cc93ecda',
  'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
};

const getKakaoToken = async code => {
  console.log('loginWithKakao');
  try {
    const data = {
      grant_type: 'authorization_code',
      client_id: '87225eb38a5a24201d51e3f814ce78d9',
      redirect_uri: 'http://localhost:8080/auth',
      code: code,
    };
    const queryString = Object.keys(data)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
      .join('&');
    const result = await axios.post(
      `https://kauth.kakao.com/oauth/token`,
      queryString,
      { headers: kakaoHeader },
    );
    console.log('카카오 토큰', queryString);
    // this.$store.state.tokenData = queryString;
    // console.log(this.$store.state.tokenData);
    return result;
  } catch (e) {
    return e;
  }
};
const getKakaoUserInfo = async () => {
  let data = '';
  await window.Kakao.API.request({
    url: '/v2/user/me',
    success: function (response) {
      data = response;
    },
    fail: function (error) {
      console.log(error);
    },
  });
  console.log('카카오 계정 정보', data);
  return data;
};
export { getKakaoToken, getKakaoUserInfo };
