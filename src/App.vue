<template>
	<the-header></the-header>
	<router-view></router-view>
</template>

<script>
export default {
	name: 'App',
	provide: {
		unrecruitedPosts: [
			{
				id: '1',
				title: '무슨무슨 스터디무슨무',
				period: '2021.12.03~2021.12.31',
				peopleRegisterCount: 4,
				peopleTotalCount: 5,
				tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
			},
			{
				id: '2',
				title: 'eeee 스터디무슨무',
				period: '2021.12.03~2021.12.31',
				peopleRegisterCount: 4,
				peopleTotalCount: 5,
				tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
			},
			{
				id: '3',
				title: 'eeee 스터디ewgrfgrf무슨무',
				period: '2021.12.03~2021.12.31',
				peopleRegisterCount: 4,
				peopleTotalCount: 5,
				tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
			},
		],
		recruitedPosts: [
			{
				id: '1',
				title: '무슨무슨 스터디무슨무',
				period: '2021.12.03~2021.12.31',
				peopleRegisterCount: 4,
				peopleTotalCount: 5,
				tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
			},
			{
				id: '2',
				title: 'eeee 스터디무슨무',
				period: '2021.12.03~2021.12.31',
				peopleRegisterCount: 4,
				peopleTotalCount: 5,
				tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
			},
			{
				id: '3',
				title: 'eeee 스터디ewgrfgrf무슨무',
				period: '2021.12.03~2021.12.31',
				peopleRegisterCount: 4,
				peopleTotalCount: 5,
				tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
			},
			{
				id: '2',
				title: 'eeee 스터디무슨무',
				period: '2021.12.03~2021.12.31',
				peopleRegisterCount: 4,
				peopleTotalCount: 5,
				tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
			},
			{
				id: '3',
				title: 'eeee 스터디ewgrfgrf무슨무',
				period: '2021.12.03~2021.12.31',
				peopleRegisterCount: 4,
				peopleTotalCount: 5,
				tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
			},
		],
		joiningStudyRooms: [
			{
				id: '1',
				title: '무슨무슨 스터디무슨무',
				period: '2021.12.03~2021.12.31',
				peopleRegisterCount: 4,
				peopleTotalCount: 5,
				tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
			},
			{
				id: '2',
				title: 'eeee 스터디무슨무',
				period: '2021.12.03~2021.12.31',
				peopleRegisterCount: 4,
				peopleTotalCount: 5,
				tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
			},
		],
	},
};
</script>

<style scoped></style>
