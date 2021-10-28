<template>
<<<<<<< HEAD
<<<<<<< HEAD
	<auth-header></auth-header>
	<auth-modal v-if="!isAllFilled"></auth-modal>
	<div class="signup-form">
		<div class="title">회원가입</div>
		<div class="decoration"></div>
		<div class="profile-img">
			<img :src="randomProfile.name" />
			<div class="text">랜덤 변경</div>
			<button @click="randomImage" class="randomBtn">
				<img src="@/assets/img/btn_random.svg" />
			</button>
		</div>
		<div class="profile-info">
			<div class="nickname">
				닉네임 :
				<input
					type="text"
					v-model="nickname"
					placeholder="최대 8자"
					class="text_ph"
					maxlength="8"
					minlength="2"
				/>
				<div class="decoration"></div>
			</div>
			<div class="description">
				한줄 소개 :
				<input
					type="text"
					v-model="desc"
					placeholder="한줄로 소개하세요."
					class="desc_ph"
					maxlength="30"
				/>
				<div class="decoration"></div>
			</div>
		</div>
		<div class="start-btn">
			<base-button
				class="base-button"
				v-if="nickname !== '' && desc !== ''"
				@click="changeIsAllFilled"
			>
				MOAMOA 시작하기
			</base-button>
			<button v-else disabled>MOAMOA 시작하기</button>
		</div>
	</div>
	<the-footer></the-footer>
=======
=======
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
  <auth-header></auth-header>
  <auth-modal v-if="!isAllFilled"></auth-modal>
  <div class="signup-form">
    <div class="title">회원가입</div>
    <div class="decoration"></div>
    <div class="profile-img">
      <img :src="randomProfile.name" />
      <div class="text">랜덤 변경</div>
      <button @click="randomImage" class="randomBtn">
        <img src="@/assets/img/btn_random.svg" />
      </button>
    </div>
    <div class="profile-info">
      <div class="nickname">
        닉네임 :
        <input
          type="text"
          v-model="nickname"
          placeholder="최대 8자"
          class="text_ph"
          maxlength="8"
          minlength="2"
        />
        <div class="decoration"></div>
      </div>
      <div class="description">
        한줄 소개 :
        <input
          type="text"
          v-model="desc"
          placeholder="한줄로 소개하세요."
          class="desc_ph"
          maxlength="30"
        />
        <div class="decoration"></div>
      </div>
    </div>
    <div class="start-btn">
      <base-button
        class="base-button"
        v-if="nickname !== '' && desc !== ''"
        @click="changeIsAllFilled"
      >
        MOAMOA 시작하기
      </base-button>
      <button v-else disabled>MOAMOA 시작하기</button>
    </div>
  </div>
  <the-footer></the-footer>
<<<<<<< HEAD
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
=======
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
</template>

<script>
import AuthHeader from '@/components/common/AuthHeader.vue';
import TheFooter from '@/components/common/TheFooter.vue';
import AuthModal from '@/components/views/auth/AuthModal.vue';
export default {
<<<<<<< HEAD
<<<<<<< HEAD
	components: { AuthHeader, TheFooter, AuthModal },
	data() {
		return {
			nickname: '',
			desc: '',
			isAllFilled: false,
			randomProfile: {
				name: require('../assets/img/profile/profile_sc_o.svg'),
			},
			imgList: [
				{ name: require('../assets/img/profile/profile_sc_o.svg') },
				{ name: require('../assets/img/profile/profile_sc_p.svg') },
				{ name: require('../assets/img/profile/profile_sc_r.svg') },
				{ name: require('../assets/img/profile/profile_sc_b.svg') },
				{ name: require('../assets/img/profile/profile_sc_y.svg') },
				{ name: require('../assets/img/profile/profile_sq_b.svg') },
				{ name: require('../assets/img/profile/profile_sq_o.svg') },
				{ name: require('../assets/img/profile/profile_sq_p.svg') },
				{ name: require('../assets/img/profile/profile_sq_r.svg') },
				{ name: require('../assets/img/profile/profile_sq_y.svg') },
				{ name: require('../assets/img/profile/profile_tr_b.svg') },
				{ name: require('../assets/img/profile/profile_tr_o.svg') },
				{ name: require('../assets/img/profile/profile_tr_p.svg') },
				{ name: require('../assets/img/profile/profile_tr_r.svg') },
				{ name: require('../assets/img/profile/profile_tr_y.svg') },
			],
		};
	},
	methods: {
		changeIsAllFilled() {
			this.isAllFilled = true;
		},
		randomImage() {
			let randomNumber = Math.floor(Math.random() * this.imgList.length);
			this.randomProfile = this.imgList[randomNumber];
			console.log(randomNumber);
		},
	},
=======
=======
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
  components: { AuthHeader, TheFooter, AuthModal },
  data() {
    return {
      nickname: '',
      desc: '',
      isAllFilled: false,
      randomProfile: {
        name: require('../assets/img/profile/profile_sc_o.svg'),
      },
      imgList: [
        { name: require('../assets/img/profile/profile_sc_o.svg') },
        { name: require('../assets/img/profile/profile_sc_p.svg') },
        { name: require('../assets/img/profile/profile_sc_r.svg') },
        { name: require('../assets/img/profile/profile_sc_b.svg') },
        { name: require('../assets/img/profile/profile_sc_y.svg') },
        { name: require('../assets/img/profile/profile_sq_b.svg') },
        { name: require('../assets/img/profile/profile_sq_o.svg') },
        { name: require('../assets/img/profile/profile_sq_p.svg') },
        { name: require('../assets/img/profile/profile_sq_r.svg') },
        { name: require('../assets/img/profile/profile_sq_y.svg') },
        { name: require('../assets/img/profile/profile_tr_b.svg') },
        { name: require('../assets/img/profile/profile_tr_o.svg') },
        { name: require('../assets/img/profile/profile_tr_p.svg') },
        { name: require('../assets/img/profile/profile_tr_r.svg') },
        { name: require('../assets/img/profile/profile_tr_y.svg') },
      ],
    };
  },
  methods: {
    changeIsAllFilled() {
      this.isAllFilled = true;
    },
    randomImage() {
      let randomNumber = Math.floor(Math.random() * this.imgList.length);
      this.randomProfile = this.imgList[randomNumber];
      console.log(randomNumber);
    },
  },
<<<<<<< HEAD
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
=======
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
};
</script>

