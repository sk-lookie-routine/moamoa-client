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
  <div class="divider"></div>
</template>

<script>
import { getUserByUserSeq } from '@/api/user.js';
import { getCompletedStudy } from '@/api/posts.js';
import { fetchOnlyApprovedJoinByUserSeq } from '@/api/join.js';
export default {
  data() {
    return {
      handleEditButton: true,
      participatingStudy: null,
      user: null,
      userSeq: null,
      completedStudy: null,
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
      console.log(this.user);
      //유저 정보 저장
      const joinResponse = await fetchOnlyApprovedJoinByUserSeq(
        this.$store.state.auth.userSeq,
      );
      if (joinResponse.data == '') {
        this.participatingStudy = 0;
      } else {
        this.participatingStudy = joinResponse.data.content.length;
      }
      //조인 정보 저장
      const studyResponse = await getCompletedStudy(
        this.$store.state.auth.userSeq,
      );
      if (studyResponse.data == '') {
        this.completedStudy = 0;
      } else {
        this.completedStudy = studyResponse.data.content[0];
        console.log('스터디', this.completedStudy);
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
  margin: 0 5%;
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
  .profile-box {
    padding-top: 4.1rem;
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
