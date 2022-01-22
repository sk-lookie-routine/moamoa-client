<template>
  <div class="form-container main-container noselect">
    <study-post-form></study-post-form>
  </div>
  <the-footer></the-footer>
</template>

<script>
import StudyPostForm from '@/components/views/studypost/StudyPostForm.vue';
export default {
  components: { StudyPostForm },
  created() {
    if (!this.$store.state.auth.isLogin) {
      this.$router.push({
        name: 'login',
      });
      return;
    }
  },
};
</script>

<style scoped>
.form-container {
  margin-top: 19.2rem;
}
</style>
