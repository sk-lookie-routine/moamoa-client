<template>
  <div class="container">
    <div class="mypage-title">
      <div class="mypage-title-text">프로필 편집</div>
    </div>
    <div class="box--underline"></div>
    <div class="profile-img">
      <img :src="randomProfile.name" />
      <button @click="randomImage" class="randomBtn">
        <img src="@/assets/img/btn_random.svg" />
      </button>
    </div>
    <div class="nickname">
      <div class="nickname-box">
        <p>닉네임 :</p>
        <input
          type="text"
          v-model="nickname"
          placeholder="닉네임을 입력해주세요."
          maxlength="8"
          class="text_ph"
          minlength="2"
        />
        <button class="check-idOverlap" @click="checkIdDuplicate">
          중복확인
        </button>
      </div>
      <div class="box--underline"></div>
    </div>
    <div class="check">
      <div class="check_bad" v-if="!checkValid">
        {{ message }}
      </div>
      <div class="check_good" v-else>{{ message }}</div>
    </div>
    <div class="account">
      <div class="account-box">
        <div class="account-text">
          <p>로그인 계정 :</p>

          <div class="text_ph">{{ account }}</div>
        </div>
        <button @click="onClickAccountManage">
          <img src="@/assets/img/icon_arrow_right.svg" />
        </button>
      </div>
      <div class="box--underline"></div>
    </div>
    <div class="description">
      <p>한줄 소개 :</p>
      <input
        type="text"
        v-model="desc"
        placeholder="한줄 소개를 입력해주세요."
        class="desc_ph"
        maxlength="30"
      />
      <div class="box--underline"></div>
    </div>
    <div class="edit-btn">
      <base-button class="cancel" @click="this.$router.go(-1)"
        >취소</base-button
      >
      <base-button class="edit-done" @click="handleEdit">변경완료</base-button>
    </div>
  </div>
  <the-footer class="footer"></the-footer>
</template>

