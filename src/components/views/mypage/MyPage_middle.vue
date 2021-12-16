<template>
  <div class="container">
    <div class="mypage-title">
      <div class="mypage-title-text">프로필</div>

      <div class="mypage-edit" @click="editProfile">
        <img src="@/assets/img/icon_edit.svg" />편집
      </div>
    </div>
    <div class="box--underline"></div>
    <div class="profile-box">
      <div class="profile-image">
        <img src="@/assets/img/profile/profile_sc_b.svg" />
      </div>
      <div class="profile-nickname">{{ currentUser.data.username }}</div>
      <div class="profile-email">{{ currentUser.data.email }}</div>
      <div class="profile-desc">스터디 100개 뿌시는게 목표</div>
      <div class="box--underline-under-email"></div>
      <div class="profile-study-info">
        <div class="profile-study-completed">
          완료한 스터디 : <span>2</span>개
        </div>
        <div class="profile-study-participated">
          참여중인 스터디 : <span>2</span>개
        </div>
      </div>
    </div>
  </div>
  <div class="divider"></div>
</template>

<script>
import { getUser } from '@/api/index.js';
export default {
  props: {
    editProfile: Function,
  },
  data() {
    return {
      currentUser: {},
    };
  },
  methods: {
    loginChecking() {
      this.$store.commit('loginCheck');
      if (this.$store.state.auth.token == '/') {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    },
    async getMyUser() {
      this.loginChecking();
      console.log(this.$store.state.auth.isLogin);
      const response = await getUser(this.$store.state.auth.token);
      this.currentUser = response;
      console.log(this.currentUser.data.username);
    },
  },
  mounted() {
    this.getMyUser();
  },
};
</script>

<style scoped>
.container {
  margin: 0 1.6rem;
}
.mypage-title {
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
.mypage-edit {
  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: var(--gray02);
}
.mypage-edit:hover {
  cursor: pointer;
  color: var(--gray01);
}
.mypage-edit img {
  margin-right: 0.4rem;
}
.box--underline {
  margin-top: 1rem;
}
.box--underline-under-email {
  border-bottom: 0.1rem solid var(--gray04);
  width: 10rem;
  margin: 0 auto;
}
.profile-box {
  font-family: Spoqa Han Sans Neo;
  padding-top: 8rem;
  padding-bottom: 13.8rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
}
.profile-image {
  padding-bottom: 1.5rem;
}
.profile-nickname {
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.4rem;
  color: var(--black);
}
.profile-email {
  margin-bottom: 2.9rem;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: var(--gray02);
}
.profile-desc {
  margin-bottom: 2.9rem;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: var(--gray01);
}
.profile-study-info {
  /* display: flex; */
  font-family: Spoqa Han Sans Neo;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: var(--gray01);
  margin-top: 1.5rem;
}
.profile-study-completed {
  padding-right: 2rem;
}
.profile-study-info span {
  color: var(--orange-dark);
}
.divider {
  border-bottom: 1rem solid #eff0f3;
}
@media (max-width: 320px) {
  .container {
    margin: 0 1.6rem;
  }
  .mypage-title-text {
    font-size: 2rem;
  }
  .mypage-edit {
    font-size: 1.4rem;
  }
  .profile-image img {
    width: 7.2rem;
    height: 7.2rem;
  }
  .profile-nickname {
    font-size: 1.8rem;
  }
  .box--underline-under-email {
    border-bottom: 0.1rem solid var(--gray04);
    margin: 0 auto;
  }
  .profile-study-info {
    margin-top: 1.5rem;
  }
}
</style>
