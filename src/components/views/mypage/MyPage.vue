<template>
  <div v-if="this.$store.state.auth.isLogin">
    <div class="default-container">
      <my-page-upper-profile-box></my-page-upper-profile-box>
      <base-tab
        class="base--tab"
        firstTab="신청한 스터디"
        secondTab="개설한 스터디"
        @firstTabClicked="applicatedStudyList"
        @SecondTabClicked="openStudyList"
      ></base-tab>
      <div v-if="studyList.length">
        <ul class="my-studyList">
          <base-card
            @click="applicatedStudyList"
            :id="1"
            :imgSrc="'profile_sc_p'"
            title="test"
            startDate="2021.11.05"
            endDate="2021.11.08"
            :peopleRegisterCount="1"
            :peopleTotalCount="2"
            hashTags="test"
          ></base-card>
        </ul>
      </div>
      <div class="nothing-apply" v-else>
        <div class="nothing-apply-text">
          {{ textOfEachTab }} 스터디가 없어요.
        </div>
        <a href="https://www.naver.com"
          >스터디 {{ textOfGuideLineOfEachTab }} 가이드라인</a
        >
      </div>
    </div>
    <the-footer></the-footer>
  </div>
  <auth-login-page v-else></auth-login-page>
</template>

<script>
import TheFooter from '@/components/common/TheFooter.vue';
import MyPageUpperProfileBox from './MyPageProfileBox.vue';
import AuthLoginPage from '@/views/AuthLoginPage.vue';
export default {
  components: { TheFooter, MyPageUpperProfileBox, AuthLoginPage },
  data() {
    return {
      studyList: [],
      index: 0,
      textOfEachTab: '신청한',
      textOfGuideLineOfEachTab: '신청',
    };
  },
  methods: {
    applicatedStudyList() {
      this.textOfEachTab = '신청한';
      this.textOfGuideLineOfEachTab = '신청';
    },
    openStudyList() {
      this.textOfEachTab = '개설한';
      this.textOfGuideLineOfEachTab = '개설';
    },
  },
};
</script>

<style scoped>
.default-container {
  padding-top: 19.2rem;
  width: 100%;
}
.base--tab {
  margin: 7rem 12rem;
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
  margin: 3rem 12rem;
}
@media (max-width: 351px) {
  .default-container {
    padding-top: 9.5rem;
  }

  .base--tab {
    margin-top: 5.8rem;
    margin-left: 1.6rem;
    width: max-content;
  }
}
</style>
