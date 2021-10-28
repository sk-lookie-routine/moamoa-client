<template>
  <div class="container">
    <div class="jumbotron-text">마음에 드는 스터디룸을 찾지 못했다면?</div>
    <div class="jumbotron-text">
      <span class="jumbotron-text--em">스터디장</span>이 되어보세요!
    </div>
    <base-button @click="movePage">스터디 개설하기</base-button>
  </div>
</template>

<script>
export default {
  methods: {
    movePage() {
      this.$router.push({ name: 'post-write' });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 12rem;
}

.jumbotron-text:first-child {
  margin-bottom: 1.7rem;
}

.jumbotron-text:nth-child(2) {
  margin-bottom: 4rem;
}
</style>
