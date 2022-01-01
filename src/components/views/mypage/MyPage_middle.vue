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
      <div class="profile-image" v-for="image in imgList" :key="image.id">
        <div v-if="image.name.search(this.$store.state.auth.image) != -1">
          <img :src="image.name" />
        </div>
      </div>
      <div class="profile-nickname">{{ currentUser.username }}</div>
      <div class="profile-email">{{ currentUser.email }}</div>
      <div class="profile-desc">{{ currentUser.userInfo }}</div>
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
import { getUser } from '@/api/user.js';
export default {
  props: {
    editProfile: Function,
  },
  created() {
    this.getMyUser();
  },
  data() {
    return {
      currentUser: { username: '', email: '', userInfo: '', image: '' },
      profile: '',
      imgList: [
        { id: 0, name: require('@/assets/img/profile/profile_sc_o.svg') },
        { id: 1, name: require('@/assets/img/profile/profile_sc_p.svg') },
        { id: 2, name: require('@/assets/img/profile/profile_sc_r.svg') },
        { id: 3, name: require('@/assets/img/profile/profile_sc_b.svg') },
        { id: 4, name: require('@/assets/img/profile/profile_sc_y.svg') },
        { id: 5, name: require('@/assets/img/profile/profile_sq_b.svg') },
        { id: 6, name: require('@/assets/img/profile/profile_sq_o.svg') },
        { id: 7, name: require('@/assets/img/profile/profile_sq_p.svg') },
        { id: 8, name: require('@/assets/img/profile/profile_sq_r.svg') },
        { id: 9, name: require('@/assets/img/profile/profile_sq_y.svg') },
        { id: 10, name: require('@/assets/img/profile/profile_tr_b.svg') },
        { id: 11, name: require('@/assets/img/profile/profile_tr_o.svg') },
        { id: 12, name: require('@/assets/img/profile/profile_tr_p.svg') },
        { id: 13, name: require('@/assets/img/profile/profile_tr_r.svg') },
        { id: 14, name: require('@/assets/img/profile/profile_tr_y.svg') },
      ],
    };
  },
  methods: {
    async getMyUser() {
      this.$store.commit('loginCheck');
      const response = await getUser(this.$store.state.auth.userId);
      console.log('현재 store 정보', this.$store.state.auth);
      for (let i = 0; i < response.data.content.length; i++) {
        if (response.data.content[i].userId == this.$store.state.auth.userId) {
          this.currentUser = {
            username: response.data.content[i].username,
            email: response.data.content[i].email,
            userInfo: response.data.content[i].userInfo,
            image: response.data.content[i].image,
          };
        }
      }
      // console.log('user정보:', this.currentUser);
      // this.profile += this.currentUser.image + '.svg';
      // this.$store.state.auth.image = this.profile;
      this.profile = this.$store.state.auth.image;
    },
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
