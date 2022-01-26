<template>
  <header :class="{ 'menu--clicked': isMenuClicked }">
    <div class="logo-container">
      <router-link to="/home">
        <img class="logo-img" src="@/assets/img/logo.svg" />
      </router-link>
      <router-link to="/home">
        <span class="logo">MOAMOA</span>
      </router-link>
      <img
        @click="menuToggled"
        class="icon-menu"
        src="@/assets/img/icon_menu.svg"
      />
    </div>
    <nav>
      <ul>
        <li v-for="(link, index) in links" @click="menuToggled" :key="index">
          <router-link :to="link.linkTo">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="header-btns-container">
      <div v-if="!this.$store.state.auth.isLogin">
        <button class="auth-btn" @click="menuToggled">
          <router-link to="/login">로그인</router-link>
        </button>
        <button class="signup-link" @click="menuToggled">
          <router-link to="/signup">회원가입</router-link>
        </button>
      </div>
      <div v-else>
        <button class="auth-btn" @click="menuToggled">
          <router-link to="/home" @click="signout"> 로그아웃 </router-link>
        </button>
        <button class="signup-link" @click="menuToggled">
          <a @click="showUserPage(this.$store.state.auth.userSeq)"
            >마이페이지</a
          >
        </button>
      </div>

      <button class="mypage-btn" @click="menuToggled">
        <a
          @click="showUserPage(this.$store.state.auth.userSeq)"
          v-if="this.$store.state.auth.isLogin"
          >마이페이지</a
        >
        <a
          @click="this.$router.push({ name: 'signup' })"
          v-if="!this.$store.state.auth.isLogin"
          >회원가입</a
        >
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: '홈', linkTo: '/home' },
        { name: '스터디목록', linkTo: '/post' },
        { name: '스터디룸', linkTo: '/room' },
      ],
      isMenuClicked: false,
    };
  },
  methods: {
    showUserPage(userSeq) {
      if (userSeq == '') {
        this.$router.push({
          name: 'login',
        });
      } else {
        this.$router.push({
          name: 'mypage',
          params: {
            userSeq,
          },
        });
      }
    },
    menuToggled() {
      this.isMenuClicked = !this.isMenuClicked;
    },
    signout() {
      if (this.$store.state.auth.providerType == 'GOOGLE') {
        const authInst = window.gapi.auth2.getAuthInstance();
        authInst.signOut();
      } else if (this.$store.state.auth.providerType == 'KAKAO') {
        window.Kakao.API.request({
          url: '/v1/user/unlink',
        });
      }
      this.$store.commit('initUser');
      this.$store.commit('logout');
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 4rem;
  background-color: white;
  box-shadow: 0 0.4rem 0.8rem rgba(236, 236, 236, 0.25);
  z-index: 1;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-container a {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.logo-img {
  margin-right: 1rem;
}

.logo {
  font-family: Krona One;
  font-size: 1.6rem;
  color: var(--black);
}

nav,
.header-btns-container {
  font-family: 'Noto Sans KR';
}

ul {
  display: flex;
  gap: 6rem;
}

li a {
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--gray03);
}

li a:hover {
  color: var(--gray02);
}

.router-link-active {
  color: var(--orange-dark);
}

.header-btns-container {
  display: flex;
  gap: 2.4rem;
}

button {
  font-size: 1.8rem;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
}
.auth-btn {
  height: 4rem;
}

.auth-btn a,
.signup-link a {
  color: var(--black);
}
.auth-btn a:hover,
.signup-link a:hover {
  color: var(--gray02);
}
.signup-link {
  display: none;
}
.mypage-btn {
  padding: 0.8rem 1.9rem;
  background-color: var(--orange);
}
.mypage-btn a {
  color: white;
}
.mypage-btn a:hover {
  color: rgba(255, 255, 255, 0.808);
}

.icon-menu {
  display: none;
  cursor: pointer;
}

@media (max-width: 1024px) {
  header {
    padding: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 5.2rem;
    overflow: hidden;
  }

  .logo-img {
    width: 2.8rem;
    height: 2.8rem;
  }

  .icon-menu {
    display: block;
    width: 1.8rem;
    height: 1.2rem;
  }

  .logo-container {
    width: 100%;
    padding: 1.2rem 3rem;
    justify-content: space-between;
    box-shadow: 0px 0.4rem 0.8rem rgba(236, 236, 236, 0.25);
  }

  ul {
    flex-direction: column;
    gap: 0rem;
  }

  li a,
  .auth-btn,
  .mypage-btn,
  .signup-link {
    display: block;
    color: var(--black);
    font-size: 1.5rem;
    font-weight: normal;
    font-family: Spoqa Han Sans Neo;
  }
  li,
  .auth-btn,
  .mypage-btn,
  .signup-link {
    padding: 1.9rem 2.4rem;
  }

  .header-btns-container {
    flex-direction: column;
    gap: 0rem;
    align-items: flex-start;
  }
  .auth-btn {
    height: auto;
  }
  .mypage-btn {
    background-color: transparent;
  }
  .menu--clicked {
    height: 100%;
  }
}
@media (max-width: 768px) {
  .logo-container {
    padding: 1.2rem 1.6rem;
  }
}
</style>
