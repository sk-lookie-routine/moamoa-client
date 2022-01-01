<template>
  <div>
    <div class="container">
      <div class="signup-form">
        <div class="title">회원가입</div>
        <div class="box--underline"></div>
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
            <button class="check-idOverlap" @click="checkIdDuplicate">
              중복확인
            </button>
            <div class="box--underline"></div>
            <!-- 유효성 검사 -->
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
                v-if="
                  nickname.search(/\s/) != -1 || special_pattern.test(nickname)
                "
              >
                공백이나 특수문자 입력은 불가능합니다.
              </div>
            </div>
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
            <div class="box--underline"></div>
          </div>
        </div>
        <div class="start-btn">
          <base-button
            class="base-button"
            v-if="
              nickname !== '' &&
              desc !== '' &&
              isClickedDuplicatedButton &&
              !isNicknameDuplicated
            "
            @click="moveToHome"
          >
            MOAMOA 시작하기
          </base-button>
          <base-button v-else class="base-button-disable"
            >MOAMOA 시작하기</base-button
          >
        </div>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from '@/components/common/TheFooter.vue';
import { getUserId, updateUserData } from '@/api/user.js';
import { UserDataPost } from '@/api/user.js';
export default {
  components: { TheFooter },
  data() {
    return {
      nickname: '',
      desc: '',
      special_pattern: /[`~!@#$%^&*|"';:/?]/gi,
      isAllFilled: false,
      isNicknameDuplicated: false,
      isClickedDuplicatedButton: false,
      text: '',
      imgName: '',
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
      const myUser = {
        email: this.$store.state.auth.email,
        username: this.$store.state.auth.username,
        providerType: this.$store.state.auth.providerType,
        userId: this.$store.state.auth.userId,
        image: this.$store.state.auth.image,
        userInfo: this.$store.state.auth.userInfo,
        userSeq: this.$store.state.auth.userSeq,
      };
      if (myUser.userSeq == '') {
        UserDataPost(myUser);
      } else {
        updateUserData(myUser);
      }
      this.$router.push('/home');
    },
    randomImage() {
      let randomNumber = Math.floor(Math.random() * this.imgList.length);
      this.randomProfile = this.imgList[randomNumber];
    },
    checkIdDuplicate() {
      this.isClickedDuplicatedButton = true;
      //중복 확인 버튼 눌렀다고 체크
      getUserId(this.nickname).then(response => {
        if (typeof response.data.content === 'undefined') {
          this.isNicknameDuplicated = false;
          this.text = '사용 가능한 닉네임입니다.';
        } else {
          this.isNicknameDuplicated = true;
          this.text = '이미 사용중인 닉네임입니다.';
        }
      });
      this.imgName = this.randomProfile.name.toString();
      this.imgName = this.imgName.substr(5, 12);
      //이미지 경로에서 소스만 추출
      this.$store.state.auth.image = this.imgName;
      this.$store.state.auth.userInfo = this.desc;
      this.$store.state.auth.username = this.nickname;
      //state에 한줄소개, 이미지경로 저장
      const myUser = {
        email: this.$store.state.auth.email,
        username: this.$store.state.auth.username,
        providerType: this.$store.state.auth.providerType,
        userId: this.$store.state.auth.userId,
        image: this.$store.state.auth.image,
        userInfo: this.$store.state.auth.userInfo,
        userSeq: this.$store.state.auth.userSeq,
      };
      console.log('put넣을 데이터', myUser);
    },
  },
};
</script>

<style scoped>
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
.signup-form {
  display: float;
  height: 70rem;
  margin: 19.2rem 12rem 0 12rem;
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
.nickname {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--black);
}
.check {
  display: flex;
  justify-content: flex-end;
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
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--black);
  border: none;
}
.start-btn {
  justify-content: center;
  display: flex;
}
button {
  margin-top: 10rem;
  border: none;
}
.base-button-disable {
  background-color: var(--gray03);
}
.base-button-disable:hover {
  cursor: no-drop;
}

@media (max-width: 420px) {
  .check-nickname {
    position: absolute;
    text-align: end;
    padding-top: 0.6rem;
    font-size: 1.2rem;
  }
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
  .nickname,
  .nickname input,
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