<style scoped>
.signup-form {
<<<<<<< HEAD
<<<<<<< HEAD
	padding: 10.8rem 12rem 0 12rem;
	display: float;
	height: 129.7rem;
}
.title {
	font-family: Spoqa Han Sans Neo;
	font-weight: bold;
	font-size: 2.2rem;
	line-height: 3.4rem;
	color: var(--black);
}
.decoration {
	margin: 1.6rem 0 0 0;
	padding: 0;
	border: 0.7px solid var(--gray04);
	background: var(--gray04);
}
.profile-img {
	margin-top: 4.9rem;
	margin-bottom: 6.1rem;
	position: relative;
	padding: 0;
	width: 14.4rem;
	height: 14.4rem;
}
.text {
	width: 4.7rem;
	height: 1.4rem;
	font-family: Spoqa Han Sans Neo;
	font-size: 1.2rem;
	line-height: 1.4rem;
	color: var(--orange);
	position: absolute;
	right: 0;
}
.randomBtn {
	position: absolute;
	right: 0;
	bottom: 0;
	transition: all ease 0.5s;
	background: none;
=======
  padding: 10.8rem 12rem 0 12rem;
  display: float;
  height: 129.7rem;
}
.title {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 3.4rem;
  color: var(--black);
}
.decoration {
  margin: 1.6rem 0 0 0;
  padding: 0;
  border: 0.7px solid var(--gray04);
  background: var(--gray04);
}
.profile-img {
  margin-top: 4.9rem;
  margin-bottom: 6.1rem;
  position: relative;
  padding: 0;
  width: 14.4rem;
  height: 14.4rem;
}
.text {
  width: 4.7rem;
  height: 1.4rem;
  font-family: Spoqa Han Sans Neo;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: var(--orange);
  position: absolute;
  right: 0;
}
.randomBtn {
=======
  padding: 10.8rem 12rem 0 12rem;
  display: float;
  height: 129.7rem;
}
.title {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 3.4rem;
  color: var(--black);
}
.decoration {
  margin: 1.6rem 0 0 0;
  padding: 0;
  border: 0.7px solid var(--gray04);
  background: var(--gray04);
}
.profile-img {
  margin-top: 4.9rem;
  margin-bottom: 6.1rem;
  position: relative;
  padding: 0;
  width: 14.4rem;
  height: 14.4rem;
}
.text {
  width: 4.7rem;
  height: 1.4rem;
  font-family: Spoqa Han Sans Neo;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: var(--orange);
  position: absolute;
  right: 0;
}
.randomBtn {
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
  position: absolute;
  right: 0;
  bottom: 0;
  transition: all ease 0.5s;
  background: none;
<<<<<<< HEAD
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
=======
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
}
input:focus {
  /* input 클릭 시 테두리 삭제 */
  outline: none;
}
.randomBtn:hover {
  cursor: pointer;
  transform: rotate(45deg);
}
.nickname {
<<<<<<< HEAD
<<<<<<< HEAD
	font-family: Spoqa Han Sans Neo;
	font-weight: bold;
	font-size: 1.8rem;
	line-height: 2.6rem;
	color: var(--black);
}
.description {
	font-family: Spoqa Han Sans Neo;
	font-weight: bold;
	font-size: 1.8rem;
	line-height: 2.6rem;
	color: var(--black);
	margin-top: 5.4rem;
}
.text_ph,
.desc_ph {
	font-family: Spoqa Han Sans Neo;
	font-size: 1.8rem;
	line-height: 2.6rem;
	color: var(--black);
	border: none;
}
.start-btn {
	justify-content: center;
	display: flex;
	margin-bottom: 26rem;
}
button {
	margin-top: 10rem;
	border: none;
}
.base-button:hover {
	cursor: pointer;
=======
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--black);
}
.description {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--black);
  margin-top: 5.4rem;
}
.text_ph,
.desc_ph {
  font-family: Spoqa Han Sans Neo;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--black);
  border: none;
}
.start-btn {
  justify-content: center;
  display: flex;
  margin-bottom: 26rem;
}
button {
  margin-top: 10rem;
  border: none;
}
.base-button:hover {
  cursor: pointer;
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
=======
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--black);
}
.description {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--black);
  margin-top: 5.4rem;
}
.text_ph,
.desc_ph {
  font-family: Spoqa Han Sans Neo;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--black);
  border: none;
}
.start-btn {
  justify-content: center;
  display: flex;
  margin-bottom: 26rem;
}
button {
  margin-top: 10rem;
  border: none;
}
.base-button:hover {
  cursor: pointer;
>>>>>>> 29272d3e27ae17e33c666bdc198cd120ca59c1d8
}
@media (max-width: 500px) {
  .signup_form {
    margin: 0 auto;
    padding: 0 2.4rem;
  }
  .title {
    margin-top: 4.3rem;
  }
}
</style>
