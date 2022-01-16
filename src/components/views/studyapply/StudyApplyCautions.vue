<template>
  <h2>신청 주의사항</h2>
  <ul>
    <li>글이 삭제된 경우 신청 내역을 확인할 수 없습니다.</li>
    <li>스터디장이 승인/거부 과정에서 회원님의 프로필을 열람할 수 있습니다.</li>
    <li>신청 취소는 스터디장 승인 이전에만 가능합니다.</li>
    <li>
      기타 자세한 사항은
      <a
        target="_blank"
        href="https://www.figma.com/file/cpTWmxP2n0d9mXzBuMMXp2/%5BMOAMOA%5D-%ED%8C%80%EC%9B%90%EA%B3%B5%EA%B0%9C?node-id=1%3A2"
        >스터디 신청 가이드라인</a
      >을 참고해 주세요.
    </li>
  </ul>
  <div class="checkbox-container">
    <img @click="toggleCheckBox" :src="require(`@/assets/img/${img}.svg`)" />
    <label @click="toggleCheckBox" for="checkbox"
      >주의사항을 모두 확인하였으며, 이에 동의합니다.</label
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
  computed: {
    img() {
      if (this.isChecked) return 'icon_checkbox_checked';
      else return 'icon_checkbox_unchecked';
    },
  },
  methods: {
    toggleCheckBox() {
      this.isChecked = !this.isChecked;
      this.$emit('toggled', this.isChecked);
    },
  },
};
</script>

<style scoped>
ul {
  margin: 2rem 0 3.9rem 4rem;
}

li {
  list-style: none;
  font-size: 1.6rem;
  line-height: 162.5%;
}

li:before {
  content: '';
  width: 0.4rem;
  height: 0.4rem;
  display: inline-block;
  background: var(--black);
  border-radius: 50%;
  margin: 0 1rem 0.4rem 0;
}

li a {
  font-weight: bold;
  text-decoration: underline;
  color: var(--black);
}

.checkbox-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.checkbox-container img {
  cursor: pointer;
  margin-left: 3.4rem;
  padding-right: 1.4rem;
}

.checkbox-container label {
  font-weight: bold;
  font-size: 1.6rem;
  color: var(--orange-dark);
  cursor: pointer;
}
</style>
