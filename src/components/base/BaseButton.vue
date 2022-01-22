<template>
  <button :class="buttonClass" :disabled="disable">
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
    disable: {
      type: Boolean,
      default: false,
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
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  background-color: var(--orange-dark);
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
}

button:disabled {
  background-color: var(--gray03);
}

.btn--small {
  width: 25rem;
  padding: 1.4rem 0;
}

.btn--big {
  width: 32rem;
  padding: 1.6rem 0;
}

.btn--red {
  background-color: var(--orange-dark);
}

.btn--gray {
  background-color: var(--gray02);
}

@media (max-width: 768px) {
  button {
    font-size: 1.6rem;
  }

  .btn--big {
    width: 28.8rem;
    padding: 1.6rem 0;
  }

  .btn--small {
    width: 14.8rem;
    padding: 1.2rem 0;
  }
}
</style>
