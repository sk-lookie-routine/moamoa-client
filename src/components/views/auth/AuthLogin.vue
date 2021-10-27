<template>
	<div class="auth-form">
		<div class="auth-text">소셜 계정으로 간편 로그인</div>
		<div class="box--underline"></div>
		<div class="auth-buttons">
			<button class="kakao-login-btn">
				<img src="@/assets/img/icon.svg" />
				<div class="kakao-login-btn-text">카카오 로그인</div>
			</button>
			<button class="google-login-btn" @click="googleLoginBtn">
				<img src="@/assets/img/icon_google.svg" />
				<div class="google-login-btn-text">구글 아이디로 로그인</div>
			</button>
		</div>
		<div class="auth-isMember">
			아직 MOAMOA의 회원이 아니신가요?
			<router-link to="/signup-form" class="auth-link">회원가입</router-link>
		</div>
		<div class="auth-etc">
			귀하는 MOAMOA의 이용약관과 개인정보처리방침을 읽고 이해했으며 그에
			동의함을 확인합니다.
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      lists: [],
    };
  },
  methods: {
    async googleLoginBtn() {
      let url = "http://localhost:8080/oauth2/authorization/naver";
      let options = {
        method: "POST",
        url: url,
      };
      let res = await axios(options);
      let data = await res.data;
      console.log(data);
    },
    async onSuccess(googleUser) {
      const user_join_type = "g";
      const googleEmail = googleUser.getBasicProfile().pu;
      // console.log(googleEmail);
      // const res = await fetch(
      //   "http://localhost:8080/oauth2/authorization/naver",
      //   {
      //     method: "POST",
      //   }
      // );
      let url = "http://localhost:8080/oauth2/authorization/naver";
      let options = {
        method: "POST",
        url: url,
      };
      let res = await axios(options);
      let data = await res.data;
      // axios
      //   .post("http://localhost:8080/oauth2/authorization/naver")
      //   .then((result) => console.log(result));
      // const data = await res.json();
      this.checkSnSLogin(data, googleEmail, user_join_type);
    }, //구글 로그인 콜백함수 (실패) onFailure(error) { // eslint-disable-next-line console.log(error); },
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
.box--underline{
  margin:0 47rem;
  margin-top:3.3rem;
}
.auth-buttons {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
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
.google-login-btn-text{
  font-size:1.2rem;
  margin-right:8.3rem;
}
.kakao-login-btn img,
.google-login-btn img {
  border: 1px solid red;
  margin-left: 1.2rem;
}
.google-login-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9rem;
  width: 29.2rem;
  height: 4.4rem;
  border: 1px solid black;
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
@media (max-width: 500px) {
  .auth-text-decoration {
    width: 34.3rem;
  }
  .auth-etc {
    width: 26rem;
    text-align: center;
  }
}
</style>
