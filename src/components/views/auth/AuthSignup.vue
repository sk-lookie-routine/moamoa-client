<template>
<<<<<<< HEAD
<<<<<<< HEAD
	<div class="auth_form">
		<div class="auth-text">소셜 계정으로 간편 회원가입</div>
		<div class="box--underline"></div>
		<div class="auth-buttons">
			<button class="kakao-signup-btn">
				<img src="@/assets/img/icon_kakao.svg" />
				<div class="kakao-signup-btn-text">카카오 아이디로 가입하기</div>
			</button>
			<button class="google-signup-btn" @click="googleLoginBtn">
				<img src="@/assets/img/icon_google.svg" />
				<div class="google-signup-btn-text">구글 아이디로 가입하기</div>
			</button>
		</div>
		<div class="auth-isMember">
			이미 MOAMOA의 회원이신가요?
			<router-link to="/login" class="auth-link">로그인</router-link>
		</div>
		<div class="auth-etc">
			귀하는 MOAMOA의 이용약관과 개인정보처리방침을 읽고 이해했으며 그에
			동의함을 확인합니다.
		</div>
	</div>
=======
=======
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
  <div class="auth_form">
    <div class="auth-text">소셜 계정으로 간편 회원가입</div>
    <div class="box--underline"></div>
    <div class="auth-buttons">
      <button class="kakao-signup-btn">
        <img src="@/assets/img/icon_kakao.svg" />
        <div class="kakao-signup-btn-text">카카오 아이디로 가입하기</div>
      </button>
      <button class="google-signup-btn" @click="googleLoginBtn">
        <img src="@/assets/img/icon_google.svg" />
        <div class="google-signup-btn-text">구글 아이디로 가입하기</div>
      </button>
    </div>
    <div class="auth-isMember">
      이미 MOAMOA의 회원이신가요?
      <router-link to="/login" class="auth-link">로그인</router-link>
    </div>
    <div class="auth-etc">
      귀하는 MOAMOA의 이용약관과 개인정보처리방침을 읽고 이해했으며 그에
      동의함을 확인합니다.
    </div>
  </div>
<<<<<<< HEAD
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
=======
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
</template>

<script></script>

<style scoped>
* {
<<<<<<< HEAD
<<<<<<< HEAD
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
	margin: 0 auto;
	display: flex;
	flex-direction: column;
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
.kakao-signup-btn-text {
	font-size: 1.2rem;
	margin-right: 7.3rem;
}
.google-signup-btn-text {
	font-size: 1.2rem;
	margin-right: 7.8rem;
}
.kakao-signup-btn img,
.google-signup-btn img {
	border: 1px solid red;
	margin-left: 1.2rem;
}
.google-signup-btn {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 9rem;
	width: 29.2rem;
	height: 4.4rem;
	border: 1px solid black;
=======
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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
.kakao-signup-btn-text {
  font-size: 1.2rem;
  margin-right: 7.3rem;
}
.google-signup-btn-text {
  font-size: 1.2rem;
  margin-right: 7.8rem;
}
.kakao-signup-btn img,
.google-signup-btn img {
  border: 1px solid red;
  margin-left: 1.2rem;
}
.google-signup-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9rem;
  width: 29.2rem;
  height: 4.4rem;
  border: 1px solid black;
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
}
=======
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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
.kakao-signup-btn-text {
  font-size: 1.2rem;
  margin-right: 7.3rem;
}
.google-signup-btn-text {
  font-size: 1.2rem;
  margin-right: 7.8rem;
}
.kakao-signup-btn img,
.google-signup-btn img {
  border: 1px solid red;
  margin-left: 1.2rem;
}
.google-signup-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9rem;
  width: 29.2rem;
  height: 4.4rem;
  border: 1px solid black;
}
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
button {
  background: none;
  border: none;
  width: 29.2rem;
  height: 4.4rem;
  margin: 0 auto;
}
button:hover {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
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
=======
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
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
  .auth-text-decoration {
    width: 34.3rem;
  }
  .auth-etc {
    width: 26rem;
    text-align: center;
  }
<<<<<<< HEAD
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
=======
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
}
</style>
