<template>
	<div class="form-container main-container">
		<study-post-form></study-post-form>
	</div>
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
