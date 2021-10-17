<template>
	<footer>
		<div class="main-container">
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
			<div class="footer__line"></div>
			<div class="footer__rights">© 2021 MOAMOA. All rights reserved.</div>
		</div>
	</footer>
</template>

<style scoped>
footer {
	background-color: var(--gray06);
	width: 100%;
	padding: 5.2rem 0 4.5rem 0;
}

.footer-container {
	display: flex;
	justify-content: space-between;
}

.footer__logo,
.footer__explain,
.footer__email,
.footer__nav {
	font-size: 1.6rem;
	font-family: Noto Sans KR;
}

.footer__context {
	display: flex;
	flex-direction: column;
	width: 27.5rem;
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
	color: var(--black);
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

.footer__line {
	width: 100%;
	border: 0.1rem solid var(--gray03);
	margin: 7rem 0 1.5rem 0;
}

.footer__rights {
	color: var(--gray04);
	font-size: 1.4rem;
	width: 100%;
	text-align: right;
}
</style>
