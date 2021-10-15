<template>
	<footer>
		<div class="container">
			<div class="left">
				<div class="left_top">
					<router-link to="/"><img src="@/assets/img/logo.svg" /></router-link>
					<router-link to="/" class="link">
						<div class="left_top_text">MOAMOA</div></router-link
					>
				</div>
				<div class="left_main">
					MOAMOA는 스터디의 개설부터 관리까지 체계적으로 도와주는 온라인 스터디
					매칭 플랫폼입니다.
				</div>
				<div class="left_email">routine_2020@naver.com</div>
			</div>
			<div class="right">
				<div class="right_1">
					<router-link to="/" class="link"
						><div class="right_1_title">MOAMOA</div></router-link
					>
					<div class="right_1_list">
						<li>모아모아 소개</li>
						<li>공지사항</li>
						<li>자주 묻는 질문</li>
						<li>건의/문의하기</li>
					</div>
				</div>
				<div class="right_2">
					<div class="right_2_title">커뮤니티</div>
					<div class="right_2_list">
						<li>인스타그램</li>
						<li>블로그</li>
						<li>스터디 일지 모음</li>
					</div>
				</div>
				<div class="right_3">
					<div class="right_3_title">법적 고지</div>
					<div class="right_3_list">
						<li>이용 약관</li>
						<li>개인정보 처리방침</li>
					</div>
				</div>
			</div>
		</div>
		<div class="footer_decoration"></div>
		<div class="rights">© 2021 MOAMOA. All rights reserved.</div>
	</footer>
</template>

<style scoped>
footer {
	height: 38.3rem;
}
.container {
	display: flex;
	justify-content: space-between;
}
.link {
	text-decoration: none;
	display: flex;
}
.left {
	width: 70rem;
}
.left_top {
	display: flex;
}
.left_top_text {
	display: flex;
	align-items: center;
	font-family: 'Krona One', sans-serif;
	color: #757575;
	padding: 0 1rem;
	font-size: 1.6rem;
	line-height: 2rem;
}
.left_main {
	margin-top: 2.1rem;
	font-family: noto-sans-cjk-kr, sans-serif;
	font-size: 1.6rem;
	line-height: 2.3rem;
	color: #757575;
	width: 30rem;
	height: 7rem;
}
.left_email {
	margin-top: 2.5rem;
	font-family: noto-sans-cjk-kr, sans-serif;
	font-size: 1.6rem;
	line-height: 2.3rem;
	color: #a1a1a1;
}
.right {
	display: flex;
	width: 70rem;
	justify-content: space-evenly;
}
.right_1_title,
.right_2_title,
.right_3_title {
	font-family: noto-sans-cjk-kr, sans-serif;
	font-weight: bold;
	font-size: 1.6rem;
	line-height: 2.3rem;
	color: #757575;
	margin-bottom: 3.3rem;
}
.right_1_list,
.right_2_list,
.right_3_list {
	font-family: noto-sans-cjk-kr, sans-serif;
	font-size: 1.6rem;
	line-height: 2.3rem;
	color: #a1a1a1;
	list-style: none;
}
li {
	margin-bottom: 0.7rem;
}
.footer_decoration {
	margin-top: 7rem;
	border: 0.01rem solid #bebebe;
	background: #bebebe;
}
.rights {
	margin-top: 1.5rem;
	font-family: noto-sans-cjk-kr, sans-serif;
	font-weight: bold;
	font-size: 1.4rem;
	line-height: 2rem;
	color: #d8d8d8;
	float: right;
}
@media (max-width: 500px) {
	footer {
		height: 90rem;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}
	.container {
		display: flex;
		flex-direction: column;
	}
	.right_1_title,
	.right_2_title,
	.right_3_title {
		margin-top: 3.6rem;
	}
	.right {
		display: flex;
		flex-direction: column;
	}
	.footer_decoration {
		/* margin:0 auto; */
		width: 32.7rem;
	}
	.rights {
		margin-bottom: 5.2rem;
	}
}
</style>
