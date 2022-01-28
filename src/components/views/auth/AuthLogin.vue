<template>
  <div class="main-container">
    <div class="auth-text">소셜 계정으로 간편 로그인</div>
    <div class="box--underline"></div>
    <div class="login-buttons">
      <kakao-login-button class="kakao-login"></kakao-login-button>
      <google-login-button class="google-login"></google-login-button>
    </div>
    <div class="auth-isMember">
      아직 MOAMOA의 회원이 아니신가요?
      <router-link to="/signup" class="auth-link">회원가입</router-link>
    </div>
    <div class="auth-etc">
      귀하는 MOAMOA의 이용약관과 개인정보처리방침을 읽고 이해했으며 그에
      동의함을 확인합니다.
    </div>
    <div class="auth-etc-mobile">
      <p>귀하는 MOAMOA의 이용약관과 개인정보처리방침을</p>
      <p>읽고 이해했으며 그에 동의함을 확인합니다.</p>
    </div>
  </div>
</template>

<script>
import GoogleLoginButton from './GoogleLoginBtn.vue';
import KakaoLoginButton from './KakaoLoginBtn.vue';
export default {
  components: { GoogleLoginButton, KakaoLoginButton },
};
</script>

<style scoped>
* {
  font-family: 'Noto Sans KR', sans-serif;
}
.auth-text {
  font-family: 'Spoqa Han Sans Neo';
  font-weight: bold;
  font-style: normal;
  font-size: 1.8rem;
  line-height: 2.7rem;
  margin: 0 auto;
  padding-top: 23.6rem;
  padding-bottom: 0.7rem;
  width: 21.7rem;
  height: 2.7rem;
  color: var(--black);
}
.box--underline {
  margin-top: 3.3rem;
}
.login-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-isMember {
  font-weight: 300;
  font-style: normal;
  display: flex;
  margin: 0 auto;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1.7rem;
  width: 30.2rem;
  height: 2.9rem;
  background: var(--gray06);
  border-radius: 1rem;
  justify-content: center;
  color: var(--gray02);
}
.auth-link {
  padding-left: 2.2rem;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.7rem;
  color: var(--orange-dark);
  text-decoration: none;
  height: 1.7rem;
}
.auth-etc {
  margin: 0 auto;
  padding-top: 6.9rem;
  padding-bottom: 19.4rem;
  font-weight: 300;
  font-style: normal;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: var(--gray02);
  width: 48rem;
  height: 1.8rem;
}
.auth-etc-mobile {
  display: none;
}
@media (max-width: 768px) {
  .box--underline {
    margin: 0 1.6rem;
    margin-top: 3.3rem;
  }
  .auth-etc {
    display: none;
  }
  .auth-etc-mobile {
    display: block;
    margin-top: 6.9rem;
    margin-bottom: 19.4rem;
  }
  .auth-etc-mobile p {
    font-size: 1.2rem;
    margin: 0 auto;
    text-align: center;
    color: var(--gray02);
  }
}
</style>
