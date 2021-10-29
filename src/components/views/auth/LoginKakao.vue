<template>
  <button class="kakao-login-btn" @click="kakaoLoginBtn">
    <img src="@/assets/img/icon_kakao.svg" />
    <div class="kakao-login-btn-text">카카오 로그인</div>
  </button>
</template>

<script>
export default {
  name: 'LoginKakao',
  methods: {
    kakaoLoginBtn() {
      const params = {
        redirectUri: 'http://localhost:8080/auth',
      };
      window.Kakao.Auth.authorize(params);
    },
  },
};
</script>

<style scoped>
.kakao-login-btn {
  margin-top: 6rem;
  margin-bottom: 1.2rem;
  width: 29.2rem;
  height: 4.4rem;
  background: #fee500;
  color: #3c1e1e;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.kakao-login-btn-text {
  font-size: 1.2rem;
  margin-right: 10.2rem;
}
img {
  padding-left: 1.2rem;
}
</style>
