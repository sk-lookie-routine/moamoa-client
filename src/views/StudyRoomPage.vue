<template>
	<div class="main-container">
		<div class="box-with-underline bottom-padding"><h1>스터디룸</h1></div>
		<div class="tabs-container">
			<base-tab firstTab="참여중인 스터디" secondTab="완료한 스터디"></base-tab>
		</div>
		<ul class="card-column-list card-list-gap">
			<li v-for="post in posts" :key="post.key">
				<base-card
					:title="post.title"
					:period="post.period"
					:peopleRegisterCount="post.peopleRegisterCount"
					:peopleTotalCount="post.peopleTotalCount"
					:tags="post.tags"
				></base-card>
			</li>
		</ul>
	</div>
	<the-footer></the-footer>
</template>

<script>
export default {
	data() {
		return {
			posts: [
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
			],
		};
	},
};
</script>

<style scoped>
.tabs-container {
	margin: 9.2rem 0 2.4rem 0;
}
</style>
