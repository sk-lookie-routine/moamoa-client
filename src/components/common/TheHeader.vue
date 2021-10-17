<template>
	<header>
		<router-link to="/home">
			<div class="logo-container">
				<img class="logo-img" src="@/assets/img/logo.svg" />
				<span class="logo">MOAMOA</span>
			</div>
		</router-link>
		<nav>
			<ul>
				<li><router-link to="/home">홈</router-link></li>
				<li><router-link to="/posts">스터디목록</router-link></li>
				<li><router-link to="/rooms">스터디룸</router-link></li>
				<li><router-link to="/notice">공지사항</router-link></li>
			</ul>
		</nav>
		<div class="header-btns-container">
			<button class="auth-btn">로그인</button>
			<button class="mypage-btn">마이페이지</button>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
	position: fixed;
	top: 0;
	width: 100%;
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
	font-family: Noto Sans KR;
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
}

.auth-btn {
	color: #888888;
}

.mypage-btn {
	color: white;
	background-color: var(--orange);
	padding: 0.8rem 1.9rem;
}
</style>
