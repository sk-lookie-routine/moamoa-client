<template>
  <div class="container noselect">
    <img src="@/assets/img/img_error_not_found.svg" />
    <h3>페이지를 찾을 수 없습니다.</h3>
    <div class="link">이전 페이지로 돌아가기</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 19rem;
  height: 19rem;
  margin-bottom: 3.8rem;
}

h3 {
  margin-bottom: 1.2rem;
}

.link {
  font-weight: bold;
  font-size: 1.4rem;
  text-decoration-line: underline;
  color: var(--gray02);
}
</style>
