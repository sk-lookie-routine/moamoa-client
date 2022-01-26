<template>
  <h1>이 페이지는 개발용 페이지입니다. 이후 랜딩 페이지가 될 수도 있습니다.</h1>
  <li>
    <router-link to="/home">홈페이지 이동</router-link>
  </li>
  <li>
    <router-link to="/login">로그인페이지 이동</router-link>
  </li>
  <li>
    <router-link to="/signup">회원가입페이지 이동</router-link>
  </li>
  <li>
    <router-link to="/signup-form">회원가입 form 페이지 이동</router-link>
  </li>
  <li>
    <router-link to="/posts">스터디 목록 이동</router-link>
  </li>
  <li>
    <router-link to="/rooms">스터디 룸 이동</router-link>
  </li>
  <li>
    <router-link to="/notice">공지사항 이동</router-link>
  </li>
  <li>
    <router-link to="/mypage">마이페이지 이동</router-link>
  </li>
</template>

<script>
import { saveAccessTokenToCookie } from '@/utils/cookies.js';
// import { getUserByUserSeq } from '@/api/user.js';
import {
  getKakaoToken,
  getKakaoUserInfo,
} from '@/components/views/auth/login.js';
import { getUser } from '@/api/user';
export default {
  created() {
    if (this.$route.query.code) {
      this.setKakaoToken();
    } else {
      this.$store.commit('logout');
    }
  },
  methods: {
    async setKakaoToken() {
      const { data } = await getKakaoToken(this.$route.query.code);
      if (data.error) {
        this.$router.replace('/login');
        return;
      }
      this.$store.commit('setToken', data); //store에 토큰저장
      saveAccessTokenToCookie(data.access_token); //cookie에 토큰저장
      window.Kakao.Auth.setAccessToken(data.access_token);
      await this.setUserInfo();
    },
    async setUserInfo() {
      this.$store.state.auth.providerType = 'KAKAO';
      const res = await getKakaoUserInfo();
      this.$store.state.auth.email = res.kakao_account.email;
      this.$store.state.auth.userId = res.id;
      //kakao 계정 이메일,아이디 우선 store에 넣어뒀음

      const userResponse = await getUser(this.$store.state.auth.userId);
      if (userResponse.data == '') {
        this.$store.commit('login');
        // NO CONTENT
        this.$router.push({ name: 'signup-form' });
      } else if (userResponse.data.content[0].userType == 'NORMAL') {
        //이미 가입한 회원인 경우
        this.$store.commit('login');
        this.$store.commit('setUser', userResponse.data.content[0]);
        this.$router.push({
          name: 'home',
        });
      } else if (userResponse.data.content[0].userType == 'REJECT') {
        //탈퇴한 적이 있는 회원인 경우
        alert('한번 탈퇴한 회원은 다시 가입하실 수 없습니다.');
        window.Kakao.API.request({
          url: '/v1/user/unlink',
        });
        this.$store.commit('initUser');
      }
    },
  },
};
</script>

<style scoped>
div,
li {
  font-size: 2rem;
}
</style>
