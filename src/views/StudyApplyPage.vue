<template>
  <div v-if="this.$store.state.token">
    <study-apply-form></study-apply-form> <the-footer></the-footer>
  </div>
  <router-link to="/login" v-else></router-link>
</template>

<script>
import StudyApplyForm from '@/components/views/studyapply/StudyApplyForm.vue';

export default {
  components: { StudyApplyForm },
};
</script>

<style></style>
