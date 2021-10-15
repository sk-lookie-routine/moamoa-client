<template>
	개발용 페이지(이후 렌딩페이지)
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
</template>

<script>
export default {};
</script>

<style scoped>
* {
	font-size: 3rem;
}
</style>
