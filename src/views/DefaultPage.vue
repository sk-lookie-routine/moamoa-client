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
import { PROVIDER_TYPE } from '@/utils/constValue.js';
import { saveAccessTokenToCookie } from '@/utils/cookies.js';
import { getUser } from '@/api/user.js';
import { postUserData } from '@/api/auth.js';
import {
  getKakaoToken,
  getKakaoUserInfo,
} from '@/components/views/auth/login.js';
export default {
  created() {
    if (this.$route.query.code) {
      this.setKakaoToken();
    } else {
      this.$store.commit('logout');
      console.log(this.$store.state.auth.isLogin);
    }
  },
  methods: {
    async setKakaoToken() {
      const { data } = await getKakaoToken(this.$route.query.code);
      if (data.error) {
        alert('카카오톡 로그인 오류입니다.');
        this.$router.replace('/login');
        return;
      }
      await this.$store.commit('setToken', data); //store에 토큰저장
      saveAccessTokenToCookie(data.access_token); //cookie에 토큰저장
      window.Kakao.Auth.setAccessToken(data.access_token);
      await this.setUserInfo();
    },
    async setUserInfo() {
      const res = await getKakaoUserInfo();
      const DataForLocal = {
        email: res.kakao_account.email,
        userId: res.id.toString(),
        providerType: PROVIDER_TYPE.KAKAO,
      };

      let isWithDrawalUser = false; //탈퇴여부 체크
      const response = await getUser(DataForLocal.userId);
      if (response.data == '' || response.data.content[0].image == '') {
        await postUserData({
          userId: DataForLocal.userId,
          email: DataForLocal.email,
          providerType: PROVIDER_TYPE.KAKAO,
        }).catch(function (err) {
          if (err.toString().indexOf('422') != -1) {
            alert('탈퇴한 유저');
            isWithDrawalUser = true;
          }
        });
        //탈퇴한 유저인지 post요청 후 422에러 나면 홈으로 라우팅
        this.$store.commit('setUser', DataForLocal);
        const userResponse = await getUser(DataForLocal.userId);
        console.log('userResponse in DefaultPage', userResponse);
        //post보내서 들어가있는 userId로 userSeq조회한다.
        this.$store.state.auth.userSeq = userResponse.data.content[0].userSeq;
        this.$store.state.auth.providerType = PROVIDER_TYPE.KAKAO;
        //userSeq를 미리 store에 저장해둔다.

        if (isWithDrawalUser == true) {
          this.$router.push({
            name: 'home',
          });
          //홈으로 이동 및 로그아웃(연결 끊어서 새로운 계정으로 로그인하도록 함)
          window.Kakao.API.request({
            url: '/v1/user/unlink',
            success: function (response) {
              console.log(response);
            },
            fail: function (error) {
              console.log(error);
            },
          });
        } else {
          this.$store.commit('setUser', DataForLocal);
          console.log('default에서 저장된 store', this.$store.state.auth);
          this.$router.push({
            name: 'signup-form',
          });
          this.$store.commit('login');
        }
      } else if (!isWithDrawalUser) {
        const dataForStore = response.data.content[0];
        this.$store.commit('setUser', dataForStore);

        this.$router.push({
          name: 'home',
        });
        this.$store.commit('login');
      }
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
