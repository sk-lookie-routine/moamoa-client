<template>
  <footer>
    <div class="footer-main-container">
      <div class="footer-container">
        <div class="footer__context">
          <div class="footer__logo">
            <router-link to="/home">
              <img class="logo-img" src="@/assets/img/logo.svg" />
              <div class="logo-text">MOAMOA</div>
            </router-link>
          </div>
          <div class="footer__explain">
            MOAMOA는 스터디의 개설부터 관리까지 체계적으로 도와주는 온라인
            스터디 매칭 플랫폼입니다.
          </div>
          <div class="footer__email">routine_2020@naver.com</div>
        </div>
        <div class="footer__nav">
          <div class="nav__container">
            <div class="nav__title">MOAMOA</div>
            <div class="nav__list">
              <li>모아모아 소개</li>
              <li>공지사항</li>
              <li>자주 묻는 질문</li>
              <li>건의/문의하기</li>
            </div>
          </div>
          <div class="nav__container">
            <div class="nav__title">커뮤니티</div>
            <div class="nav__list">
              <li>인스타그램</li>
              <li>블로그</li>
              <li>스터디 일지 모음</li>
            </div>
          </div>
          <div class="nav__container">
            <div class="nav__title">법적 고지</div>
            <div class="nav__list">
              <li>이용 약관</li>
              <li>개인정보 처리방침</li>
            </div>
          </div>
        </div>
      </div>
      <div class="box--underline"></div>
      <div class="footer__rights">© 2021 MOAMOA. All rights reserved.</div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--gray06);
  padding: 5.2rem 0 4.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  margin-top: 26rem;
}

.footer-main-container {
  max-width: 1440px;
  width: 96%;
  margin: 0 auto;
}

.footer-container {
  display: flex;
  justify-content: space-between;
}

.footer__logo,
.footer__email,
.footer__nav {
  font-size: 1.6rem;
  font-family: 'Noto Sans KR', sans-serif;
}
.footer__nav {
  margin-right: 22.4rem;
}
.footer__explain {
  font-size: 1.6rem;
  font-family: 'Noto Sans KR', sans-serif;
  width: 27.5rem;
}

.footer__context {
  display: flex;
  flex-direction: column;
  width: 30rem;
}

.footer__logo {
  margin-bottom: 2.1rem;
}

.footer__logo a {
  display: flex;
  align-items: center;
}

.logo-img {
  width: 4.2rem;
  height: 4.2rem;
  margin-right: 1rem;
}

.logo-text {
  font-family: Krona One;
  color: var(--gray01);
}

.footer__explain {
  line-height: 143%;
  color: var(--gray01);
  margin-bottom: 2.5rem;
}

.footer__email {
  color: var(--gray02);
}

.footer__nav {
  display: flex;
  gap: 7rem;
}

.nav__title {
  font-weight: bold;
  color: var(--gray01);
  margin-bottom: 3.3rem;
}

.nav__list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  color: var(--gray02);
}

.nav__list li {
  line-height: 143%;
}

.box--underline {
  /* width: 100%; */
  display: flex;
  color: var(--gray03);
  margin-top: 7rem;
  margin-bottom: 1.5rem;
}

.footer__rights {
  color: var(--gray04);
  font-size: 1.4rem;
  text-align: right;
  /* width: 100%; */
}

@media (max-width: 320px) {
  footer {
    margin-top: 17rem;
  }
  .footer-main-container {
    padding: 0 2.4rem;
  }
  .footer-container {
    width: 100%;
  }

  .footer-container,
  .footer__nav {
    flex-direction: column;
  }

  .footer__context {
    margin-bottom: 5.2rem;
    width: 100%;
  }

  .nav__title {
    margin-bottom: 2.6rem;
  }

  .footer__explain {
    font-size: 1.15rem;
    width: fit-content;
    height: 5.1rem;
    line-height: 2.4rem;
  }
  .footer__email,
  .footer__nav {
    font-size: 1.2rem;
  }
  .footer__nav {
    margin: 0;
  }
  .box--underline {
    margin: 7rem 0rem 1.5rem 0rem;
  }
  .footer__rights {
    font-size: 1.2rem;
  }
}
</style>
