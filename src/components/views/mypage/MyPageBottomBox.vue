<template>
  <div v-if="this.$store.state.auth.isLogin">
    <div class="default-container">
      <my-page-profile></my-page-profile>
      <base-tab
        class="base--tab"
        firstTab="신청한 스터디"
        secondTab="개설한 스터디"
        @firstTabClicked="applicatedStudyList"
        @SecondTabClicked="openStudyList"
      ></base-tab>
      <div
        v-if="
          textOfEachTab == '신청한'
            ? applicatedStudy != null
            : openStudy != null
        "
      >
        <ul class="my-studyList">
          <li v-for="card in openStudy" :key="card.studySeq">
            <base-card
              @click="showPostPage(card.studySeq)"
              :id="card.studySeq"
              :imgSrc="card.image"
              :title="card.title"
              :startDate="card.startDate"
              :endDate="card.endDate"
              :peopleRegisterCount="1"
              :peopleTotalCount="card.memberCount"
              :hashTags="card.hashTags"
            ></base-card>
          </li>
        </ul>
      </div>
      <div class="nothing-apply" v-else>
        <div class="nothing-apply-text">
          {{ textOfEachTab }} 스터디가 없어요.
        </div>
        <a
          href="https://www.notion.so/bbc074266f8e4c8d97cf6b6a0f93474c?p=196f7e861d154e2eb50d92ac2fdae49b"
          v-if="this.textOfEachTab == '개설한'"
          >스터디 개설 가이드라인</a
        >
        <a
          href="https://www.notion.so/bbc074266f8e4c8d97cf6b6a0f93474c?p=d76f3437c77544858f9232dec22f3a12"
          v-if="this.textOfEachTab == '신청한'"
        >
          스터디 신청 가이드라인
        </a>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
  <auth-login-page v-else></auth-login-page>
</template>

<script>
import TheFooter from '@/components/common/TheFooter.vue';
import MyPageProfile from '@/components/views/mypage/MyPageProfile.vue';
import AuthLoginPage from '@/views/AuthLoginPage.vue';
import { getStudyForMyPage } from '@/api/posts.js';

export default {
  components: { TheFooter, MyPageProfile, AuthLoginPage },

  data() {
    return {
      applicatedStudy: null,
      openStudy: null,
      index: 0,
      textOfEachTab: '신청한',
    };
  },
  methods: {
    applicatedStudyList() {
      this.textOfEachTab = '신청한';
    },
    async openStudyList() {
      this.textOfEachTab = '개설한';
      const response = await getStudyForMyPage(this.$store.state.auth.userSeq);
      this.openStudy = response.data.content;
      console.log('studyList:', this.openStudy);
    },
    showPostPage(postId) {
      this.$router.push({
        name: 'post',
        params: {
          postId,
        },
      });
    },
  },
};
</script>

<style scoped>
.default-container {
  padding-top: 19.2rem;
}
.base--tab {
  margin: 7rem 5%;
}
.nothing-apply {
  padding-top: 11rem;
  text-align: center;
  margin-bottom: 26rem;
}
.nothing-apply-text {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: var(--gray01);
  margin-bottom: 2.4rem;
}
.nothing-apply a {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.7rem;
  text-decoration-line: underline;
  color: var(--gray00);
}
.my-studyList {
  margin: 0 12%;
}
.my-studyList li {
  margin-top: 3rem;
}
@media (max-width: 320px) {
  .default-container {
    padding-top: 9.5rem;
  }
  .nothing-apply {
    margin: 0 auto;
  }
  .nothing-apply-text {
    font-size: 1.2rem;
  }
  .nothing-apply a {
    font-size: 1rem;
  }
  .my-studyList {
    margin: 0 5%;
  }
  .my-studyList li {
    margin-top: 2rem;
  }
}
</style>
