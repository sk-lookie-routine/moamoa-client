<template>
  <div
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
    class="comment box--underline"
  >
    <img
      :src="imgUrl"
      alt="댓글 사용자 프로필 이미지"
      class="comment-writer__profile-img"
      @click="profileClicked"
    />
    <div class="comment-writer__content-container">
      <div class="comment__meta-info">
        <div class="comment-writer__nickname">{{ nickname }}</div>
        <div class="comment__commented-date">{{ date }}</div>
      </div>
      <div v-if="!showModify" class="comment__content">
        {{ content }}
      </div>
      <div v-else class="comment-modify">
        <textarea
          class="comment-modify__content"
          placeholder="스터디장에게 궁금한 점이 있다면 댓글을 남겨보세요."
          name="comment"
          rows="3"
          v-model="replyContent"
          @input="changeReplyContent"
        ></textarea>
        <div class="comment-modify__btns">
          <button
            @click="cancelModifyReply"
            class="comment-modify__btn btn--gray"
          >
            취소
          </button>
          <button
            class="comment-modify__btn btn--red"
            @click="registerReply"
            :disabled="isRegisterBtnDisabled"
          >
            등록
          </button>
        </div>
      </div>
    </div>
    <button
      :class="{ invisible: !(showMoreMenu && showMoreMenuByHover) }"
      @click="showMenu = !showMenu"
      class="more-btn"
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
    <div v-if="showMenu && showMoreMenuByHover" class="menu">
      <div class="menu-item">
        <div class="menu-item--gray" @click="modifyReply">
          {{ showModify ? '수정 취소' : '댓글 수정' }}
        </div>
      </div>
      <div class="menu-item">
        <div class="menu-item--red" @click="deleteReply">삭제</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    showMoreMenu: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      replyContent: '',
      showMenu: false,
      showModify: false,
      showMoreMenuByHover: false,
      imgUrl: require('@/assets/img/profile/' + this.imgSrc + '.svg'),
    };
  },
  computed: {
    isRegisterBtnDisabled() {
      if (this.replyContent === '') return true;
      else return false;
    },
  },
  methods: {
    mouseEnter() {
      if (this.showMoreMenu) this.showMoreMenuByHover = true;
    },
    mouseLeave() {
      if (this.showMoreMenu) {
        this.showMoreMenuByHover = false;
        this.showMenu = false;
      }
    },
    changeReplyContent(e) {
      this.replyContent = e.target.value;
    },
    profileClicked() {
      this.$emit('profileClicked');
    },
    registerReply() {
      this.$emit('register', this.id, this.replyContent);
      this.showModify = false;
    },
    cancelModifyReply() {
      this.showModify = false;
    },
    modifyReply() {
      this.replyContent = this.content;
      this.showModify = !this.showModify;
      this.showMenu = false;
    },
    deleteReply() {
      this.$emit('delete');
    },
  },
  created() {
    this.replyContent = this.content;
  },
};
</script>

<style scoped>
.comment {
  display: flex;
  padding: 2rem 0;
  position: relative;
}

.comment-writer__profile-img {
  width: 4.4rem;
  height: 4.4rem;
  cursor: pointer;
}

.comment-writer__content-container {
  margin-left: 1rem;
  width: 100%;
}

.comment__meta-info {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.comment-writer__nickname {
  font-weight: bold;
  font-size: 1.4rem;
  color: var(--gray01);
  margin-right: 1rem;
}

.comment__commented-date {
  font-size: 1.2rem;
  color: var(--gray02);
}

.comment__content {
  font-size: 1.4rem;
  line-height: 170%;
}

.comment-modify {
  margin-top: 0.7rem;
}

.comment-modify__content {
  padding: 1.1rem 1.7rem;
  font-size: 1.4rem;
  line-height: 170%;
  margin-bottom: 1.5rem;
}

.comment-modify__btns {
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
}

.comment-modify__btn {
  font-family: Noto Sans KR;
  padding: 0.8rem 2.7rem;
  font-weight: bold;
  font-size: 1.6rem;
  color: white;
  border-radius: 1rem;
}

.comment-modify__btn:nth-child(2):disabled {
  background-color: var(--gray02);
}

.btn--gray {
  background-color: var(--gray03);
}

.btn--red {
  background-color: var(--orange-dark);
}

.more-btn {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.4rem 1rem;
  background-color: transparent;
}

.more-btn div {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: var(--gray02);
}

.menu {
  z-index: 1;
  background-color: white;
  width: 10.4rem;
  position: absolute;
  right: 0rem;
  top: 4.4rem;
  border: 1px solid var(--gray03);
  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(178, 178, 178, 0.25);
  display: flex;
  flex-direction: column;
}

.menu-item:not(:last-child) {
  border-bottom: 1px solid var(--gray03);
}

.menu-item {
  padding: 0.8rem 0;
}

.menu-item div {
  font-family: Spoqa Han Sans Neo;
  font-size: 1.2rem;
  text-align: center;
  padding: 0.4rem 0;
  cursor: pointer;
}

.menu-item--gray {
  color: var(--black);
}
.menu-item--gray:hover {
  background-color: #eff0f3;
}

.menu-item--red {
  color: var(--orange-dark);
}

.menu-item--red:hover {
  background-color: #ffdedc;
}

.invisible {
  visibility: hidden;
}

@media (max-width: 768px) {
  .comment-modify__content {
    margin-bottom: 1.2rem;
  }

  .comment-modify__btns {
    gap: 1rem;
  }

  .comment-modify__btn {
    padding: 1rem 2rem;
    font-size: 1.4rem;
  }

  .more-btn {
    gap: 0.2rem;
    padding: 0.3rem 0.8rem;
  }

  .menu {
    right: 1.7rem;
    top: 2.4rem;
  }
}
</style>
