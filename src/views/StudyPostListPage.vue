<template>
  <div class="main-container noselect">
    <div class="box--underline bottom-padding"><h1>스터디 목록</h1></div>
    <div class="search-bar-container">
      <search-bar @searched="showSearchResult"></search-bar>
    </div>
    <div class="tabs-and-btn-container">
      <base-tab
        firstTab="모집중인 스터디"
        secondTab="모집 완료된 스터디"
        @firstTabClicked="showUnRecruitedPostList"
        @SecondTabClicked="showRecruitedPostList"
      ></base-tab>
      <router-link to="/post-write">
        <button class="create-study-btn">개설하기</button>
      </router-link>
    </div>
    <ul class="card-column-list card-list-gap">
      <li v-for="post in postList" :key="post.studySeq">
        <base-card
          @click="showPostPage(post.studySeq)"
          :id="post.studySeq"
          :imgSrc="post.image"
          :title="post.title"
          :startDate="post.startDate"
          :endDate="post.endDate"
          :peopleRegisterCount="1"
          :peopleTotalCount="post.memberCount"
          :hashTags="post.hashTags"
        ></base-card>
      </li>
    </ul>
    <create-study-jumbotron></create-study-jumbotron>
  </div>
  <the-footer></the-footer>
</template>

<script>
import SearchBar from '@/components/views/studypostlist/SearchBar.vue';
import CreateStudyJumbotron from '@/components/views/studypostlist/CreateStudyJumbotron.vue';
import {
  fetchPostsByStudyTypeList,
  fetchPostsByStudyType,
  fetchPostsByTitle,
} from '@/api/index.js';
import { STUDY_TYPE } from '@/utils/constValue';

export default {
  components: { SearchBar, CreateStudyJumbotron },
  data() {
    return {
      postList: null,
    };
  },
  methods: {
    showPostPage(postId) {
      this.$router.push({
        name: 'post',
        params: {
          postId,
        },
      });
    },
    async fetchDataByType(studyType) {
      const response = await fetchPostsByStudyType(studyType);
      this.postList = response.data.content;
    },
    async fetchDataByTypeList(studyTypeList) {
      const response = await fetchPostsByStudyTypeList(studyTypeList);
      this.postList = response.data.content;
    },
    async showSearchResult(value) {
      const response = await fetchPostsByTitle(value);
      this.postList = response.data.content;
    },
    showUnRecruitedPostList() {
      this.fetchDataByType(STUDY_TYPE.READY);
    },
    showRecruitedPostList() {
      this.fetchDataByTypeList(`${STUDY_TYPE.PROGRESS},${STUDY_TYPE.COMPLETE}`);
    },
  },
  created() {
    this.fetchDataByType(STUDY_TYPE.READY);
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
  .search-bar-container {
    margin: 4rem 0 5.7rem 0;
  }

  .tabs-and-btn-container {
    margin-bottom: 3rem;
  }

  .create-study-btn {
    display: none;
  }
}
</style>
