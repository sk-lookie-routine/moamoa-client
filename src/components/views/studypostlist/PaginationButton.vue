<template>
  <button @click="handleClick">더보기</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('showMore');
    },
  },
};
</script>

<style scoped>
button {
  padding: 1.5rem 4rem;
  font-size: 1.4rem;
  color: var(--gray01);
  box-shadow: 1px 1px 10px rgba(170, 170, 170, 0.25);
  border-radius: 4rem;
  background-color: white;
}
</style>