<script>
import TheFooter from '@/components/common/TheFooter.vue';
import { searchUserByName, updateUserData } from '@/api/user.js';
export default {
  components: { TheFooter },
  created() {
    this.nickname = this.$store.state.auth.username;
    this.desc = this.$store.state.auth.userInfo;
    this.account = this.$store.state.auth.email;

    if (!this.$store.state.auth.isLogin) {
      this.$route.push({ name: 'login' });
    }
  },
  data() {
    return {
      message: '',
      checkValid: false,
      special_pattern: /[`~!@#$%^&*|"';:/?]/gi,
      nickname: null,
      desc: null,
      account: null,
      isNicknameDuplicated: false,
      isClickedButton: false,
      randomProfile: {
        name: require(`@/assets/img/profile/${this.$store.state.auth.image}.svg`),
      },
      image: `@/assets/img/profile/${this.$store.state.auth.image}.svg`.substr(
        21,
        12,
      ),
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
    showUserPage(userSeq) {
      this.$router.push({
        name: 'mypage',
        params: {
          userSeq,
        },
      });
    },
    checkIdDuplicate() {
      this.isClickedButton = true;
      searchUserByName(this.nickname).then(response => {
        if (typeof response.data.content === 'undefined') {
          this.isNicknameDuplicated = false;
          this.message = '사용 가능한 닉네임입니다.';
          this.checkValid = true;
        } else {
          if (
            response.data.content[0].username != this.$store.state.auth.username
          ) {
            this.isNicknameDuplicated = true;
            this.message = '이미 사용중인 닉네임입니다.';
            this.checkValid = false;
          }
        }
      });
    },
    randomImage() {
      let randomNumber = Math.floor(Math.random() * this.imgList.length);
      this.randomProfile = this.imgList[randomNumber];
      // 프로필 받아와서
      this.image = this.imgList[randomNumber].name.substr(5, 12);
      //image에 넣어줌 -> image는 이미지 소스만 받는역할
      //randomProfile -> template에서 출력하기 위한 변수
    },
    async handleEdit() {
      if (this.nickname !== '' && this.desc !== '' && this.account !== '') {
        if (
          this.nickname != this.$store.state.auth.username &&
          !this.isClickedButton
        ) {
          this.checkValid = false;
          this.message = '닉네임 변경 시 중복확인 버튼을 눌러주세요.';
          return;
        }
        //변경된 데이터
        const updateData = {
          username: this.nickname,
          userInfo: this.desc,
          email: this.$store.state.auth.email,
          providerType: this.$store.state.auth.providerType,
          userId: this.$store.state.auth.userId,
          image: this.image,
          userSeq: this.$store.state.auth.userSeq,
        };
        await updateUserData(updateData);
        this.$store.commit('setUser', updateData);
        this.showUserPage(this.$store.state.auth.userSeq);
      } else {
        this.checkValid = false;
        this.message = '모든 빈칸을 채워주세요.';
      }
    },
    onClickAccountManage() {
      this.$router.push('/account-manage');
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.mypage-title {
  margin-top: 19.2rem;
  display: flex;
  justify-content: space-between;
}
.mypage-title-text {
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 26px;
  color: var(--black);
}
.box--underline {
  margin-top: 1rem;
}
.title {
  font-weight: bold;
  font-size: 2rem;
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
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--black);
}
.nickname-box p {
  width: 8rem;
  align-items: center;
  display: flex;
}
.nickname-box {
  display: flex;
}
.description,
.account {
  margin-top: 4.8rem;
}
.account-box p {
  width: 9rem;
  align-items: center;
  display: flex;
}
.account-box {
  position: relative;
  justify-content: space-between;
  max-height: 3.2rem;
}
.account-text {
  display: flex;
}
.account-box button {
  background: none;
  position: absolute;
  bottom: 0;
  right: 0;
}
.account button img {
  width: 3.2rem;
  height: 3.2rem;
}
.text_ph,
.desc_ph {
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: var(--black);
  border: none;
  display: flex;
  /* align-items: center; */
}
.edit-btn {
  justify-content: flex-end;
  display: flex;
  align-items: center;
  box-shadow: none;
  margin-bottom: 18.3rem;
}
button {
  margin-top: 10rem;
  border: none;
  box-shadow: none;
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
.check-idOverlap {
  display: flex;
  justify-content: center;
  padding: 0.6rem;
  font-size: 1.2rem;
  margin: 0;
  width: max-content;
  background: #757575;
  color: white;
}
.nickname-box button {
  width: 8rem;
  height: 2.8rem;
  text-align: center;
}
.check_good {
  position: absolute;
  text-align: end;
  padding-top: 1rem;
  font-size: 1.4rem;
  color: var(--green);
}
.check_bad {
  position: absolute;
  text-align: end;
  padding-top: 1rem;
  font-size: 1.4rem;
  color: var(--orange-dark);
}

@media (max-width: 768px) {
  .container {
    max-width: 34.3rem;
    display: flex;
    flex-direction: column;
    margin: 0 1.6rem;
    margin: 0 auto;
  }
  .signup-form {
    margin: 0 1.6rem;
  }
  .mypage-title {
    margin-top: 9.5rem;
  }
  .mypage-title-text {
    font-size: 2rem;
  }
  .profile-img .randomBtn {
    position: absolute;
    left: 5rem;
  }
  .profile-img .randomBtn img {
    width: 2.4rem;
    height: 2.4rem;
  }
  .profile-img {
    margin: 0 auto;
    margin-top: 4.1rem;
    margin-bottom: 1.2rem;
  }
  .profile-img img {
    width: 7.2rem;
    height: 7.2rem;
  }
  .profile-info {
    margin-top: 1.6rem;
    font-size: 1.4rem;
  }
  .nickname-box button {
    font-size: 1rem;
  }
  .nickname-box p,
  .account-box p {
    font-size: 1.4rem;
  }
  .account button img {
    width: 1.6rem;
    height: 1.6rem;
  }
  .nickname,
  .nickname input,
  .description,
  .description input,
  .account,
  .account input {
    font-size: 1.4rem;
  }
  .text_ph,
  .desc_ph {
    font-size: 1.4rem;
    line-height: 2.6rem;
    color: var(--black);
    border: none;
  }
  .base-button,
  .base-button-disable {
    margin: 5rem 4.4rem 0 4.4rem;
    font-size: 1.6rem;
  }
  .randomBtn {
    margin: 0;
    padding: 0;
  }
  .start-btn {
    margin: 0;
  }
  .box--underline {
    margin: 1rem 0;
  }
  .cancel {
    width: 4.6em;
    height: 3.8rem;
    font-size: 1.4rem;
  }
  .edit-done {
    width: 7.5rem;
    height: 3.8rem;
    font-size: 1.4rem;
  }
}
</style>
