<template>
  <div class="form-container main-container noselect">
    <study-post-form></study-post-form>
  </div>
  <the-footer></the-footer>
</template>

<script>
import StudyPostForm from '@/components/views/studypost/StudyPostForm.vue';
import { fetchPostByPostSeq } from '@/api/post';

export default {
  components: { StudyPostForm },
  methods: {
    async checkValidate() {
      //로그인을 안했을 경우
      if (!this.$store.state.auth.isLogin) {
        this.$router.push({
          name: 'login',
        });
        return;
      }

      //글 작성자가 아닌 경우
      const res = await fetchPostByPostSeq(this.$route.query.postSeq);
      if (
        this.$route.query.postSeq != undefined &&
        res.data.content[0].userSeq != this.$store.state.auth.userSeq
      ) {
        this.$router.go(-1);
        return;
      }
    },
  },
  created() {
    this.checkValidate();
  },
};
</script>

<style scoped>
.form-container {
  margin-top: 19.2rem;
}

@media (max-width: 768px) {
  .form-container {
    margin-top: 9.5rem;
  }
}
</style>
