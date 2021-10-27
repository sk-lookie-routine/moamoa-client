<template>
  <button :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'big',
      validator: function (value) {
        console.log(value);
        return ['big', 'small'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    buttonClass() {
      return this.size === 'big' ? 'btn--big' : 'btn--small';
    },
  },
};
</script>

<style scoped>
button {
  font-family: Noto Sans KR;
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  background-color: var(--orange-dark);
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
}

.btn--small {
  width: 25rem;
  padding: 1.4rem 0;
}

button:disable {
  background-color: var(--gray03);
}

.btn--big {
  width: 32rem;
  padding: 1.6rem 0;
}

.btn--small {
  width: 25rem;
  padding: 1.4rem 0;
}
</style>
