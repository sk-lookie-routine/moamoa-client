<template>
  <div class="container">
    <div class="title">
      <p>계정 관리</p>
      <div class="box--underline"></div>
    </div>
    <div class="manage-box">
      <div class="account-email">
        <p>{{ this.$store.state.auth.email }}</p>
        <div class="box--underline"></div>
      </div>
      <div class="account-policy">
        <p>개인정보 처리방침</p>
        <div class="box--underline"></div>
      </div>
      <div class="account-conditions">
        <p>이용약관</p>
        <div class="box--underline"></div>
      </div>
      <div class="logout" @click="logout">
        <p>로그아웃</p>
        <div class="box--underline"></div>
      </div>
      <div
        class="withdrawal"
        @click="this.$store.state.account.withdrawal = true"
      >
        <p>회원 탈퇴</p>
        <div class="box--underline"></div>
      </div>
    </div>
  </div>
  <with-drawal-modal
    v-if="this.$store.state.account.withdrawal"
  ></with-drawal-modal>
</template>

<script>
import WithDrawalModal from '@/components/views/mypage/WithDrawalModal.vue';
export default {
  components: { WithDrawalModal },
  methods: {
    logout() {
      this.$store.commit('logout');
      alert('로그아웃했습니다.');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.container {
  margin: 12.2rem 5% 0 5%;
}
.box--underline {
  margin-top: 1rem;
}
.title p {
  font-size: 2.2rem;
  color: var(--black);
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
}
.manage-box {
  margin-top: 6.8rem;
}
.manage-box p:not(.account-email):hover {
  cursor: pointer;
}
.account-email p,
.account-policy p,
.account-conditions p,
.logout p,
.withdrawal p {
  font-size: 1.8rem;
  color: var(--black);
  margin-top: 4.8rem;
}
.withdrawal p {
  color: var(--gray02);
}
@media (max-width: 320px) {
  .container {
    margin: 9.5rem 1.6rem 0 1.6rem;
  }
  .title p {
    font-size: 2rem;
  }
  .manage-box {
    margin-top: 4.4rem;
  }
  .account-email p,
  .account-policy p,
  .account-conditions p,
  .logout p,
  .withdrawal p {
    font-size: 1.4rem;
    margin-top: 3rem;
  }
}
</style>
