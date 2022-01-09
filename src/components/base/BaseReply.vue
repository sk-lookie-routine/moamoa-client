<template>
  <div class="comment box--underline">
    <img
      :src="imgUrl"
      alt="댓글 사용자 프로필 이미지"
      class="comment-writer__profile-img"
    />
    <div class="comment-writer__content-container">
      <div class="comment__meta-info">
        <div class="comment-writer__nickname">{{ nickname }}</div>
        <div class="comment__commented-date">{{ date }}</div>
      </div>
      <div class="comment__content">
        {{ content }}
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
  },
  data() {
    return {
      imgUrl: require('@/assets/img/profile/' + this.imgSrc + '.svg'),
    };
  },
};
</script>

<style scoped>
.comment {
  display: flex;
  padding: 2rem 0;
}

.comment-writer__profile-img {
  width: 4.4rem;
  height: 4.4rem;
}

.comment-writer__content-container {
  margin-left: 1rem;
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

@media (max-width: 768px) {
}
</style>
