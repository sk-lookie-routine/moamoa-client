<template>
  <base-dialog
    :showDialog="showDialog"
    @closed="alertClosed"
    :title="dialog.title"
    :content="dialog.content"
  >
    <template v-if="dialog.btnType == 'close'">
      <base-dialog-button size="small" color="gray" @click="showDialog = false"
        >취소</base-dialog-button
      >
      <base-dialog-button size="small" @click="closeApplicaption">
        마감
      </base-dialog-button>
    </template>
    <template v-else-if="dialog.btnType == 'delete'">
      <base-dialog-button size="small" color="gray" @click="showDialog = false"
        >취소</base-dialog-button
      >
      <base-dialog-button size="small" @click="removePost">
        삭제
      </base-dialog-button>
    </template>
    <template v-else-if="dialog.btnType == 'deleteConfirm'">
      <base-dialog-button @click="showPostsPage">확인</base-dialog-button>
    </template>
    <template v-else>
      <base-dialog-button @click="showDialog = false">확인</base-dialog-button>
    </template>
  </base-dialog>
  <div class="main-container">
    <div v-if="post" class="post">
      <div class="post-header">
        <div class="box--underline bottom-padding">
          <h1 class="post-header__title">{{ post.title }}</h1>
        </div>
        <div class="post-info-and-btn-container">
          <div class="post-info">
            <div class="post__writer">
              <img
                :src="require(`@/assets/img/profile/${user.image}.svg`)"
                alt="게시글 작성자 프로필 이미지"
                class="writer__profile-img"
                @click="onClickUserProfile(post.userSeq)"
              />
              <div class="writer__nickname">{{ user.username }}</div>
            </div>
            <div class="post__posted-date">
              {{ formatDate(post.createdAt) }}
            </div>
            <div
              v-if="
                this.$store.state.auth.userSeq &&
                this.user.userSeq == this.$store.state.auth.userSeq
              "
              class="post__btns-container"
            >
              <button @click="editPost">편집</button>
              <div></div>
              <button @click="setDialogWithDelete">삭제</button>
            </div>
          </div>
          <base-button
            :size="'small'"
            :disable="baseButton.disable"
            :color="baseButton.color"
            @click="onClickBaseButton"
            >{{ baseButton.text }}</base-button
          >
        </div>
      </div>
      <div
        v-if="
          this.$store.state.auth.userSeq &&
          this.user.userSeq == this.$store.state.auth.userSeq
        "
        class="post-apply box--underline"
      >
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
              @profileClicked="onClickUserProfile(apply.userSeq)"
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
                  {{ post.deadLine.replaceAll('-', '.') }}
                </p>
              </li>
              <li>
                <p>
                  <span class="p-text--em">기간 :</span>
                  {{ post.startDate.replaceAll('-', '.') }}~{{
                    post.endDate.replaceAll('-', '.')
                  }}
                </p>
              </li>
              <li>
                <p>
                  <span class="p-text--em">신청 인원 :</span>
                  {{ appliedApprovedMemberCount }}명/{{ post.memberCount }}명
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="post-content">
          <h2>스터디 목표 & 소개</h2>
          <div class="box--gray-background">
            <p class="p-text--red">{{ post.goal }}</p>
            <p v-html="post.info.replaceAll('\n', '<br />')"></p>
          </div>
        </div>
        <div class="post-content">
          <h2>스터디 진행 방식</h2>
          <div class="box--gray-background">
            <p v-html="post.how.replaceAll('\n', '<br />')"></p>
          </div>
        </div>
        <div class="post-content">
          <h2>신청자에게 한마디!</h2>
          <div class="box--gray-background">
            <p v-html="post.comment.replaceAll('\n', '<br />')"></p>
          </div>
        </div>
        <div v-if="post.hashTags.length > 0" class="post-content">
          <h2>태그</h2>
          <div class="tags-container">
            <span class="tag-icon">#</span>
            <ul class="tags">
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
      <div
        v-if="this.$store.state.auth.isLogin"
        class="comment-register-container"
      >
        <div class="comment-register__user-profile">
          <img
            :src="
              require(`@/assets/img/profile/${this.$store.state.auth.image}.svg`)
            "
            alt="댓글 등록 프로필 이미지"
            class="user__profile-img"
            @click="onClickUserProfile(this.$store.state.auth.userSeq)"
          />
          <div class="d">
            {{ this.$store.state.auth.username }}
          </div>
        </div>
        <form @submit.prevent="submitReply">
          <textarea
            placeholder="스터디장에게 궁금한 점이 있다면 댓글을 남겨보세요."
            name="comment"
            rows="5"
            v-model="replyContent"
            @input="changeReplyContent"
          ></textarea>
          <div class="comment-register-btn-container">
            <button
              class="comment-register__register-btn"
              :disabled="isReplyBtnDisabled"
            >
              등록
            </button>
          </div>
        </form>
      </div>
      <ul v-if="replyList && replyList.length > 0" class="comment-list">
        <li v-for="reply in replyList" :key="reply.replySeq">
          <base-reply
            :id="reply.replySeq"
            :imgSrc="reply.image"
            :nickname="reply.username"
            :date="formatDate(reply.createdAt)"
            :content="reply.content"
            :showMoreMenu="canShowMoreMenuInReply(reply.userSeq)"
            @register="modifyReply"
            @delete="removeReply(reply.replySeq)"
            @profileClicked="onClickUserProfile(reply.userSeq)"
          ></base-reply>
        </li>
      </ul>
      <no-reply v-else>아직 댓글이 없어요</no-reply>
    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
