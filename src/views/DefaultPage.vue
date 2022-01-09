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
import {
  getKakaoToken,
  getKakaoUserInfo,
} from '@/components/views/auth/login.js';
export default {
  created() {
    if (this.$route.query.code) {
      this.setKakaoToken();
    }
  },
  methods: {
    async setKakaoToken() {
      this.$store.state.auth.code = this.$route.query.code;
      console.log('카카오 인증 코드', this.$store.state.auth.code);

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
        username: res.kakao_account.profile.nickname,
        userId: res.id.toString(),
        providerType: PROVIDER_TYPE.KAKAO,
      };
      const myDBuser = await getUser(DataForLocal.userId);
      console.log('myDBuser(회원가입여부):', myDBuser);
      if (myDBuser.data == '' || myDBuser.data.content[0].image == '') {
        console.log('회원가입 기록이 없습니다.');
        this.$store.commit('setUser', DataForLocal);
        this.$router.push({
          name: 'signup-form',
        });
      } else {
        console.log(
          '회원가입 기록이 있습니다. 로그인정보:',
          myDBuser.data.content[0],
        );
        const storeData = myDBuser.data.content[0];
        this.$store.commit('setUser', storeData);
        console.log('kakao로그인 store정보', this.$store.state.auth);
        this.$router.push({
          name: 'home',
        });
      }
      this.$store.commit('login');
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
