<template>
  <div class="container">
    <img
      class="moa-characters-icon"
      src="@/assets/img/icon_moa_characters.svg"
    />
    <div class="jumbotron-text">목표를 함께할 팀원을 모아보세요!</div>
    <base-button>스터디 개설 가이드</base-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 12rem;
}

.moa-characters-icon {
  width: 14rem;
  height: 4.4rem;
  margin-bottom: 3rem;
}

.jumbotron-text {
  margin-bottom: 3rem;
}
</style>
