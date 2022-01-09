<template>
  <div class="study-mate">
    <div class="userinfo">
      <img
        src="@/assets/img/profile/profile_tr_p.svg"
        alt=""
        class="profile-img"
      />
      <div class="nickname">스터디원 2</div>
    </div>
    <div class="more-btn">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="menu">
      <div class="menu-item">프로필 보기</div>
      <div class="menu-item">스터디 탈퇴</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.study-mate {
  display: flex;
  align-items: center;
  padding: 1.4rem 0;
  border-bottom: 0.05rem solid #dedede;
}

.profile-img {
  width: 4.4rem;
  height: 4.4rem;
  margin-right: 1rem;
}

.nickname {
  font-weight: bold;
  font-size: 1.4rem;
}

.study-leader {
  color: var(--orange);
}
</style>
