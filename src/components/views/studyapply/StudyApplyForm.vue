<template>
	<base-dialog v-if="hasApplied">
		<template #default>
			신청 완료되었습니다.<br />승인/거부는 [마이페이지]에서 확인할 수 있어요.
		</template>
	</base-dialog>
	<div class="main-container">
		<header>
			<div class="box--underline bottom-padding">
				<h1>타이틀</h1>
			</div>
		</header>
		<section class="textarea-container">
			<label for="applyment">신청자에게 한마디!</label>
			<textarea
				placeholder="모집글의 '신청자에게 한마디!'를 참고하여 자신에 대한 소개를 작성해보세요!"
				name="applyment"
				rows="7"
			></textarea>
			<div class="error-text">필수 입력 항목입니다.</div>
		</section>
		<section>
			<study-apply-cautions></study-apply-cautions>
		</section>
		<section>
			<base-button>스터디 신청하기</base-button>
		</section>
	</div>
</template>

<script>
import StudyApplyCautions from '@/components/views/studyapply/StudyApplyCautions.vue';

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
			hasApplied: true,
		};
	},
};
</script>

<style></style>
