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
        placeholder="{{nickname}}"
        maxlength="8"
        class="text_ph"
        minlength="2"
      />
      <button class="check-idOverlap" @click="checkIdDuplicate">
        중복확인
      </button>
      <div class="box--underline"></div>
    </div>
    <div class="check">
      <div
        class="check-nickname-duplicated"
        v-if="isNicknameDuplicated && nickname.length > 0"
      >
        {{ text }}
      </div>
      <div
        class="check-nickname"
        v-if="!isNicknameDuplicated && nickname.length > 0"
      >
        {{ text }}
      </div>
      <div class="check-nickname-duplicated" v-if="nickname == ''">
        최소 2자 이상 입력하세요.
      </div>
      <div
        class="check-nickname"
        v-if="nickname.search(/\s/) != -1 || special_pattern.test(nickname)"
      >
        공백이나 특수문자 입력은 불가능합니다.
      </div>
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
        placeholder="{{desc}}"
        class="desc_ph"
        maxlength="30"
      />
      <div class="box--underline"></div>
    </div>
    <div class="edit-btn">
      <base-button class="cancel" @click="this.$router.replace('mypage')"
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
  data() {
    return {
      text: '',
      special_pattern: /[`~!@#$%^&*|"';:/?]/gi,
      nickname: this.$store.state.auth.username,
      desc: this.$store.state.auth.userInfo,
      account: this.$store.state.auth.email,
      isAllFilled: false,
      isNicknameDuplicated: false,
      isClickedDuplicatedButton: false,
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
    checkIdDuplicate() {
      this.isClickedDuplicatedButton = true;
      //중복 확인 버튼 눌렀다고 체크
      searchUserByName(this.nickname).then(response => {
        console.log(response);
        if (typeof response.data.content === 'undefined') {
          this.isNicknameDuplicated = false;
          this.text = '사용 가능한 닉네임입니다.';
        } else {
          this.isNicknameDuplicated = true;
          this.text = '이미 사용중인 닉네임입니다.';
        }
      });
    },
    randomImage() {
      let randomNumber = Math.floor(Math.random() * this.imgList.length);
      this.randomProfile = this.imgList[randomNumber];
      //랜덤 프로필 받아와서
      this.image = this.imgList[randomNumber].name.substr(5, 12);
      //image에 넣어줌 -> image는 이미지 소스만 받는역할
      //randomProfile -> template에서 출력하기 위한 변수
    },
    handleEdit() {
      if (this.nickname !== '' && this.desc !== '' && this.account !== '') {
        const updateData = {
          username: this.nickname,
          userInfo: this.desc,
          email: this.$store.state.auth.email,
          providerType: this.$store.state.auth.providerType,
          userId: this.$store.state.auth.userId,
          image: this.image,
          userSeq: this.$store.state.auth.userSeq,
        };
        updateUserData(updateData);
        this.$store.commit('setUser', updateData);
        this.$router.replace('mypage');
      } else {
        alert('모든 빈칸을 채워주세요.');
      }
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
.check-idOverlap {
  padding: 0.6rem;
  font-size: 1.2rem;
  margin: 0;
  position: absolute;
  right: 10%;
  width: 6.3rem;
  height: 2.6rem;
  background: #757575;
  color: white;
}
.check-nickname {
  position: absolute;
  text-align: end;
  padding-top: 1rem;
  font-size: 1.4rem;
  color: var(--green);
}
.check-nickname-duplicated {
  position: absolute;
  text-align: end;
  padding-top: 1rem;
  font-size: 1.4rem;
  color: var(--orange-dark);
}
.check-idOverlap {
  padding: 0.6rem;
  font-size: 1.2rem;
  margin: 0;
  position: absolute;
  right: 23%;
  width: 6.3rem;
  height: 2.6rem;
  background: #757575;
  color: white;
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
