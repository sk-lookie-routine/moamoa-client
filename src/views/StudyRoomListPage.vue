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
    <ul class="card-column-list card-list-gap">
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
  </div>
  <the-footer></the-footer>
</template>

<script>
import { fetchPostsByStudyType } from '@/api/posts.js';
import { STUDY_TYPE } from '@/utils/constValue';

export default {
  data() {
    return {
      roomList: null,
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
      const response = await fetchPostsByStudyType(studyType);
      this.roomList = response.data.content;
    },
  },
  created() {
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
