<template>
  <div class="main-container">
    <div v-if="post" class="post">
      <div class="post-header">
        <div class="box--underline bottom-padding">
          <h1>{{ post.title }}</h1>
        </div>
        <div class="post-info-and-btn-container">
          <div class="post-info">
            <div class="post__writer">
              <img
                :src="require(`@/assets/img/profile/${user.image}.svg`)"
                alt="게시글 작성자 프로필 이미지"
                class="writer__profile-img"
                @click="onClickUserProfile"
              />
              <div class="writer__nickname">{{ user.username }}</div>
            </div>
            <div class="post__posted-date">
              {{ formatDate(post.createdAt) }}
            </div>
          </div>
          <base-button
            :size="'small'"
            @click="
              user.userSeq == 49
                ? closeApplicaption(studySeq)
                : showApplyPage(studySeq)
            "
            >{{
              user.userSeq == 49 ? '모집 마감하기' : '신청하기'
            }}</base-button
          >
        </div>
      </div>
      <div class="post-apply box--underline">
        <div class="post-apply__header">
          <h2>신청한 사람들</h2>
          <button
            class="post-apply__btn"
            @click="showApplyList = !showApplyList"
          >
            <img
              :src="require(`@/assets/img/${applyListToggleBtnImage}.svg`)"
              alt="신청 리스트 토글 버튼"
            />
          </button>
        </div>
        <ul v-if="applyList && showApplyList" class="apply-list">
          <li v-for="apply in applyList" :key="apply.joinSeq">
            <base-apply
              :id="apply.joinSeq"
              :imgSrc="apply.image"
              :nickname="apply.username"
              :content="apply.comment"
              :joinType="apply.joinType"
              @reject="
                setApply('REFUSED', apply.joinSeq, apply.userSeq, apply.comment)
              "
              @accept="
                setApply(
                  'APPROVED',
                  apply.joinSeq,
                  apply.userSeq,
                  apply.comment,
                )
              "
            ></base-apply>
          </li>
        </ul>
      </div>
      <div class="post-contents box--underline">
        <div class="post-content">
          <h2>스터디 정보 요약</h2>
          <div class="box--gray-background">
            <ul class="post-content-lines">
              <li>
                <p>
                  <span class="p-text--em">모집 마감 :</span>
                  {{ post.deadLine }}
                </p>
              </li>
              <li>
                <p>
                  <span class="p-text--em">기간 :</span> {{ post.startDate }}~{{
                    post.endDate
                  }}
                </p>
              </li>
              <li>
                <p>
                  <span class="p-text--em">신청 인원 :</span> 2명/{{
                    post.memberCount
                  }}명
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="post-content">
          <h2>스터디 목표 & 소개</h2>
          <div class="box--gray-background">
            <p class="p-text--red">{{ post.goal }}</p>
            <p>
              {{ post.info }}
            </p>
          </div>
        </div>
        <div class="post-content">
          <h2>스터디 진행 방식</h2>
          <div class="box--gray-background">
            <p>
              {{ post.how }}
            </p>
          </div>
        </div>
        <div class="post-content">
          <h2>신청자에게 한마디!</h2>
          <div class="box--gray-background">
            <p>
              {{ post.comment }}
            </p>
          </div>
        </div>
        <div class="post-content">
          <h2>태그</h2>
          <div class="tags-container">
            <span class="tag-icon">#</span>
            <ul v-if="post.hashTags.length > 0" class="tags">
              <li v-for="(tag, index) in post.hashTags" :key="index">
                <base-tag>{{ tag }}</base-tag>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="post-comments">
      <h2>댓글</h2>
      <div class="comment-register-container">
        <div class="comment-register__user-profile">
          <img
            src="@/assets/img/profile/profile_tr_p.svg"
            alt=""
            class="user__profile-img"
          />
          <div class="user__nickname">개발천재서영</div>
        </div>
        <form @submit.prevent="submitReply">
          <textarea
            placeholder="스터디장에게 궁금한 점이 있다면 댓글을 남겨보세요."
            name="comment"
            rows="5"
            v-model="replyContent"
          ></textarea>
          <div class="comment-register-btn-container">
            <button class="comment-register__register-btn">등록</button>
          </div>
        </form>
      </div>
      <ul v-if="replyList" class="comment-list">
        <li v-for="reply in replyList" :key="reply.replySeq">
          <base-reply
            :id="reply.replySeq"
            :imgSrc="reply.image"
            :nickname="reply.username"
            :date="formatDate(reply.createdAt)"
            :content="reply.content"
          ></base-reply>
        </li>
      </ul>
    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
