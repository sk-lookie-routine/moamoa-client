<template>
	<h1>개발용 페이지(이후 렌딩페이지)</h1>
	<h2 class="box-with-underline">h2제목 테스트</h2>
	<h3>h3제목 테스트</h3>
	<base-tab></base-tab>
	<p class="box-with-background">
		p 태그 테스트<br />
		매주 금요일 13시~20시 진행 예정<br />
		줌으로 진행될 것 같고, 캠은 어쩌고 저쩌고
	</p>
	<span class="tag">스터디 뭐시기 태그</span>
	<p class="error-text">줌으로 진행될 것 같고, 캠은</p>
	<p class="study-goal-text">내 스터디 목표는 머시기다</p>
	<form action="submit">
		<div>
			<label for="date">모집 마감 일자:</label>
			<input type="date" name="date" />
		</div>
		<div>
			<label for="date">모집 인원:</label>
			<select name="count">
				<option value="1">1명</option>
				<option value="2">2명</option>
				<option value="3">3명</option>
				<option value="4">4명</option>
			</select>
		</div>
		<div>
			<label for="text">스터디 목표:</label>
			<input type="text" name="text" placeholder="한 줄로 소개하세요." />
		</div>
		<label for="text">스터디 소개:</label>
		<br />
		<textarea
			placeholder="가이드라인 머시기"
			name="text"
			rows="10"
			style="resize: none; width: 100%"
		></textarea>
		<div>
			<label for="url">스텅디 링크:</label>
			<input type="url" name="url" placeholder="여기는 url" />
		</div>
	</form>
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
</template>

<script>
export default {};
</script>

<style scoped>
div,
li {
	font-size: 2rem;
}
</style>
