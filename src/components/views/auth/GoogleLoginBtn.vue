<template>
  <a
    href="http://ec2-13-209-32-104.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000"
    class="google-login-btn"
  >
    <img src="@/assets/img/icon_google.svg" />
    <div class="google-login-btn-text">구글 아이디로 로그인</div>
  </a>
</template>

<script>
export default {};
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
</style>
