<template>
  <div class="login-buttons" @click="onClickGoogleLoginButton">
    <button id="my-signin2"></button>
    <div class="google-login-btn">
      <img src="@/assets/img/icon_google.svg" />
      <div class="google-login-btn-text">구글 아이디로 로그인</div>
    </div>
  </div>
</template>

<script>
import { PROVIDER_TYPE } from '@/utils/constValue.js';
import { getUser } from '@/api/user.js';
import { postUserData } from '@/api/auth.js';
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

      let isWithDrawalUser = false; //탈퇴여부 체크
      const response = await getUser(DataForLocal.userId);
      if (response.data == '' || response.data.content[0].image == '') {
        await postUserData({
          userId: DataForLocal.userId,
          email: DataForLocal.email,
          providerType: PROVIDER_TYPE.GOOGLE,
        }).catch(function (err) {
          if (err.toString().indexOf('422') != -1) {
            alert('탈퇴한 유저');
            isWithDrawalUser = true;
          }
        });
        //탈퇴한 유저인지 post요청 후 422에러 나면 홈으로 라우팅
        this.$store.commit('setUser', DataForLocal);
        //store저장
        const userResponse = await getUser(DataForLocal.userId);
        console.log('userResponse in DefaultPage', userResponse);
        //post보내서 들어가있는 userId로 userSeq조회한다.
        this.$store.state.auth.userSeq = userResponse.data.content[0].userSeq;
        this.$store.state.auth.providerType = PROVIDER_TYPE.GOOGLE;
        //userSeq를 미리 store에 저장해둔다.

        if (isWithDrawalUser == true) {
          //탈퇴유저라면
          this.$router.push({
            name: 'home',
          });
          //홈으로 이동 및 로그아웃(연결 끊어서 새로운 계정으로 로그인하도록 함)
          const authInst = window.gapi.auth2.getAuthInstance();
          authInst.signOut();
        } else {
          this.$store.commit('setUser', DataForLocal);
          this.$router.push({
            name: 'signup-form',
          });
          this.$store.commit('login');
        }
      } else {
        const dataForStore = response.data.content[0];
        this.$store.commit('setUser', dataForStore);

        this.$router.push({
          name: 'home',
        });
        this.$store.commit('login');
      }
    },
    onFailure(error) {
      console.log('123', error);
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
.google-login-btn:hover {
  cursor: pointer;
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
