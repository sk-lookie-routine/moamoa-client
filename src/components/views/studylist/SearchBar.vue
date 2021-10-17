<template>
	<h2>필요한 스터디를 빠르게 찾아보세요!</h2>
	<form action="submit">
		<label for="search"><img src="@/assets/img/icon_search.svg" /></label>
		<input type="text" name="search" placeholder="제목, 태그로 검색하세요." />
	</form>
</template>

<script>
export default {};
</script>

<style scoped>
form {
	border: 0.1rem solid var(--gray02);
	padding: 2rem 1.3rem;
	border-radius: 1rem;
}
</style>
