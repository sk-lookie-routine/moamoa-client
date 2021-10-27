<template>
  <div class="main-container">
    <div class="box--underline bottom-padding"><h1>스터디 목록</h1></div>
    <div class="search-bar-container">
      <search-bar></search-bar>
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
      <li v-for="post in postList" :key="post.id">
        <base-card
          @click="showPostPage(post.id)"
          :id="post.id"
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
import SearchBar from '@/components/views/studypostlist/SearchBar.vue';
import CreateStudyJumbotron from '@/components/views/studypostlist/CreateStudyJumbotron.vue';

export default {
  components: { SearchBar, CreateStudyJumbotron },
  inject: ['unrecruitedPosts', 'recruitedPosts'],
  data() {
    return {
      postList: this.unrecruitedPosts,
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
    showUnRecruitedPostList() {
      this.postList = this.unrecruitedPosts;
    },
    showRecruitedPostList() {
      this.postList = this.recruitedPosts;
    },
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
