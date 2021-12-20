<template>
  <div class="main-container">
    <div class="post-header">
      <div class="box--underline bottom-padding">
        <h1>{{ post.title }}</h1>
      </div>
      <div class="post-info-and-btn-container">
        <div class="post-info">
          <div class="post__writer">
            <img
              src="@/assets/img/profile/profile_tr_b.svg"
              alt=""
              class="writer__profile-img"
            />
            <div class="writer__nickname">이채윤</div>
          </div>
          <div class="post__posted-date">{{ post.createdAt }}</div>
        </div>
        <base-button :size="'small'">신청하기</base-button>
      </div>
    </div>
    <div class="post-contents box--underline">
      <div class="post-content">
        <h2>스터디 정보 요약</h2>
        <div class="box--gray-background">
          <ul class="post-content-lines">
            <li>
              <p>
                <span class="p-text--em">모집 마감 :</span> {{ post.deadLine }}
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
    <div class="post-comments">
      <h2>댓글</h2>
      <div class="box--underline comment-register-container">
        <div class="comment-register__user-profile">
          <img
            src="@/assets/img/profile/profile_tr_p.svg"
            alt=""
            class="user__profile-img"
          />
          <div class="user__nickname">개발천재서영</div>
        </div>
        <textarea
          placeholder="스터디장에게 궁금한 점이 있다면 댓글을 남겨보세요."
          name="comment"
          rows="5"
        ></textarea>
        <div class="comment-register-btn-container">
          <button class="comment-register__register-btn">등록</button>
        </div>
      </div>
      <ul class="comment-list">
        <base-reply
          :id="1"
          :imgSrc="'profile_tr_b'"
          :nickname="'사람'"
          :date="'2020.12.12'"
          :content="'댓글 내용'"
        ></base-reply>
      </ul>
    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
import { fetchPostById, fetchReply } from '@/api/index.js';
import BaseReply from '@/components/base/BaseReply.vue';

export default {
  components: { BaseReply },
  methods: {
    async fetchPostData() {
      const postId = this.$route.params.postId;
      const response = await fetchPostById(postId);
      this.post = response.data.content[0];
    },

    async fetchReplyData() {
      const response = await fetchReply(1);
      this.replies = response.data.content;
    },
  },
  data() {
    return {
      post: null,
      replies: [],
    };
  },
  created() {
    this.fetchPostData();
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
</style>
