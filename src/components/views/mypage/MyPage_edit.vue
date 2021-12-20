<template>
  <div class="container">
    <div class="mypage-title">
      <div class="mypage-title-text">프로필 편집</div>
    </div>
    <div class="box--underline"></div>
    <div class="profile-img">
      <img :src="randomProfile.name" />
      <div class="text">랜덤 변경</div>
      <button @click="randomImage" class="randomBtn">
        <img src="@/assets/img/btn_random.svg" />
      </button>
    </div>
    <div class="nickname">
      닉네임 :
      <input
        type="text"
        v-model="nickname"
        placeholder="cococo(user.nickname)"
        maxlength="8"
        class="text_ph"
        minlength="2"
      />

      <div class="box--underline"></div>
    </div>
    <div class="account">
      로그인 계정 :
      <input
        type="text"
        v-model="account"
        placeholder="routine@naver.com"
        class="text_ph"
      />

      <div class="box--underline"></div>
    </div>
    <div class="description">
      한줄 소개 :
      <input
        type="text"
        v-model="desc"
        placeholder="한줄소개(user.desc)"
        class="desc_ph"
        maxlength="30"
      />
      <div class="box--underline"></div>
    </div>
    <div class="edit-btn">
      <base-button class="cancel" @click="handleCancel">취소</base-button>
      <base-button class="edit-done" @click="handleEdit">변경완료</base-button>
    </div>
  </div>
  <the-footer class="footer"></the-footer>
</template>

<script>
import TheFooter from '@/components/common/TheFooter.vue';
export default {
  components: { TheFooter },
  data() {
    return {
      nickname: '',
      desc: '',
      account: '',
      isAllFilled: false,
      randomProfile: {
        name: require('@/assets/img/profile/profile_sc_o.svg'),
      },
      imgList: [
        { name: require('@/assets/img/profile/profile_sc_o.svg') },
        { name: require('@/assets/img/profile/profile_sc_p.svg') },
        { name: require('@/assets/img/profile/profile_sc_r.svg') },
        { name: require('@/assets/img/profile/profile_sc_b.svg') },
        { name: require('@/assets/img/profile/profile_sc_y.svg') },
        { name: require('@/assets/img/profile/profile_sq_b.svg') },
        { name: require('@/assets/img/profile/profile_sq_o.svg') },
        { name: require('@/assets/img/profile/profile_sq_p.svg') },
        { name: require('@/assets/img/profile/profile_sq_r.svg') },
        { name: require('@/assets/img/profile/profile_sq_y.svg') },
        { name: require('@/assets/img/profile/profile_tr_b.svg') },
        { name: require('@/assets/img/profile/profile_tr_o.svg') },
        { name: require('@/assets/img/profile/profile_tr_p.svg') },
        { name: require('@/assets/img/profile/profile_tr_r.svg') },
        { name: require('@/assets/img/profile/profile_tr_y.svg') },
      ],
    };
  },
  methods: {
    moveToHome() {
      this.isAllFilled = true;
      this.$router.push('/home');
    },
    randomImage() {
      let randomNumber = Math.floor(Math.random() * this.imgList.length);
      this.randomProfile = this.imgList[randomNumber];
      console.log(randomNumber);
    },
    handleEdit() {
      if (this.nickname !== '' && this.desc !== '' && this.account !== '') {
        this.$router.replace('mypage');
      } else {
        alert('모든 빈칸을 채워주세요.');
      }
    },
    handleCancel() {
      this.$router.replace('mypage');
    },
  },
};
</script>

<style scoped>
.mypage-title {
  margin-top: 19.2rem;
  display: flex;
  justify-content: space-between;
}
.mypage-title-text {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 26px;
  color: var(--black);
}
.container {
  /* display: float; */
  height: 70rem;
  margin: 0 1.2rem;
  margin-bottom: 1.6rem;
}
.box--underline {
  margin-top: 1rem;
}
.title {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 3.4rem;
  color: var(--black);
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
  top: 0;
  transition: all ease 0.4s;
  background: none;
}
input:focus {
  /* input 클릭 시 테두리 삭제 */
  outline: none;
}
.randomBtn:hover {
  cursor: pointer;
  transform: rotate(50deg);
}
.nickname,
.description,
.account {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--black);
}
.description,
.account {
  margin-top: 4.8rem;
}
.account-more-icon {
  width: 3.2rem;
  height: 3.2rem;
  color: red;
  border: 1px solid red;
}
.text_ph,
.desc_ph {
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--black);
  border: none;
}
.edit-btn {
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-bottom: 18.3rem;
}
button {
  margin-top: 10rem;
  border: none;
}
.cancel {
  background-color: var(--gray03);
  width: 8.4rem;
  height: 4.1rem;
  font-size: 1.6rem;
  padding: 0;
  margin-right: 1.2rem;
}
.edit-done {
  width: 11.7rem;
  height: 4.1rem;
  font-size: 1.6rem;
  padding: 0;
}
.footer {
  margin-top: 18.3rem;
}

@media (max-width: 350px) {
  .container {
    display: flex;
    flex-direction: column;
    width: 32rem;
    margin: 0 auto;
    height: 67.8rem;
  }
  .signup-form {
    margin: 0 1.6rem;
  }
  .title {
    margin-top: 9.5rem;
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }
  .profile-img {
    margin: 0 auto;
    margin-top: 4.1rem;
  }
  .profile-info {
    margin-top: 1.6rem;
    font-size: 1.4rem;
  }
  .nickname-text,
  .nickname-text input,
  .description,
  .description input {
    font-size: 1.4rem;
  }
  .base-button,
  .base-button-disable {
    margin: 5rem 4.4rem 0 4.4rem;
    font-size: 1.6rem;
  }
  .start-btn {
    margin: 0;
  }
}
</style>