import { fetchPostByPostSeq, updatePost, deletePost } from '@/api/post.js';
import { createRoom } from '@/api/room.js';
import {
  fetchReply,
  createReply,
  updateReply,
  deleteReply,
} from '@/api/reply.js';
import { fetchJoinByPostSeq, updateJoin } from '@/api/join.js';
import { getUserByUserSeq } from '@/api/user.js';
import { POST_TYPE, JOIN_TYPE } from '@/utils/constValue';
import NoReply from '@/components/views/studypost/NoReply.vue';

export default {
  components: { NoReply },
  data() {
    return {
      postSeq: null,
      user: null,
      post: null,
      replyContent: '',
      replyList: [],
      applyList: [],
      showApplyList: true,
      applyListToggleBtnImage: 'icon_arrow_up',
      baseButton: {
        disable: false,
        text: '신청하기',
        color: 'red',
      },
      showDialog: false,
      dialog: {
        title: null,
        content: '',
        btnType: 'default',
      },
    };
  },
  computed: {
    isReplyBtnDisabled() {
      if (this.replyContent === '') return true;
      else return false;
    },
    appliedApprovedMemberCount() {
      const approvedMemberList = this.applyList.filter(
        item => item.joinType === JOIN_TYPE.APPROVED,
      );
      return approvedMemberList.length;
    },
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
    alertClosed() {
      if (this.dialog.btnType == 'deleteConfirm') {
        this.showDialog = false;
        this.showPostsPage();
      } else {
        this.showDialog = false;
      }
    },
    onClickUserProfile(userSeq) {
      this.$router.push({
        name: 'mypage',
        params: { userSeq },
      });
    },
    async closeApplicaption() {
      this.post = {
        ...this.post,
        postType: POST_TYPE.COMPLETE,
      };
      await updatePost(this.post);
      this.showDialog = false;
      this.setBaseButton();
      await createRoom(this.postSeq);
    },
    showApplyPage() {
      this.$router.push({
        name: 'apply',
        query: {
          title: this.post.title,
          postSeq: this.post.postSeq,
          userSeq: this.$store.state.auth.userSeq,
        },
      });
    },
    showPostsPage() {
      this.$router.push({
        name: 'posts',
      });
    },
    editPost() {
      this.$router.push({
        name: 'post-write',
        query: {
          postSeq: this.postSeq,
        },
      });
    },
    async removePost() {
      await deletePost(this.postSeq);
      this.dialog.title = '';
      this.dialog.content = '삭제되었습니다.';
      this.dialog.btnType = 'deleteConfirm';
      this.showDialog = true;
    },
    setDialogWithDelete() {
      if (this.appliedApprovedMemberCount > 0) {
        this.dialog.title = '';
        this.dialog.content =
          '이미 승인 완료된 인원이 있습니다.<br/>게시물을 삭제할 수 없습니다.';
        this.dialog.btnType = 'default';
        this.showDialog = true;
      } else {
        this.dialog.title = '잠깐!!';
        this.dialog.content =
          '삭제된 게시물은 복구할 수 없습니다.<br/>정말 게시글을 삭제할까요?';
        this.dialog.btnType = 'delete';
        this.showDialog = true;
      }
    },
    setDialogWithJoin(joinType) {
      if (joinType == JOIN_TYPE.APPROVED) {
        this.dialog.title = '';
        this.dialog.content = '승인하였습니다.';
        this.dialog.btnType = 'default';
        this.showDialog = true;
      } else if (joinType == JOIN_TYPE.REFUSED) {
        this.dialog.title = '';
        this.dialog.content = '거절하였습니다.';
        this.dialog.btnType = 'default';
        this.showDialog = true;
      }
    },
    setBaseButton() {
      if (this.post.postType == POST_TYPE.COMPLETE) {
        this.baseButton.text = '마감된 스터디';
        this.baseButton.disable = true;
        this.applyList.forEach(item => {
          if (
            item.userSeq === this.$store.state.auth.userSeq &&
            item.joinType === JOIN_TYPE.APPROVED
          ) {
            this.baseButton.text = '신청 완료';
            this.baseButton.disable = true;
          }
        });
      } else if (
        this.$store.state.auth.userSeq &&
        this.user.userSeq == this.$store.state.auth.userSeq
      ) {
        this.baseButton.text = '모집 마감하기';
      } else {
        this.applyList.forEach(item => {
          if (
            item.joinType === JOIN_TYPE.WAIT &&
            item.userSeq === this.$store.state.auth.userSeq
          ) {
            this.baseButton.text = '신청함';
            this.baseButton.disable = true;
            return;
          } else if (
            item.joinType === JOIN_TYPE.APPROVED &&
            item.userSeq === this.$store.state.auth.userSeq
          ) {
            this.baseButton.text = '신청 완료';
            this.baseButton.disable = true;
          } else if (
            item.joinType === JOIN_TYPE.REFUSED &&
            item.userSeq === this.$store.state.auth.userSeq
          ) {
            this.baseButton.text = '신청 거부';
            this.baseButton.disable = true;
          }
        });
      }
    },
    onClickBaseButton() {
      if (!this.$store.state.auth.isLogin) {
        this.$router.push({
          name: 'login',
        });
      } else {
        if (this.user.userSeq == this.$store.state.auth.userSeq) {
          if (this.applyList.length <= 0) {
            this.dialog.title = '';
            this.dialog.content = '신청한 사람이 없을 때는 마감할 수 없어요!';
            this.dialog.btnType = 'default';
            this.showDialog = true;
          } else {
            this.dialog.title = '잠깐!!';
            this.dialog.content =
              '마감한 스터디는 재모집할 수 없어요.<br/>스터디를 마감하시겠어요?';
            this.dialog.btnType = 'close';
            this.showDialog = true;
          }
        } else {
          this.showApplyPage();
        }
      }
    },
    changeReplyContent(e) {
      this.replyContent = e.target.value;
    },
    canShowMoreMenuInReply(userSeq) {
      if (
        this.$store.state.auth.isLogin &&
        userSeq == this.$store.state.auth.userSeq
      )
        return true;
      else return false;
    },

    //댓글 CRUD
    async fetchReply(postSeq) {
      const res = await fetchReply(postSeq);
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
    async submitReply() {
      const reply = {
        userSeq: this.$store.state.auth.userSeq,
        postSeq: this.postSeq,
        content: this.replyContent,
      };
      await createReply(reply);
      this.replyContent = '';
      await this.fetchReply(this.post.postSeq);
    },
    async modifyReply(replySeq, content) {
      const reply = {
        replySeq,
        content,
      };
      await updateReply(reply);
      await this.fetchReply(this.post.postSeq);
    },
    async removeReply(replySeq) {
      await deleteReply(replySeq);
      await this.fetchReply(this.post.postSeq);
    },
    async setApply(joinType, joinSeq, userSeq, comment) {
      if (
        joinType == JOIN_TYPE.APPROVED &&
        this.appliedApprovedMemberCount >= this.post.memberCount
      ) {
        this.dialog.title = '';
        this.dialog.content = '더 이상 승인할 수 없습니다.';
        this.dialog.btnType = 'default';
        this.showDialog = true;
      } else {
        const join = {
          postSeq: this.postSeq,
          joinSeq,
          userSeq,
          joinType,
          comment,
        };
        await updateJoin(join);
        this.setDialogWithJoin(joinType);
        await this.fetchApplyData(this.post.postSeq);
      }
    },
    async fetchApplyData() {
      const res = await fetchJoinByPostSeq(this.post.postSeq);
      const list =
        res.data.content == undefined
          ? []
          : await Promise.all(
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
    async fetchData() {
      const postResponse = await fetchPostByPostSeq(this.postSeq);
      this.post = postResponse.data.content[0];
      const userResponse = await getUserByUserSeq(this.post.userSeq);
      this.user = userResponse.data.content[0];
      this.fetchReply(this.post.postSeq);
      await this.fetchApplyData(this.post.postSeq);
      this.setBaseButton();
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
    this.postSeq = this.$route.params.postId;
    this.fetchData();
  },
};
</script>

<style scoped>
.post-header {
  margin-bottom: 12.8rem;
}

.post-header__title {
  line-height: 120%;
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
  cursor: pointer;
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

.post__btns-container {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-left: 1.6rem;
}

.post__btns-container button {
  font-family: Spoqa Han Sans Neo;
  font-weight: 500;
  font-size: 1.6rem;
  color: var(--gray02);
  background: transparent;
  padding: 0;
}

.post__btns-container div {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background: var(--gray02);
}

.post-apply {
  padding-bottom: 6rem;
  margin-top: -1rem;
  margin-bottom: 4.8rem;
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
  align-items: flex-start;
  gap: 1rem;
}

.tag-icon {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 2.4rem;
  margin-left: 1.6rem;
  margin-right: 0.3rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem 1rem;
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
  cursor: pointer;
}

.d {
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
  font-family: 'Noto Sans KR', sans-serif;
  padding: 1.4rem 4rem;
  font-weight: bold;
  font-size: 1.6rem;
  color: white;
  background-color: var(--orange-dark);
}

.comment-register__register-btn:disabled {
  background-color: var(--gray03);
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

  .post__btns-container button {
    font-size: 1.2rem;
  }

  .post-apply {
    padding-bottom: 3.4rem;
    margin-bottom: 4.6rem;
  }

  .apply-list {
    margin-top: 2.9rem;
  }

  .apply-list li:not(:last-child) {
    margin-bottom: 1rem;
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

  .tags-container {
    gap: 1rem;
  }

  .tags {
    gap: 1rem 0.6rem;
  }

  .tag-icon {
    font-size: 2.2rem;
    margin: 0 0 0 1.7rem;
  }

  .post-comments h2 {
    margin: 4.6rem 0 2.4rem 0;
  }

  .comment-register-container {
    padding-bottom: 3rem;
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
