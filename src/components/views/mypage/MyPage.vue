<template>
  <div class="container">
    <div class="mypage-title">
      <div class="mypage-title-text">프로필</div>
      <div class="mypage-edit">
        <img src="@/assets/img/icon_edit.svg" />편집
      </div>
    </div>
    <div class="box--underline"></div>
    <div class="profile-box">
      <div class="profile-image">
        <img src="@/assets/img/profile/profile_sc_b.svg" />
      </div>
      <div class="profile-nickname">cococo</div>
      <div class="profile-email">routine@gmail.com</div>
      <div class="profile-desc">스터디 100개 뿌시는게 목표</div>
      <div class="profile-study-info">
        <div class="profile-study-completed">
          완료한 스터디 : <span>2</span>개
        </div>
        <div class="profile-study-participated">
          참여중인 스터디 : <span>2</span>개
        </div>
      </div>
    </div>
    <div class="divider"></div>

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
export default {
  components: { TheFooter },
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
.container {
  padding-top: 19.2rem;
}
.mypage-title {
  display: flex;
  justify-content: space-between;
  margin: 0 12rem;
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
.mypage-edit img {
  margin-right: 0.4rem;
}
.box--underline {
  margin: 1rem 12rem 0 12rem;
}
.profile-box {
  font-family: Spoqa Han Sans Neo;
  padding-top: 8rem;
  padding-bottom: 13.8rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: max-content;
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
  font-family: Spoqa Han Sans Neo;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: var(--gray01);
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
  .container {
    width: max-content;
  }
}
</style>
