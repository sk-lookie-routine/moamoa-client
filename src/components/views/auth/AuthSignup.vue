<template>
  <div class="auth-form">
    <div class="auth-text">소셜 계정으로 간편 회원가입</div>
    <div class="box--underline"></div>
    <div class="auth-buttons">
      <kakao-signup-btn></kakao-signup-btn>
      <google-signup-btn></google-signup-btn>
    </div>
    <div class="auth-isMember">
      이미 MOAMOA의 회원이신가요?
      <router-link to="/login" class="auth-link">로그인</router-link>
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
import KakaoSignupBtn from './KakaoSignupBtn.vue';
import GoogleSignupBtn from './GoogleSignupBtn.vue';
export default {
  components: { KakaoSignupBtn, GoogleSignupBtn },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>

<style scoped>
* {
  font-family: noto-sans-cjk-kr, sans-serif;
}
.auth-form {
  width: 100%;
}
.auth-text {
  font-family: noto-sans-cjk-kr, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.8rem;
  line-height: 2.7rem;
  margin: 0 auto;
  padding-top: 16.6rem;
  padding-bottom: 0.7rem;
  width: 21.7rem;
  height: 2.7rem;
  color: var(--black);
}
.box--underline {
  margin: 0 47rem;
  margin-top: 3.3rem;
}
.auth-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.kakao-signup-btn {
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
button {
  background: none;
  border: none;
  width: 29.2rem;
  height: 4.4rem;
  margin: 0 auto;
}
button:hover {
  cursor: pointer;
}
.auth-isMember {
  font-family: noto-sans-cjk-kr, sans-serif;
  font-weight: 300;
  font-style: normal;
  display: flex;
  margin: 0 auto;
  /* margin: 1.4rem 56.9rem 0 56.9rem; */
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
  /* margin: 7.6rem 48.1rem 19rem 48.1rem; */
  font-family: noto-sans-cjk-kr, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: var(--gray02);
  width: 48rem;
  height: 1.8rem;
}
@media (max-width: 320px) {
  .auth-form {
    max-width: 32rem;
    height: 70.5rem;
  }
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
    font-family: noto-sans-cjk-kr;
    margin: 0 auto;
    text-align: center;
    color: var(--gray02);
  }
}
</style>
