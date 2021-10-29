<template>
  <div>리다이렉트 페이지입니다</div>
</template>

<script>
import { getKakaoToken, getKakaoUserInfo } from '@/services/login';
export default {
  created() {
    if (this.$route.query.code) {
      this.setKakaoToken();
    }
  },
  methods: {
    async setKakaoToken() {
      console.log('카카오 인증 코드', this.$route.query.code);
      const { data } = await getKakaoToken(this.$route.query.code);
      if (data.error) {
        alert('카카오톡 로그인 오류입니다.');
        this.$router.replace('/');
        return;
      }
      window.Kakao.Auth.setAccessToken(data.access_token);
      // this.$cookies.set('access-token', data.access_token, '1d');
      // this.$cookies.set('refresh-token', data.refresh_token, '1d');
      await this.setUserInfo();
      this.$router.replace('/signup-form');
      // history에 항목을 추가하지 않고 페이지 대체
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
};
</script>

<style></style>
