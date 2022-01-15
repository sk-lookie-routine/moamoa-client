<template>
  <a class="kakao-login-btn" @click="kakaoLogin">
    <img src="@/assets/img/icon_kakao.svg" />
    <div class="kakao-login-btn-text">카카오 로그인</div>
  </a>
</template>

<script>
export default {
  methods: {
    kakaoLogin() {
      const params = {
        redirectUri: 'http://localhost:3000',
        // redirectUri: 'http://moa-moa.kr',
      };
      window.Kakao.Auth.authorize(params);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
  margin: 0;
}
.kakao-login-btn-text {
  font-size: 1.2rem;
  margin-right: 10.2rem;
}
.kakao-login-btn {
  margin-top: 6rem;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 29.2rem;
  height: 4.4rem;
  border: none;
  border-radius: 1rem;
  background: #fee500;
}
.kakao-login-btn:hover {
  cursor: pointer;
}
.kakao-login-btn img {
  padding-left: 2rem;
}
@media (max-width: 320px) {
  a {
    font-size: 1.2rem;
  }
  .kakao-login-btn {
    width: 25.2rem;
    height: 4rem;
  }
  .kakao-login-btn-text {
    margin: 0 auto;
  }
  .kakao-login-btn img {
    padding-left: 1.2rem;
  }
}
</style>