import { fetchPostById, updatePost } from '@/api/posts.js';
import { fetchReply, createReply } from '@/api/reply.js';
import { fetchJoinByStudySeq, updateJoin } from '@/api/join.js';
import { getUserByUserSeq } from '@/api/user.js';
import { STUDY_TYPE } from '@/utils/constValue';
import BaseReply from '@/components/base/BaseReply.vue';
import BaseApply from '@/components/base/BaseApply.vue';

export default {
  components: { BaseReply, BaseApply },
  data() {
    return {
      studySeq: null,
      user: null,
      post: null,
      replyContent: '',
      replyList: [],
      applyList: [],
      showApplyList: true,
      applyListToggleBtnImage: 'icon_arrow_up',
    };
  },
  watch: {
    showApplyList: {
      handler(value) {
        value
          ? (this.applyListToggleBtnImage = 'icon_arrow_up')
          : (this.applyListToggleBtnImage = 'icon_arrow_down');
      },
    },
  },
  methods: {
    onClickUserProfile() {
      this.$router.push({
        name: 'mypage',
        params: { userSeq: this.post.userSeq },
      });
    },
    async closeApplicaption() {
      const post = {
        ...this.post,
        studyType: STUDY_TYPE.PROGRESS,
      };
      console.log(post);
      await updatePost(post);
    },
    showApplyPage(postId) {
      this.$router.push({
        name: 'apply',
        params: {
          postId,
        },
        query: { title: this.post.title },
      });
    },
    async setApply(joinType, joinSeq, userSeq, comment) {
      const join = {
        studySeq: this.studySeq,
        joinSeq,
        userSeq,
        joinType,
        comment,
      };
      await updateJoin(join);
      await this.fetchApplyData(this.post.studySeq);
    },
    async submitReply() {
      const reply = {
        userSeq: 50,
        studySeq: this.studySeq,
        content: this.replyContent,
      };
      console.log(reply);
      await createReply(reply);
      this.replyContent = '';
      this.fetchReply(this.post.studySeq);
    },
    async fetchApplyData() {
      const res = await fetchJoinByStudySeq(this.post.studySeq);
      const list = await Promise.all(
        res.data.content.map(async item => {
          const res = await getUserByUserSeq(item.userSeq);
          const apply = {
            ...item,
            image: res.data.content[0].image,
            username: res.data.content[0].username,
          };
          return apply;
        }),
      );
      this.applyList = list;
    },
    async fetchReply(studySeq) {
      const res = await fetchReply(studySeq);
      const list = await Promise.all(
        res.data.content.map(async item => {
          const res = await getUserByUserSeq(item.userSeq);
          const reply = {
            ...item,
            image: res.data.content[0].image,
            username: res.data.content[0].username,
          };
          return reply;
        }),
      );
      this.replyList = list;
    },
    async fetchData() {
      const postResponse = await fetchPostById(this.studySeq);
      this.post = postResponse.data.content[0];
      const userResponse = await getUserByUserSeq(this.post.userSeq);
      this.user = userResponse.data.content[0];
      this.fetchReply(this.post.studySeq);
      this.fetchApplyData(this.post.studySeq);
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return year + '.' + month + '.' + day;
    },
  },
  created() {
    this.studySeq = this.$route.params.postId;
    this.fetchData();
  },
};
</script>

