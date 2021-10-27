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
        id: '4',
        title: 'a모집 완료됨~',
        period: '2021.12.03~2021.12.31',
        peopleRegisterCount: 4,
        peopleTotalCount: 5,
        tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
      },
      {
        id: '5',
        title: 'eeee 스터디무슨무',
        period: '2021.12.03~2021.12.31',
        peopleRegisterCount: 4,
        peopleTotalCount: 5,
        tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
      },
      {
        id: '6',
        title: 'eeee 스터디ewgrfgrf무슨무',
        period: '2021.12.03~2021.12.31',
        peopleRegisterCount: 4,
        peopleTotalCount: 5,
        tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
      },
      {
        id: '7',
        title: 'eeee 스터디무슨무',
        period: '2021.12.03~2021.12.31',
        peopleRegisterCount: 4,
        peopleTotalCount: 5,
        tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
      },
      {
        id: '8',
        title: 'eeee 스터디ewgrfgrf무슨무',
        period: '2021.12.03~2021.12.31',
        peopleRegisterCount: 4,
        peopleTotalCount: 5,
        tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
      },
    ],
    joiningStudyRooms: [
      {
        id: '9',
        title: '무슨무슨 스터디무슨무',
        period: '2021.12.03~2021.12.31',
        peopleRegisterCount: 4,
        peopleTotalCount: 5,
        tags: ['만약에 태그가 길다면', '어쩌고 저쩌고', '어쩌고 저쩌고'],
      },
      {
        id: '10',
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
