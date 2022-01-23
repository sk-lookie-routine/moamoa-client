<template>
  <div v-if="showDialog" class="background-container"></div>
  <div v-if="showDialog" class="dialog-container">
    <div class="dialog">
      <button class="close-btn">
        <img @click="closeBtnClick" src="@/assets/img/icon_close.svg" />
      </button>
      <header>
        <h3>{{ title }}</h3>
      </header>
      <main>
        <section class="dialog__content" v-html="content"></section>
        <section class="dialog__actions"><slot></slot></section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showDialog: {
      type: Boolean,
      required: true,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      required: true,
      default: '',
    },
  },
  methods: {
    closeBtnClick() {
      this.$emit('closed');
    },
  },
};
</script>

<style scoped>
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.158);
}

.dialog-container {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.dialog {
  z-index: 4;
  position: relative;
  width: 50rem;
  height: 27.5rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0px 4px 10px rgba(162, 162, 162, 0.25);
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: white;
}

.close-btn {
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  background: transparent;
}

header h3 {
  color: var(--orange-dark);
  text-align: center;
  margin: 1rem 0 2.2rem 0;
}

main {
  height: 72%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.dialog__content {
  font-size: 1.6rem;
  text-align: center;
  line-height: 175%;
}

.dialog__actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .dialog {
    width: 32.7rem;
    height: 19.2rem;
    padding: 1.5rem 1.6rem;
  }

  .close-btn {
    top: 1.6rem;
    right: 1.6rem;
  }

  header h3 {
    margin: 1rem 0 1rem 0;
  }

  .dialog__content {
    font-size: 1.4rem;
    line-height: 143%;
    word-break: keep-all;
  }
}
</style>
