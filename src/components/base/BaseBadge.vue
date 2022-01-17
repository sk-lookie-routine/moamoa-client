<template>
  <div class="container">
    <div v-if="joinType == 'APPROVED'" class="approved-status">승인 완료</div>
    <div v-else-if="joinType == 'REFUSED'" class="refused-status">
      승인 거부
    </div>
    <div v-else class="waiting-status">승인 대기</div>
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
  width: 5.6rem;
  height: 3rem;
  border-radius: 3rem;
}
.approved-status {
  background: var(--orange-dark);
}
.refused-status {
  background: var(--orange-light);
}
.waiting-status {
  background: var(--gray03);
}
</style>
