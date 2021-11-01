<template>
  <div class="container">
    <img
      class="moa-character-img"
      src="@/assets/img/img_moa_highlight_character.svg"
    />
    <div class="jumbotron-text">스터디메이트를 모아보세요!</div>
    <base-button>스터디 개설하기</base-button>
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

.moa-character-img {
  width: 6.2rem;
  height: 2.1rem;
  margin-bottom: 4.2rem;
}

.jumbotron-text {
  margin-bottom: 3rem;
}

@media (max-width: 1024px) {
  .container {
    padding-top: 7rem;
  }

  .jumbotron-text {
    font-size: 1.6rem;
  }
}
</style>
