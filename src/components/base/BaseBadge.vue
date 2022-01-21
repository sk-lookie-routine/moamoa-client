<template>
  <div class="container">
    <div v-if="joinType == 'APPROVED'" class="approved-status">
      <div class="box">승인 완료</div>
    </div>
    <div v-else-if="joinType == 'REFUSED'" class="refused-status">
      <div class="box">승인 거부</div>
    </div>
    <div v-else class="waiting-status">
      <div class="box">승인 대기</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    joinType: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  font-size: 1rem;
  color: white;
}
.box {
  width: 5.6rem;
  height: 3rem;
  align-items: center;
  display: flex;
  justify-content: center;
}
.approved-status {
  background: var(--orange-dark);
  border-radius: 0.7rem;
}
.refused-status {
  background: var(--orange-light);
  border-radius: 0.7rem;
}
.waiting-status {
  background: var(--gray03);
  border-radius: 0.7rem;
}
</style>
