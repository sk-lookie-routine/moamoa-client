<template>
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
</template>

<script>
export default {
  props: {
    editProfile: Function,
  },
};
</script>

<style scoped>
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
.mypage-edit:hover {
  cursor: pointer;
  color: var(--gray01);
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
</style>
