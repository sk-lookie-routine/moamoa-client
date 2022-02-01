<template>
  <div>
    <auth-modal :isClicked="isAllFilled"></auth-modal>
    <div class="main-container">
      <div class="signup-form">
        <div class="title">회원가입</div>
        <div class="box--underline"></div>
        <div class="profile">
          <div class="profile-img">
            <img :src="randomProfile.name" />
            <button @click="randomImage" class="randomBtn">
              <img src="@/assets/img/btn_random.svg" />
            </button>
          </div>
        </div>
        <div class="profile-info">
          <div class="nickname">
            <div class="nickname-box">
              <p>닉네임 :</p>
              <div class="nickname-inner-box">
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
            </div>
            <div class="box--underline"></div>
          </div>
          <div class="check">
            <div class="check_bad" v-if="!checkValid">
              {{ message }}
            </div>
            <div class="check_bad" v-if="nickname.find">
              {{ message }}
            </div>
            <div class="check_good" v-else>{{ message }}</div>
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
          </div>
          <div class="box--underline"></div>
        </div>
        <div class="start-btn">
          <base-button
            class="base-button"
            v-if="
              nickname !== '' &&
              desc !== '' &&
              isClickedButton &&
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
import AuthModal from './AuthModal.vue';
import { searchUserByName } from '@/api/user.js';
import { postUserData } from '@/api/auth.js';
export default {
  components: { TheFooter, AuthModal },
  created() {
    if (!this.$store.state.auth.isLogin) {
      this.$router.push({ name: 'login' });
      return;
    } else if (this.$store.state.auth.image) {
      this.$router.go(-1);
      return;
    }
  },
  data() {
    return {
      checkValid: false,
      message: '',
      nickname: '',
      desc: '',
      special_pattern: /[`~!@#$%^&*|"';:/?]/gi,
      isAllFilled: false,
      isNicknameDuplicated: false,
      isClickedButton: false,
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
    async moveToHome() {
      this.isAllFilled = true;
      this.getImageSubstr();

      const myUser = {
        email: this.$store.state.auth.email,
        username: this.nickname,
        userId: this.$store.state.auth.userId,
        image: this.imgName,
        userInfo: this.desc,
        userType: 'NORMAL',
      };

      const res = await postUserData(myUser);
      this.$store.commit('setUser', res.data);
    },
    randomImage() {
      let randomNumber = Math.floor(Math.random() * this.imgList.length);
      this.randomProfile = this.imgList[randomNumber];
    },
    getImageSubstr() {
      this.imgName = this.randomProfile.name.toString();
      this.imgName = this.imgName.substr(5, 12);
      //이미지 경로에서 소스만 추출
    },
    async checkIdDuplicate() {
      this.isClickedButton = true;

      await searchUserByName(this.nickname).then(response => {
        if (typeof response.data.content === 'undefined') {
          this.isNicknameDuplicated = false;
          this.message = '사용 가능한 닉네임입니다.';
          this.checkValid = true;
        } else {
          if (
            response.data.content[0].username != this.$store.state.auth.username
          ) {
            if (
              this.nickname.search(/\s/) != -1 ||
              this.special_pattern.test(this.nickname)
            ) {
              this.checkValid = false;
              this.message = '공백이나 특수문자 입력은 불가능합니다.';
              return;
            }
            this.isNicknameDuplicated = true;
            this.message = '이미 사용중인 닉네임입니다.';
            this.checkValid = false;
          } else {
            this.message = '';
          }
        }
      });
      this.getImageSubstr();
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
  display: flex;
  justify-content: center;
  padding: 0.6rem;
  font-size: 1.2rem;
  margin: 0;
  width: max-content;
  background: #757575;
  color: white;
}
.signup-form {
  display: float;
  margin-top: 19.2rem;
}
.title {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 3.4rem;
  color: var(--black);
}
.profile {
  display: flex;
  margin: 4.9rem 0 6.1rem 0;
}
.profile-img {
  position: relative;
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
  bottom: 0;
  right: 0;
  transition: all ease 0.4s;
  background: none;
  padding: 0;
}
input:focus {
  /* input 클릭 시 테두리 삭제 */
  outline: none;
}
.randomBtn:hover {
  cursor: pointer;
  transform: rotate(50deg);
}
.nickname-box {
  display: flex;
}
.nickname {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--black);
}
.nickname-inner-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.nickname-box p,
.description p {
  white-space: nowrap;
  margin-right: 0.8rem;
}
.nickname-box button {
  width: 8rem;
  height: 2.8rem;
  text-align: center;
}
.check {
  display: flex;
  justify-content: flex-end;
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
.box--underline {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .check-nickname {
    position: absolute;
    text-align: end;
    padding-top: 0.6rem;
    font-size: 1.2rem;
  }
  .container {
    display: flex;
    flex-direction: column;
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
    margin: 4.1rem auto auto auto;
  }
  .profile-img img {
    width: 7.2rem;
    height: 7.2rem;
  }
  .profile-img .randomBtn img {
    width: 2.4rem;
    height: 2.4rem;
  }
  .profile-info {
    margin-top: 1.6rem;
    font-size: 1.4rem;
  }
  .nickname-box {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
  .nickname-inner-box {
    align-items: center;
  }
  .nickname-box input,
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
  .box--underline {
    margin: 0.5rem 0;
  }
}
</style>
