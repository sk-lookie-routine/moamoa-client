<template>
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
      <div class="nothing-apply-text">신청한 스터디가 없어요.</div>
      <a href="https://www.naver.com">스터디 가이드라인</a>
    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from '@/components/common/TheFooter.vue';
import MyPageUpperProfileBox from './MyPage_upperProfileBox.vue';
export default {
  components: { TheFooter, MyPageUpperProfileBox },
  data() {
    return {
      studyList: ['ㅁ'],
      index: 0,
    };
  },
  methods: {
    applicatedStudyList() {},
    openStudyList() {},
  },
};
</script>

<style scoped>
.default-container {
  padding-top: 19.2rem;
}
.base--tab {
  margin: 7rem 12rem 1rem 12rem;
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
@media (max-width: 320px) {
  .default-container {
    width: max-content;
  }
}
</style>
