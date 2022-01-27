<template>
  <div v-if="this.$store.state.auth.isLogin">
    <div class="default-container">
      <div class="bottom-box" v-if="showBottomBox">
        <base-tab
          class="base--tab"
          firstTab="신청한 스터디"
          secondTab="개설한 스터디"
          @firstTabClicked="applicatedStudyList"
          @SecondTabClicked="openStudyList"
        ></base-tab>
        <div
          v-if="
            textOfEachTab == '신청한'
              ? applicatedStudy != null
              : openStudy != null
          "
        >
          <ul class="my-studyList" v-if="textOfEachTab == '신청한'">
            <li v-for="post in applicatedStudy" :key="post.card.postSeq">
              <base-card
                @click="showPostPage(post.card.postSeq)"
                :id="post.card.postSeq"
                :imgSrc="post.card.image"
                :title="post.card.title"
                :startDate="post.card.startDate"
                :endDate="post.card.endDate"
                :peopleRegisterCount="post.registerCount"
                :peopleTotalCount="post.card.memberCount"
                :hashTags="post.card.hashTags"
                :joinType="post.joinType"
              ></base-card>
            </li>
          </ul>
          <div class="button-container">
            <base-pagination-button
              v-if="showMoreBtn_app && textOfEachTab == '신청한'"
              @showMore="applicatedStudyList"
            ></base-pagination-button>
          </div>
          <ul class="my-studyList" v-if="textOfEachTab == '개설한'">
            <li v-for="post in openStudy" :key="post.card.postSeq">
              <base-card
                @click="showPostPage(post.card.postSeq)"
                :id="post.card.postSeq"
                :imgSrc="post.card.image"
                :title="post.card.title"
                :startDate="post.card.startDate"
                :endDate="post.card.endDate"
                :peopleRegisterCount="post.registerCount"
                :peopleTotalCount="post.card.memberCount"
                :hashTags="post.card.hashTags"
              >
              </base-card>
            </li>
          </ul>
          <div class="button-container">
            <base-pagination-button
              v-if="showMoreBtn && textOfEachTab == '개설한'"
              @showMore="openStudyList"
            ></base-pagination-button>
          </div>
        </div>
        <div class="nothing-apply" v-else>
          <div class="nothing-apply-text">
            {{ textOfEachTab }} 스터디가 없어요.
          </div>
          <a
            href="https://www.notion.so/bbc074266f8e4c8d97cf6b6a0f93474c?p=196f7e861d154e2eb50d92ac2fdae49b"
            v-if="this.textOfEachTab == '개설한'"
            >스터디 개설 가이드라인</a
          >
          <a
            href="https://www.notion.so/bbc074266f8e4c8d97cf6b6a0f93474c?p=d76f3437c77544858f9232dec22f3a12"
            v-if="this.textOfEachTab == '신청한'"
          >
            스터디 신청 가이드라인
          </a>
        </div>
      </div>
    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from '@/components/common/TheFooter.vue';
import { fetchPostByUserSeq, fetchPostByPostSeq } from '@/api/post.js';
import { fetchJoinByUserSeq, fetchJoinByPostSeq } from '@/api/join.js';

export default {
  components: { TheFooter },
  created() {
    this.userSeq = this.$route.params.userSeq;
    //라우팅 파라미터로 넘겨받은 userSeq 저장

    if (this.userSeq == this.$store.state.auth.userSeq) {
      this.showBottomBox = true;
    } else {
      this.showBottomBox = false;
    }
    this.applicatedStudyList();
  },
  data() {
    return {
      applicatedStudy: [],
      openStudy: [],
      index: 0, //to handle post list(for openStudy)
      showMoreBtn: true, //to handle post list(for openStudy)
      index_app: 0,
      showMoreBtn_app: true,
      textOfEachTab: '신청한',
      userSeq: null,
      showBottomBox: null,
    };
  },
  methods: {
    async applicatedStudyList() {
      this.textOfEachTab = '신청한';
      // api/post에 userSeq로 접근
      const res = await fetchJoinByUserSeq(this.$store.state.auth.userSeq);
      if (res.data != '') {
        const size = res.data.totalElements;
        while (this.index_app < size) {
          //다 보여줬으면 변수 토글
          if (this.index_app == size - 1) {
            this.showMoreBtn_app = false;
          }
          let postSeq = res.data.content[this.index_app].postSeq;
          let applicatedPost = await fetchPostByPostSeq(postSeq);
          let registerAccount = await fetchJoinByPostSeq(postSeq);
          let count = 0;
          if (registerAccount.data != '') {
            for (let i = 0; i < registerAccount.data.content.length; i++) {
              if (registerAccount.data.content[i].joinType == 'APPROVED') {
                count++;
              }
            }
          } else {
            //신청한 스터디가 없는경우
            this.applicatedStudy = null;
            return;
          }

          this.applicatedStudy.push({
            card: applicatedPost.data.content[0],
            joinType: res.data.content[this.index_app].joinType,
            registerCount: count,
          });
          //4개씩 나눠서 배열에 삽입
          if (this.index_app % 4 == 3 && this.index_app != 0) {
            this.index_app++;
            break;
          }
          this.index_app++;
        }
      } else {
        this.applicatedStudy = null;
      }
    },
    async openStudyList() {
      this.textOfEachTab = '개설한';
      const response = await fetchPostByUserSeq(this.$store.state.auth.userSeq);
      // this.openStudy = response.data.content;

      const size = response.data.totalElements;
      if (response.data != '') {
        while (this.index < size) {
          if (this.index == size - 1) {
            this.showMoreBtn = false;
          }
          let postSeq = response.data.content[this.index].postSeq;
          let registerAccount = await fetchJoinByPostSeq(postSeq);
          let count = 0;
          if (registerAccount.data != '') {
            for (let i = 0; i < registerAccount.data.content.length; i++) {
              if (registerAccount.data.content[i].joinType == 'APPROVED') {
                count++;
              }
            }
          } else {
            this.openStudy = null;
            return;
          }
          this.openStudy.push({
            card: response.data.content[this.index],
            registerCount: count,
          });
          if (this.index % 4 == 3 && this.index != 0) {
            this.index++;
            break;
          }
          this.index++;
        }
      } else {
        this.openStudy = null;
      }
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
};
</script>

<style scoped>
.default-container {
  max-width: 1200px;
  width: 96%;
  margin: 0 auto;
}
.base--tab {
  margin: 7rem 0 3.6rem 0;
}
.nothing-apply {
  padding-top: 11rem;
  text-align: center;
  margin-bottom: 26rem;
}
.nothing-apply-text {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: var(--gray01);
  margin-bottom: 2.4rem;
}
.nothing-apply a {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.7rem;
  text-decoration-line: underline;
  color: var(--gray00);
}
.my-studyList {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
}
@media (max-width: 768px) {
  .base--tab {
    margin: 5.4rem 0 3rem 0;
  }
  .nothing-apply {
    margin: 0 auto;
  }
  .nothing-apply-text {
    font-size: 1.2rem;
  }
  .nothing-apply a {
    font-size: 1rem;
  }
  .my-studyList {
    gap: 2rem;
  }
}
</style>
