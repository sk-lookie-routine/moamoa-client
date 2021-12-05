<template>
  <a
    href="http://moa-moa.kr:8080/oauth2/authorization/google?redirect_uri=http://moa-moa.kr"
    class="google-login-btn"
  >
    <img src="@/assets/img/icon_google.svg" />
    <div class="google-login-btn-text">구글 아이디로 가입</div>
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
  margin-right: 8.9rem;
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
    margin-right: 7.8rem;
  }
  .google-login-btn img {
    padding-left: 1.2rem;
  }
}
</style>
