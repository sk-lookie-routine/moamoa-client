<template>
  <div class="form-container main-container" v-if="this.$store.state.token">
    <study-post-form></study-post-form>
  
  <the-footer></the-footer></div>
  <router-link to="/login" v-else></router-link>
</template>

<script>
import StudyPostForm from '@/components/views/studypost/StudyPostForm.vue';
export default {
  components: { StudyPostForm },
};
</script>

<style scoped>
.form-container {
  margin-top: 19.2rem;
}
</style>