<style scoped>
.post-header {
  margin-bottom: 12.8rem;
}

.post-info-and-btn-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.post-info {
  display: flex;
  align-items: center;
}

.post__writer {
  display: flex;
  align-items: center;
  margin-right: 2.7rem;
}

.writer__profile-img {
  width: 3.7rem;
  height: 3.7rem;
  margin-right: 0.8rem;
}

.writer__nickname {
  font-weight: bold;
  font-size: 1.6rem;
  color: var(--gray01);
}

.post__posted-date {
  font-size: 1.6rem;
  color: var(--gray00);
}

.post-apply {
  padding-bottom: 6rem;
}

.post-apply__header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.post-apply__btn {
  padding: 0;
  background: transparent;
}

.apply-list {
  margin-top: 3.8rem;
}

.apply-list li {
  transform-origin: top center;
  animation: rotateX 300ms ease-in-out forwards;
}

.apply-list li:not(:last-child) {
  margin-bottom: 3rem;
}

.post-contents {
  padding-bottom: 5.6rem;
}

.post-contents h2 {
  margin-bottom: 1rem;
}

.box--gray-background {
  margin-bottom: 4.8rem;
}

.post-content-lines li:not(:last-child) {
  margin-bottom: 0.6rem;
}

.p-text--red {
  line-height: auto;
  margin-bottom: 3.4rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.tag-icon {
  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 2.4rem;
  margin-left: 1.6rem;
  margin-right: 0.3rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.post-comments h2 {
  margin: 4.8rem 0 3.6rem 0;
}

.comment-register-container {
  display: flex;
  flex-direction: column;
  padding-bottom: 5.2rem;
  margin-bottom: 1.6rem;
}

.comment-register__user-profile {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.user__profile-img {
  width: 4.4rem;
  height: 4.4rem;
  margin-right: 1rem;
}

.user__nickname {
  font-size: 1.4rem;
  font-weight: bold;
}

textarea {
  padding: 2.4rem 3rem;
  margin-bottom: 2rem;
}

.comment-register-btn-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.comment-register__register-btn {
  font-family: Noto Sans KR;
  padding: 1.4rem 4rem;
  font-weight: bold;
  font-size: 1.6rem;
  color: white;
  background-color: var(--orange-dark);
}

.comment-list {
  display: flex;
  flex-direction: column;
}

.comment-list > li:first-child {
  border-top: 0.1rem solid var(--gray04);
}

@media (max-width: 768px) {
  .post-header {
    margin-bottom: 5.4rem;
  }

  .post__writer {
    margin-right: 1.4rem;
  }

  .writer__nickname {
    font-size: 1.2rem;
  }

  .post__posted-date {
    font-size: 1.2rem;
  }

  .post-contents {
    padding-bottom: 4.6rem;
  }

  .post-contents h2 {
    margin-bottom: 1.5rem;
  }

  .box--gray-background {
    margin-bottom: 4.6rem;
  }

  .post-content-lines li:not(:last-child) {
    margin-bottom: 1.2rem;
  }

  .p-text--red {
    margin-bottom: 2rem;
  }

  .tags {
    gap: 0.6rem;
  }

  .tag-icon {
    font-size: 2.2rem;
    margin: 0 1rem 0 1.7rem;
  }

  .post-comments h2 {
    margin: 4.8rem 0 3.6rem 0;
  }

  .comment-register-container {
    padding-bottom: 5.2rem;
    margin-bottom: 1.6rem;
  }

  textarea {
    padding: 2.4rem 1.6rem;
  }

  .comment-register__register-btn {
    padding: 1rem 2.8rem;
    font-size: 1.6rem;
  }
}

@keyframes rotateX {
  0% {
    opacity: 0;
    transform: rotateX(-90deg);
  }
  50% {
    transform: rotateX(-20deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
}
</style>
