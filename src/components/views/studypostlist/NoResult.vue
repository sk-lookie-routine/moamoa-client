<template>
  <div class="container">
    <img src="@/assets/img/img_warning_color.svg" />
    <div class="text"><slot></slot></div>
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
  gap: 2.25rem;
  padding-top: 11rem;
}

.text {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 122%;
  color: var(--gray01);
}

@media (max-width: 768px) {
  .container {
    padding-top: 8.6rem;
  }

  .text {
    font-size: 1.2rem;
    line-height: 117%;
  }
}
</style>
