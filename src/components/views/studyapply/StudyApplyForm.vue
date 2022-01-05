<template>
  <div>
    <base-dialog v-if="hasApplied">
      <template #default>
        신청 완료되었습니다.<br />승인/거부는 [마이페이지]에서 확인할 수 있어요.
      </template>
    </base-dialog>
    <div class="main-container">
      <header>
        <div class="box--underline bottom-padding">
          <h1>{{ title }}</h1>
        </div>
      </header>
      <section class="textarea-container">
        <label for="applyment">신청자에게 한마디!</label>
        <textarea
          placeholder="모집글의 '신청자에게 한마디!'를 참고하여 자신에 대한 소개를 작성해보세요!"
          name="applyment"
          rows="7"
          v-model="content"
        ></textarea>
        <div class="error-text">필수 입력 항목입니다.</div>
      </section>
      <section class="cautions-container">
        <study-apply-cautions></study-apply-cautions>
      </section>
      <section class="button-container">
        <base-button @click="submitForm">스터디 신청하기</base-button>
      </section>
    </div>
  </div>
</template>

<script>
import StudyApplyCautions from '@/components/views/studyapply/StudyApplyCautions.vue';
import { createJoin } from '@/api/room.js';

export default {
  components: { StudyApplyCautions },
  props: {
    postTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      title: '',
      content: '',
      hasApplied: false,
    };
  },
  methods: {
    submitForm() {
      const join = {
        studySeq: this.$route.params.postId,
        userSeq: 4,
        comment: this.content,
        joinType: 'WAIT',
      };
      createJoin(join);
    },
  },
  created() {
    this.title = this.$route.query.title;
  },
};
</script>

<style scoped>
header {
  margin-bottom: 10rem;
}

textarea {
  margin-top: 1rem;
}

.error-text {
  margin-top: 1rem;
  margin-bottom: 3rem;
}

.cautions-container {
  margin-bottom: 7.2rem;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
