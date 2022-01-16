<template>
  <div class="main-container noselect">
    <div class="box--underline bottom-padding"><h1>스터디룸</h1></div>
    <div class="tabs-container">
      <base-tab
        firstTab="참여중인 스터디"
        secondTab="완료한 스터디"
        @firstTabClicked="fetchRoomList('PROGRESS')"
        @SecondTabClicked="fetchRoomList('COMPLETE')"
      ></base-tab>
    </div>
    <ul
      v-if="roomList && roomList.length > 0"
      class="card-column-list card-list-gap"
    >
      <li v-for="room in roomList" :key="room.studySeq">
        <base-card
          @click="showPostPage(room.studySeq)"
          :id="room.studySeq"
          :imgSrc="room.image"
          :title="room.title"
          :startDate="room.startDate"
          :endDate="room.endDate"
          :peopleRegisterCount="1"
          :peopleTotalCount="room.memberCount"
          :hashTags="room.hashTags"
        ></base-card>
      </li>
    </ul>
    <no-study-room v-else>{{
      selectedTab === 'PROGRESS'
        ? '참여중인 스터디가 없어요'
        : '완료한 스터디가 없어요'
    }}</no-study-room>
  </div>
  <the-footer></the-footer>
</template>

<script>
import { fetchPostsInStudyRoom } from '@/api/posts.js';
import { STUDY_TYPE } from '@/utils/constValue';
import NoStudyRoom from '@/components/views/studyroom/NoStudyRoom.vue';

export default {
  components: { NoStudyRoom },
  data() {
    return {
      roomList: [],
      selectedTab: STUDY_TYPE.PROGRESS,
    };
  },
  methods: {
    showPostPage(roomId) {
      this.$router.push({
        name: 'room',
        params: {
          roomId,
        },
      });
    },
    async fetchRoomList(studyType) {
      console.log('데이터 받아온다');
      const response = await fetchPostsInStudyRoom(
        this.$store.state.auth.userSeq,
        studyType,
      );
      this.roomList = response.data.content;
      this.selectedTab = studyType;
    },
  },
  created() {
    if (!this.$store.state.auth.isLogin) {
      this.$router.push({
        name: 'login',
      });
      return;
    }
    this.fetchRoomList(STUDY_TYPE.PROGRESS);
  },
};
</script>

<style scoped>
.tabs-container {
  margin: 9.2rem 0 2.4rem 0;
}

@media (max-width: 768px) {
  .tabs-container {
    margin-top: 4rem;
  }
}
</style>
