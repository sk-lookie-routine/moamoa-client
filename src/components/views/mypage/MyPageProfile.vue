<template>
  <div class="container" v-if="user">
    <div class="mypage-title">
      <div class="mypage-title-text">프로필</div>

      <div class="mypage-edit" @click="editProfile" v-if="handleEditButton">
        <img src="@/assets/img/icon_edit.svg" />편집
      </div>
    </div>
    <div class="box--underline"></div>
    <div class="profile-box">
      <div class="profile-image">
        <img :src="require(`@/assets/img/profile/${user.image}.svg`)" />
      </div>
      <div class="profile-nickname">{{ user.username }}</div>
      <div class="profile-email">{{ user.email }}</div>
      <div class="profile-desc">{{ user.userInfo }}</div>
      <div class="box--underline-under-email"></div>
      <div class="profile-study-info">
        <div class="profile-study-completed">
          완료한 스터디 : <span>{{ completedStudy }}</span
          >개
        </div>
        <div class="profile-study-participated">
          참여중인 스터디 : <span>{{ participatingStudy }}</span
          >개
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserByUserSeq } from '@/api/user.js';
import { fetchPostByUserSeq } from '@/api/post.js';
export default {
  data() {
    return {
      handleEditButton: true,
      participatingStudy: 0,
      completedStudy: 0,
      user: null,
      userSeq: null,
    };
  },
  methods: {
    editProfile() {
      this.$router.push({
        name: 'edit',
      });
    },
    async fetchData() {
      const userResponse = await getUserByUserSeq(this.userSeq);
      this.user = userResponse.data.content[0];
      //유저 정보

      const studyResponse = await fetchPostByUserSeq(this.userSeq);
      if (studyResponse.data == '') {
        //data 없으면 0개
        this.participatingStudy = 0;
        this.completedStudy = 0;
      } else {
        const contents = studyResponse.data.content;
        for (let i = 0; i < contents.length; i++) {
          if (contents[i].postType == 'READY') {
            this.participatingStudy += 1;
          } else if (contents[i].postType == 'COMPLETE') {
            this.completedStudy += 1;
          }
        }
      }

      if (this.userSeq == this.$store.state.auth.userSeq) {
        this.handleEditButton = true;
      } else {
        this.handleEditButton = false;
      }
    },
  },
  created() {
    this.userSeq = this.$route.params.userSeq;
    //라우팅 파라미터로 넘겨받은 userSeq 저장
    this.fetchData();
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 19.2rem;
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
  font-family: 'Noto Sans KR', sans-serif;
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
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: var(--gray01);
  margin-top: 1.5rem;
}
.profile-study-info span {
  color: var(--orange-dark);
}
.profile-study-completed {
  padding-right: 2rem;
}
@media (max-width: 768px) {
  .container {
    padding-top: 9.5rem;
    max-width: 34.3rem;
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
  .profile-box {
    padding-top: 4.1rem;
    padding-bottom: 5.4rem;
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
    font-size: 1.2rem;
  }
}
</style>
