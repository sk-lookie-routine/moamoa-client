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
        @firstTabClicked="fetchPostList('READY')"
        @SecondTabClicked="fetchPostList('COMPLETE')"
      ></base-tab>
      <button @click="createBtnClick" class="create-study-btn">개설하기</button>
    </div>
    <ul class="postlist card-column-list card-list-gap">
      <li v-for="post in postList" :key="post.postSeq">
        <base-card
          @click="showPostPage(post.postSeq)"
          :id="post.postSeq"
          :imgSrc="post.image"
          :title="post.title"
          :startDate="post.startDate"
          :endDate="post.endDate"
          :peopleRegisterCount="post.registerCount"
          :peopleTotalCount="post.memberCount"
          :hashTags="post.hashTags"
        ></base-card>
      </li>
    </ul>
    <div class="button-container">
      <base-pagination-button
        v-if="showMoreBtn && postList && postList.length > 0"
        @showMore="fetchPostList(selectedType)"
      ></base-pagination-button>
    </div>
    <no-result v-if="showNoResult">검색 결과가 없어요</no-result>
    <create-study-jumbotron v-if="!showNoResult"></create-study-jumbotron>
  </div>
  <the-footer></the-footer>
</template>

<script>
import SearchBar from '@/components/views/studypostlist/SearchBar.vue';
import NoResult from '@/components/views/studypostlist/NoResult.vue';
import CreateStudyJumbotron from '@/components/views/studypostlist/CreateStudyJumbotron.vue';
import { fetchPostsByKeywordAndType } from '@/api/post.js';
import { fetchJoinByPostSeq } from '@/api/join.js';
import { POST_TYPE, JOIN_TYPE } from '@/utils/constValue';

export default {
  components: { SearchBar, NoResult, CreateStudyJumbotron },
  data() {
    return {
      postList: [],
      pageNum: 0,
      showMoreBtn: true,
      selectedType: POST_TYPE.READY,
      searchKeyword: '',
      showNoResult: false,
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
    createBtnClick() {
      this.$router.push({
        name: 'post-write',
      });
    },
    async fetchPostList(postType) {
      this.showNoResult = false;
      if (this.selectedType !== postType) {
        this.postList = [];
        this.pageNum = 0;
        this.selectedType = postType;
      }

      const response = await fetchPostsByKeywordAndType(
        this.searchKeyword,
        this.pageNum,
        postType,
      );

      const list =
        response.data.content == undefined
          ? []
          : await Promise.all(
              response.data.content.map(async item => {
                const res = await fetchJoinByPostSeq(item.postSeq);
                let count = 0;
                if (!(res.status == 204 || res.data.content == undefined)) {
                  res.data.content.forEach(item => {
                    if (item.joinType === JOIN_TYPE.APPROVED) count++;
                  });
                }
                const post = {
                  ...item,
                  registerCount: count,
                };
                return post;
              }),
            );

      if (this.pageNum < response.data.totalPages) {
        list.map(item => this.postList.push(item));
        ++this.pageNum < response.data.totalPages
          ? (this.showMoreBtn = true)
          : (this.showMoreBtn = false);
      } else {
        this.showMoreBtn = false;
      }

      if (this.searchKeyword != '') {
        if (this.postList && this.postList.length > 0)
          this.showNoResult = false;
        else this.showNoResult = true;
      }
    },
    async showSearchResult(value) {
      this.searchKeyword = value;
      this.postList = [];
      this.pageNum = 0;
      await this.fetchPostList(this.selectedType);
    },
  },
  created() {
    this.fetchPostList(POST_TYPE.READY);
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

.postlist {
  margin-bottom: 3rem;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
