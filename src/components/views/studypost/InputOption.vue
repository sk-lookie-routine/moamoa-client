<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}명
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        :class="{ disabled: option < disableNum }"
        @click="clicked(option)"
      >
        {{ option }}명
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    defaultValue: {
      type: Number,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      disableNum: 0,
      selected: this.defaultValue
        ? this.defaultValue
        : this.options.length > 0
        ? this.options[0]
        : null,
      firstUpdated: false,
      open: false,
    };
  },
  methods: {
    clicked(value) {
      if (!(value < this.disableNum)) {
        this.selected = value;
        this.open = false;
        this.$emit('input', value);
      }
    },
  },
  mounted() {
    this.$emit('input', this.selected);
  },
  updated() {
    if (!this.firstUpdated) {
      this.selected = this.defaultValue
        ? this.defaultValue
        : this.options.length > 0
        ? this.options[0]
        : null;
      this.disableNum = this.defaultValue;
      this.firstUpdated = true;
    }
  },
};
</script>

<style scoped>
.custom-select {
  width: 15rem;
  position: relative;
  border-radius: 0.4rem;
  outline: none;
  border: 0.15rem solid var(--gray02);
  font-size: 1.4rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  color: var(--black);
}

.custom-select .selected {
  padding: 0.5rem 0 0.5rem 1.5rem;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected:after {
  position: absolute;
  content: '';
  top: 1rem;
  right: 0.7rem;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: var(--black) transparent transparent transparent;
}

.custom-select .items {
  width: 15rem;
  border-radius: 0.4rem;
  overflow: hidden;
  position: absolute;
  border: 0.15rem solid var(--gray02);
  background-color: white;
  left: 0;
  top: 3rem;
  z-index: 1;
}

.custom-select .items div {
  padding: 0.7rem 0 0.7rem 1.5rem;
  color: var(--gray01);
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: var(--orange-dark);
  color: white;
}

.custom-select .items .disabled {
  background-color: var(--gray06);
  color: var(--gray02);
}

.custom-select .items .disabled:hover {
  background-color: var(--gray06);
  color: var(--gray02);
  cursor: auto;
}

.selectHide {
  display: none;
}

@media (max-width: 768px) {
  .custom-select {
    width: 13rem;
    font-size: 1.2rem;
  }

  .custom-select .selected {
    padding: 0.6rem 0 0.6rem 1.2rem;
  }

  .custom-select .selected:after {
    top: 1rem;
    right: 0.7rem;
  }

  .custom-select .items {
    width: 13rem;
    top: 2.5rem;
  }

  .custom-select .items div {
    padding: 0.6rem 0 0.6rem 1.2rem;
  }
}
</style>
