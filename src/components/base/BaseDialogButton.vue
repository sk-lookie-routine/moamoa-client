<template>
  <button :class="buttonClass"><slot></slot></button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'big',
      validator: function (value) {
        return ['big', 'small'].indexOf(value) !== -1;
      },
    },
    color: {
      type: String,
      default: 'red',
      validator: function (value) {
        return ['red', 'gray'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        'btn--big': this.size === 'big',
        'btn--small': this.size === 'small',
        'btn--red': this.color === 'red',
        'btn--gray': this.color === 'gray',
      };
    },
  },
};
</script>

<style scoped>
button {
  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 1.6rem;
  color: white;
  border-radius: 1rem;
  padding: 1rem 0;
}

.btn--big {
  width: 18rem;
}

.btn--small {
  width: 8.4rem;
}

.btn--red {
  background: var(--orange-dark);
}

.btn--gray {
  background: var(--gray03);
}

@media (max-width: 768px) {
  button {
    font-size: 1.4rem;
  }
}
</style>
