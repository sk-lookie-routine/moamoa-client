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
export default {
	data() {
		return {
			isMenuClicked: false,
		};
	},
	methods: {
		menuToggled() {
			this.isMenuClicked = !this.isMenuClicked;
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

.icon-menu {
	display: none;
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
	.mypage-btn {
		color: var(--black);
		font-size: 1.5rem;
		font-weight: normal;
		font-family: Spoqa Han Sans Neo;
	}

	li,
	.auth-btn,
	.mypage-btn {
		padding: 1.9rem 2.4rem;
	}

	.header-btns-container {
		flex-direction: column;
		gap: 0rem;
		align-items: flex-start;
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
