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
		<ul class="card-column-list card-list-gap">
			<li v-for="post in unrecruitedPosts" :key="post.key">
				<base-card
					:title="post.title"
					:period="post.period"
					:peopleRegisterCount="post.peopleRegisterCount"
					:peopleTotalCount="post.peopleTotalCount"
					:tags="post.tags"
				></base-card>
			</li>
		</ul>
		<create-study-jumbotron></create-study-jumbotron>
	</div>
	<the-footer></the-footer>
</template>

<script>
import SearchBar from '@/components/views/studylist/SearchBar.vue';
import CreateStudyJumbotron from '@/components/views/studylist/CreateStudyJumbotron.vue';

export default {
	components: { SearchBar, CreateStudyJumbotron },
	data() {
		return {
			unrecruitedPosts: [
				{
					key: '1',
					title: '무슨무슨 스터디무슨무',
					period: '2021.12.03~2021.12.31',
					peopleRegisterCount: 4,
					peopleTotalCount: 5,
					tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
				},
				{
					key: '2',
					title: 'eeee 스터디무슨무',
					period: '2021.12.03~2021.12.31',
					peopleRegisterCount: 4,
					peopleTotalCount: 5,
					tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
				},
				{
					key: '3',
					title: 'eeee 스터디ewgrfgrf무슨무',
					period: '2021.12.03~2021.12.31',
					peopleRegisterCount: 4,
					peopleTotalCount: 5,
					tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
				},
			],
			recruitedPosts: [
				{
					key: '1',
					title: '무슨무슨 스터디무슨무',
					period: '2021.12.03~2021.12.31',
					peopleRegisterCount: 4,
					peopleTotalCount: 5,
					tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
				},
				{
					key: '2',
					title: 'eeee 스터디무슨무',
					period: '2021.12.03~2021.12.31',
					peopleRegisterCount: 4,
					peopleTotalCount: 5,
					tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
				},
				{
					key: '3',
					title: 'eeee 스터디ewgrfgrf무슨무',
					period: '2021.12.03~2021.12.31',
					peopleRegisterCount: 4,
					peopleTotalCount: 5,
					tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
				},
				{
					key: '2',
					title: 'eeee 스터디무슨무',
					period: '2021.12.03~2021.12.31',
					peopleRegisterCount: 4,
					peopleTotalCount: 5,
					tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
				},
				{
					key: '3',
					title: 'eeee 스터디ewgrfgrf무슨무',
					period: '2021.12.03~2021.12.31',
					peopleRegisterCount: 4,
					peopleTotalCount: 5,
					tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
				},
			],
		};
	},
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

@media (max-width: 768px) {
	.create-study-btn {
		display: none;
	}
}
</style>
