<template>
  <h1>이 페이지는 개발용 페이지입니다. 이후 랜딩 페이지가 될 수도 있습니다.</h1>
  <li>
    <router-link to="/home">홈페이지 이동</router-link>
  </li>
  <li>
    <router-link to="/login">로그인페이지 이동</router-link>
  </li>
  <li>
    <router-link to="/signup">회원가입페이지 이동</router-link>
  </li>
  <li>
    <router-link to="/signup-form">회원가입 form 페이지 이동</router-link>
  </li>
  <li>
    <router-link to="/posts">스터디 목록 이동</router-link>
  </li>
  <li>
    <router-link to="/rooms">스터디 룸 이동</router-link>
  </li>
  <li>
    <router-link to="/notice">공지사항 이동</router-link>
  </li>
  <li>
    <router-link to="/mypage">마이페이지 이동</router-link>
  </li>
</template>

<script>
export default {
  created() {
    const tokenData = this.$router.currentRoute.value.href;
    var spliceToken = tokenData.substr(8, tokenData.length);
    this.$store.commit('login', { token: spliceToken });
    console.log('--');
    console.log(this.$store.state.auth.token);
    console.log('--');
    this.loginCheck();
  },
  methods: {
    loginCheck() {
      this.$store.commit('loginCheck');
    },
  },
};
</script>

<style scoped>
div,
li {
  font-size: 2rem;
}
</style>
