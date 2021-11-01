<template>
  <h2>신청 주의사항</h2>
  <ul>
    <li>글이 삭제된 경우 신청 내역을 확인할 수 없습니다.</li>
    <li>스터디장이 승인/거부 과정에서 회원님의 프로필을 열람할 수 있습니다.</li>
    <li>신청 취소는 스터디장 승인 이전에만 가능합니다.</li>
    <li>기타 자세한 사항은 <a>스터디 신청 가이드라인</a>을 참고해 주세요.</li>
  </ul>
  <div class="checkbox-container">
    <input
      type="checkbox"
      id="checkbox"
      v-model="isChecked"
      @change="emitCheckboxEvent"
    />
    <label for="checkbox">주의사항을 모두 확인하였으며, 이에 동의합니다.</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    emitCheckboxEvent() {
      this.isChecked ? this.$emit('checked') : this.$emit('notChecked');
    },
  },
};
</script>

<style scoped>
ul {
  margin: 2rem 0 3.9rem 4rem;
}

li {
  list-style-type: disc;
  font-size: 1.6rem;
  line-height: 162.5%;
}

li a {
  font-weight: bold;
  text-decoration: underline;
}

.checkbox-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

input[type='checkbox'] + label {
  cursor: pointer;
}

input[type='checkbox'] {
  width: 1.8rem;
  height: 1.8rem;
  margin: 0 1.4rem 0 1.5rem;
  border: 1 px solid #cbcbcb;
}

input[type='checkbox']:checked {
  background-color: var(--orange-dark);
}

label {
  font-weight: bold;
  font-size: 1.6rem;
  color: var(--orange-dark);
}
</style>
