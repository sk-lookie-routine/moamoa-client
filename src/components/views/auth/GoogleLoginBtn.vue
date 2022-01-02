<template>
  <!-- <a
    href="http://moa-moa.kr:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000"
    class="google-login-btn"
  >
    <img src="@/assets/img/icon_google.svg" />
    <div class="google-login-btn-text">구글 아이디로 로그인</div>
  </a> -->
  <!-- <p>GOOGLE User INFO : {{ googleUser }}</p> -->
  <div class="login-buttons" @click="onClickGoogleLoginButton">
    <button id="my-signin2"></button>
    <div class="google-login-btn">
      <img src="@/assets/img/icon_google.svg" />
      <div class="google-login-btn-text">구글 아이디로 로그인</div>
    </div>
  </div>
  <!-- <button @click="signout" align="left">signout</button> -->
</template>

<script>
// import { UserDataPost } from '@/api/auth.js';
import { PROVIDER_TYPE } from '@/utils/constValue.js';
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

      const DataForLocal = {
        email: googleUser.getBasicProfile().getEmail(),
        username: googleUser.getBasicProfile().getName(),
        userId: googleUser.getBasicProfile().getId(),
        providerType: PROVIDER_TYPE.GOOGLE,
      };
      //store에 저장
      const myDBuser = await getUser(DataForLocal.userId);
      //get받아온 user정보
      this.$store.state.auth.userSeq = myDBuser.data.content[0].userSeq;
      console.log('userSeq값:', this.$store.state.auth.userSeq);
      if (myDBuser.data == null || myDBuser.data.content[0].image == null) {
        this.$router.push({
          name: 'signup-form',
        });
      } else {
        this.$store.commit('setUser', myDBuser.data.content[0]);
        console.log('구글로그인userData', myDBuser);
        this.$router.push({
          name: 'mypage',
        });
      }
      this.$store.commit('loginCheck');
    },
    onFailure(error) {
      console.log(error);
    },
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
  margin-right: 8.3rem;
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
.google-login-btn img {
  padding-left: 1.5rem;
}
@media (max-width: 320px) {
  .google-login-btn {
    margin-bottom: 15.1rem;
    width: 25.2rem;
    height: 4rem;
  }
  .google-login-btn-text {
    margin: 0 auto;
  }
  .google-login-btn img {
    padding-left: 1.2rem;
  }
}
</style>
