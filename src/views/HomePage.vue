<template>
  <main class="noselect">
    <the-banner></the-banner>
    <div class="main-container">
      <div class="tabs-and-btn-container">
        <div class="mid-title">모집중인 스터디</div>
        <router-link to="/posts">
          <button class="all-btn">전체보기</button></router-link
        >
      </div>
      <ul v-if="posts" class="card-grid-list card-list-gap">
        <li v-for="post in posts" :key="post.postSeq">
          <base-card
            @click="showPostPage(post.postSeq)"
            :id="post.postSeq"
            :imgSrc="post.image"
            :title="post.title"
            :startDate="post.startDate"
            :endDate="post.endDate"
            :peopleRegisterCount="1"
            :peopleTotalCount="post.memberCount"
            :hashTags="post.hashTags"
            :isSmall="true"
          ></base-card>
        </li>
      </ul>
      <study-guide-jumbotron></study-guide-jumbotron>
    </div>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheBanner from '@/components/views/home/TheBanner.vue';
import StudyGuideJumbotron from '@/components/views/home/StudyGuideJumbotron.vue';
import { fetchPostsByType } from '@/api/post.js';
import { POST_TYPE } from '@/utils/constValue';

export default {
  components: {
    TheBanner,
    StudyGuideJumbotron,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    sliceArray(array) {
      return array.length > 6 ? array.slice(0, 6) : array;
    },
    async fetchData() {
      const response = await fetchPostsByType(POST_TYPE.READY);
      this.posts = this.sliceArray(response.data.content);
    },
    showPostPage(postId) {
      this.$router.push({
        name: 'post',
        params: {
          postId,
        },
      });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.tabs-and-btn-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4.4rem 0rem;
}

.mid-title {
  font-size: 2rem;
  font-weight: bold;
}

.all-btn {
  font-family: Spoqa Han Sans Neo;
  color: var(--gray01);
  font-size: 1.6rem;
  font-size: 16px;
  background-color: transparent;
}

.card-grid-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 1024px) {
  .tabs-and-btn-container {
    margin: 3.6rem 0 3.6rem 0;
  }

  .mid-title {
    font-size: 1.6rem;
  }

  .all-btn {
    font-size: 1.2rem;
  }

  .card-grid-list {
    grid-template-columns: 1fr;
  }
}
</style>
