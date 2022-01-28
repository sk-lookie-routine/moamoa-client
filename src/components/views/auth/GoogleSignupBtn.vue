<template>
  <div class="login-buttons" @click="onClickGoogleLoginButton">
    <button id="my-signin2"></button>
    <div class="google-login-btn">
      <img src="@/assets/img/icon_google.svg" />
      <div class="google-login-btn-text">구글 아이디로 가입</div>
    </div>
  </div>
</template>

<script>
import { getUser } from '@/api/user.js';
export default {
  data() {
    return {
      googleUser: null,
    };
  },
  methods: {
    onClickGoogleLoginButton() {
      window.gapi.signin2.render('my-signin2', {
        scope: 'profile email',
        width: 292,
        height: 44,
        longtitle: false,
        onsuccess: this.onSuccess,
        onfailure: this.onFailure,
      });
    },
    async onSuccess(googleUser) {
      this.googleUser = googleUser.getBasicProfile();
      this.$store.state.auth.providerType = 'GOOGLE';
      this.$store.state.auth.email = googleUser.getBasicProfile().getEmail();
      this.$store.state.auth.userId = googleUser.getBasicProfile().getId();

      const userResponse = await getUser(this.$store.state.auth.userId);
      if (userResponse.data == undefined) {
        this.$store.commit('login');
        // NO CONTENT
        this.$router.push({ name: 'signup-form' });
      } else if (userResponse.data.content[0].userType == 'NORMAL') {
        //이미 가입한 회원인 경우
        this.$store.commit('login');
        this.$store.commit('setUser', userResponse.data.content[0]);
        this.$router.push({
          name: 'home',
        });
      } else if (userResponse.data.content[0].userType == 'REJECT') {
        //탈퇴한 적이 있는 회원인 경우
        alert('한번 탈퇴한 회원은 다시 가입하실 수 없습니다.');
        const authInst = window.gapi.auth2.getAuthInstance();
        authInst.signOut();
        this.$store.commit('initUser');
        this.$store.commit('logout');
      }
    },
    onFailure() {},
  },
};
</script>

<style scoped>
#my-signin2 {
  position: absolute;
  opacity: 0;
}
a {
  text-decoration: none;
  color: black;
  margin: 0;
}
.google-login-btn-text {
  font-size: 1.2rem;
  margin-right: 8.9rem;
}
.google-login-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 29.2rem;
  height: 4.4rem;
  border: 1px solid black;
  border-radius: 1rem;
  margin-bottom: 9.5rem;
}
.google-login-btn:hover {
  cursor: pointer;
}
.google-login-btn img {
  padding-left: 1.5rem;
}
@media (max-width: 768px) {
  .google-login-btn {
    margin-bottom: 15.1rem;
    width: 25.2rem;
    height: 4rem;
  }
  .google-login-btn-text {
    margin: 0 auto;
    margin-right: 7.8rem;
  }
  .google-login-btn img {
    padding-left: 1.2rem;
  }
}
</style>
