<template>
  <div class="apply">
    <div class="meta-info-and-btns-container">
      <div class="meta-info-container">
        <img
          :src="imgUrl"
          class="profile-img"
          alt="스터디 신청자 프로필 이미지"
        />
        <div class="nickname">{{ nickname }}</div>
      </div>
      <div v-if="joinType === 'APPROVED'" class="apply-state accepted">
        승인 완료
      </div>
      <div v-else-if="joinType === 'REFUSED'" class="apply-state rejected">
        거절 완료
      </div>
      <div v-else class="btns-container">
        <button class="reject-btn" @click="rejectBtnClicked">거절</button>
        <div class="divide-line"></div>
        <button class="accept-btn" @click="acceptBtnClicked">승인</button>
      </div>
    </div>
    <p class="content box--gray-background">{{ content }}</p>
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
    content: {
      type: String,
      required: true,
    },
    joinType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      imgUrl: require('@/assets/img/profile/' + this.imgSrc + '.svg'),
    };
  },
  methods: {
    rejectBtnClicked() {
      this.$emit('reject');
    },
    acceptBtnClicked() {
      this.$emit('accept');
    },
  },
};
</script>

<style scoped>
.apply {
}

.meta-info-and-btns-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.meta-info-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.profile-img {
  width: 4.4rem;
  height: 4.4rem;
}

.nickname {
  font-weight: bold;
  font-size: 1.4rem;
  color: var(--black);
  font-family: Spoqa Han Sans Neo;
}

.btns-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  animation: fadeinAndZoom 300ms ease-in-out forwards;
}

.btns-container button {
  font-weight: bold;
  font-size: 1.6rem;
  font-family: Noto Sans KR;
  background: transparent;
}

.reject-btn {
  color: var(--gray02);
}

.accept-btn {
  color: var(--orange-dark);
}

.divide-line {
  width: 2px;
  height: 1.8rem;
  background-color: var(--gray04);
}

.apply-state {
  font-weight: bold;
  font-size: 1.6rem;
  animation: fadeinAndZoom 300ms ease-in-out forwards;
}

.accepted {
  color: var(--orange-dark);
}

.rejected {
  color: var(--gray02);
}

@media (max-width: 768px) {
  .btns-container button,
  .apply-state {
    font-size: 1.4rem;
  }
}

@keyframes fadeinAndZoom {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  70% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
</style>
