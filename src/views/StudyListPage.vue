<template>
	<div class="main-container">
		<div class="box-with-underline bottom-padding"><h1>스터디 목록</h1></div>
		<div class="search-bar-container">
			<search-bar></search-bar>
		</div>
		<div class="tabs-and-btn-container">
			<base-tab
				firstTab="모집중인 스터디"
				secondTab="모집 완료된 스터디"
			></base-tab>
			<router-link to="/post-write">
				<button class="create-study-btn">개설하기</button>
			</router-link>
		</div>
		<ul class="card-list">
			<base-card></base-card>
			<base-card></base-card>
			<base-card></base-card>
		</ul>
	</div>
	<the-footer></the-footer>
</template>

<script>
import SearchBar from '@/components/views/studylist/SearchBar.vue';

export default {
	components: { SearchBar },
};
</script>

<style scoped>
.search-bar-container {
	margin: 9.8rem 0;
}

.tabs-and-btn-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2.4rem;
}

.create-study-btn {
	font-family: Noto Sans KR;
	font-weight: bold;
	font-size: 1.8rem;
	color: white;
	padding: 1rem 2rem;
	background-color: var(--orange-dark);
}
</style>
