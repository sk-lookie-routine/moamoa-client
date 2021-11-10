<template>
  <a
    href="http://ec2-13-209-32-104.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000"
    class="kakao-login-btn"
  >
    <img src="@/assets/img/icon_kakao.svg" />
    <div class="kakao-login-btn-text">카카오 아이디로 가입</div>
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
.kakao-login-btn-text {
  font-size: 1.2rem;
  margin-right: 8.4rem;
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
.kakao-login-btn img {
  padding-left: 1.5rem;
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
    margin-right: 7rem;
  }
  .kakao-login-btn img {
    padding-left: 1.2rem;
  }
}
</style>
