<template>
  <div v-if="this.$store.state.auth.isLogin">
    <div class="default-container">
      <div class="bottom-box" v-if="showBottomBox">
        <div class="divider"></div>
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
            <li v-for="card in applicatedStudy" :key="card.card.postSeq">
              <base-card
                @click="showPostPage(card.card.postSeq)"
                :id="card.card.postSeq"
                :imgSrc="card.card.image"
                :title="card.card.title"
                :startDate="card.card.startDate"
                :endDate="card.card.endDate"
                :peopleRegisterCount="1"
                :peopleTotalCount="card.card.memberCount"
                :hashTags="card.card.hashTags"
                :joinType="card.joinType"
              ></base-card>
            </li>
          </ul>
          <div class="button-container">
            <pagination-button
              v-if="showMoreBtn_app && textOfEachTab == '신청한'"
              @showMore="applicatedStudyList()"
            ></pagination-button>
          </div>
          <ul class="my-studyList" v-if="textOfEachTab == '개설한'">
            <li v-for="card in openStudy" :key="card.postSeq">
              <base-card
                @click="showPostPage(card.postSeq)"
                :id="card.postSeq"
                :imgSrc="card.image"
                :title="card.title"
                :startDate="card.startDate"
                :endDate="card.endDate"
                :peopleRegisterCount="1"
                :peopleTotalCount="card.memberCount"
                :hashTags="card.hashTags"
              >
              </base-card>
            </li>
          </ul>
          <div class="button-container">
            <pagination-button
              v-if="showMoreBtn && textOfEachTab == '개설한'"
              @showMore="openStudyList()"
            ></pagination-button>
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
    <the-footer></the-footer>
  </div>
  <auth-login-page v-else></auth-login-page>
</template>

<script>
import TheFooter from '@/components/common/TheFooter.vue';
import AuthLoginPage from '@/views/AuthLoginPage.vue';
import { fetchPostByUserSeq, fetchPostByPostSeq } from '@/api/post.js';
import { fetchJoinByUserSeq } from '@/api/join.js';
import PaginationButton from '@/components/views/studypostlist/PaginationButton.vue';

export default {
  components: { TheFooter, AuthLoginPage, PaginationButton },
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
      console.log(res.data.content);
      if (res.data != '') {
        const size = res.data.totalElements;
        while (this.index_app < size) {
          //다 보여줬으면 변수 토글
          if (this.index_app == size - 1) {
            this.showMoreBtn_app = false;
          }
          let postSeq = res.data.content[this.index_app].postSeq;
          let applicatedPost = await fetchPostByPostSeq(postSeq);

          this.applicatedStudy.push({
            card: applicatedPost.data.content[0],
            joinType: res.data.content[this.index_app].joinType,
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
      while (this.index < size) {
        if (this.index == size - 1) {
          this.showMoreBtn = false;
        }
        this.openStudy.push(response.data.content[this.index]);
        if (this.index % 4 == 3 && this.index != 0) {
          this.index++;
          break;
        }
        this.index++;
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
  max-width: 100%;
  margin: 0 auto;
}
.base--tab {
  margin: 7rem 5%;
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
  margin: 0 12%;
}
.my-studyList li {
  margin-top: 3rem;
}
.divider {
  border-bottom: 1rem solid #eff0f3;
}
.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 320px) {
  .default-container {
    padding-top: 9.5rem;
    max-width: 100%;
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
    margin: 0 5%;
  }
  .my-studyList li {
    margin-top: 2rem;
  }
}
</style>
