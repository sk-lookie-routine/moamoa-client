<template>
  <a
    href="http://ec2-13-209-32-104.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000"
    class="google-login-btn"
    @click="login"
  >
    <img src="@/assets/img/icon_google.svg" />
    <div class="google-login-btn-text">구글 아이디로 로그인</div>
  </a>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('login');
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
.google-login-btn-text {
  font-size: 1.2rem;
  margin-right: 8.3rem;
}
.google-login-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 29.2rem;
  height: 4.4rem;
  border: 1px solid black;
  border-radius: 1rem;
  margin-bottom: 9.5rem;
}
.google-login-btn img {
  padding-left: 1.5rem;
}
@media (max-width: 320px) {
  .google-login-btn {
    margin-bottom: 15.1rem;
    width: 25.2rem;
    height: 4rem;
  }
  .google-login-btn-text {
    margin: 0 auto;
  }
  .google-login-btn img {
    padding-left: 1.2rem;
  }
}
</style>
