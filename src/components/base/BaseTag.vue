<template>
  <div class="tag" :class="{ 'tag-animation': canRemove }">
    <div><slot></slot></div>
    <img
      @click="deleteBtnClicked"
      v-if="canRemove"
      src="@/assets/img/icon_cancel.svg"
    />
  </div>
</template>

<script>
export default {
  props: {
    canRemove: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    deleteBtnClicked() {
      this.$emit('delete');
    },
  },
};
</script>

<style scoped>
.tag {
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.4em;
  white-space: nowrap;
  color: var(--gray01);
  background-color: var(--gray05);
  padding: 0.8rem 1.6rem;
  border-radius: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tag img:hover {
  cursor: pointer;
}

.tag-animation {
  animation: zoom-out 200ms ease-out;
}

@keyframes zoom-out {
  0% {
    transform: scale(0, 0);
  }
  70% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
