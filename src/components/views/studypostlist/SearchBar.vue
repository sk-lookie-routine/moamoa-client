<template>
  <h2>필요한 스터디를 빠르게 찾아보세요!</h2>
  <form action="submit">
    <label for="search"
      ><img class="search-icon" src="@/assets/img/icon_search.svg"
    /></label>
    <div v-if="isSearched" class="keyword">
      <div>{{ value }}</div>
      <img @click="removeKeyword" src="@/assets/img/icon_cancel.svg" />
    </div>
    <input
      v-else
      @keypress.enter.prevent="searched"
      v-model="value"
      type="text"
      name="search"
      placeholder="제목, 태그로 검색하세요."
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      isSearched: false,
    };
  },
  methods: {
    searched() {
      this.isSearched = true;
      this.$emit('searched', this.value);
    },
    removeKeyword() {
      this.value = '';
      this.isSearched = false;
      this.$emit('searched', this.value);
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 1.6rem;
}

form {
  border: 0.1rem solid var(--gray02);
  padding: 0 1.3rem;
  height: 6rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
}

.search-icon {
  margin-right: 0.5rem;
}

.keyword {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  background-color: var(--gray06);
  font-family: Spoqa Han Sans Neo;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0.9rem 1.6rem;
  margin-left: 0.5rem;
}

@media (max-width: 768px) {
  h2 {
    margin-bottom: 1rem;
  }

  form {
    padding: 1.4rem 1.1rem;
  }

  .search-icon {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.5rem;
  }
}
</style>
