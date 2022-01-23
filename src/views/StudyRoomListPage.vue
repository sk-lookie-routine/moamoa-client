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
          @click="showStudyPage(room.studySeq)"
          :id="room.studySeq"
          :imgSrc="room.image"
          :title="room.title"
          :startDate="room.startDate"
          :endDate="room.endDate"
          :hashTags="room.hashTags"
          :showCount="false"
        ></base-card>
      </li>
    </ul>
    <no-study-room v-else>{{
      selectedTab === 'PROGRESS'
        ? '참여중인 스터디가 없어요'
        : '완료한 스터디가 없어요'
    }}</no-study-room>
  </div>
  <div class="button-container">
    <base-pagination-button
      v-if="showMoreBtn && roomList && roomList.length > 0"
      @showMore="fetchRoomList(selectedType)"
    ></base-pagination-button>
  </div>
  <the-footer></the-footer>
</template>

<script>
import { fetchRoomsByTypeAndUserSeq } from '@/api/room.js';
import { STUDY_TYPE } from '@/utils/constValue';
import NoStudyRoom from '@/components/views/studyroom/NoStudyRoom.vue';

export default {
  components: { NoStudyRoom },
  data() {
    return {
      roomList: [],
      selectedTab: STUDY_TYPE.PROGRESS,
      pageNum: 0,
      showMoreBtn: true,
    };
  },
  methods: {
    showStudyPage(roomId) {
      this.$router.push({
        name: 'room',
        params: {
          roomId,
        },
      });
    },
    async fetchRoomList(studyType) {
      if (this.selectedType !== studyType) {
        this.roomList = [];
        this.pageNum = 0;
        this.selectedType = studyType;
      }

      const response = await fetchRoomsByTypeAndUserSeq(
        this.pageNum,
        studyType,
        this.$store.state.auth.userSeq,
      );

      const list =
        response.data.content == undefined ? [] : response.data.content;

      if (this.pageNum < response.data.totalPages) {
        list.map(item => this.roomList.push(item));
        ++this.pageNum < response.data.totalPages
          ? (this.showMoreBtn = true)
          : (this.showMoreBtn = false);
      } else {
        this.showMoreBtn = false;
      }
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

.button-container {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 768px) {
  .tabs-container {
    margin-top: 4rem;
  }
}
</style>
