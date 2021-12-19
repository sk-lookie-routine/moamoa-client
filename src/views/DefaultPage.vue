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
import {
  getKakaoToken,
  getKakaoUserInfo,
} from '@/components/views/auth/login.js';
export default {
  methods: {
    loginCheck() {
      this.$store.commit('loginCheck');
    },
    async setKakaoToken() {
      console.log('카카오 인증 코드', this.$route.query.code);
      const { data } = await getKakaoToken(this.$route.query.code);
      if (data.error) {
        alert('카카오톡 로그인 오류입니다.');
        this.$router.replace('/login');
        return;
      }
      window.Kakao.Auth.setAccessToken(data.access_token);
      await this.setUserInfo();
      // this.$router.replace('/');
    },
    async setUserInfo() {
      const res = await getKakaoUserInfo();
      const userInfo = {
        name: res.kakao_account.profile.nickname,
        platform: 'kakao',
      };
      this.$store.commit('setUser', userInfo);
    },
  },
  created() {
    if (this.$route.query.code) {
      this.setKakaoToken();
    }
  },
};
</script>

<style scoped>
div,
li {
  font-size: 2rem;
}
</style>
