<template>
	<div class="main-container">
		<div class="box-with-underline bottom-padding"><h1>스터디룸</h1></div>
		<div class="tabs-container">
			<base-tab firstTab="참여중인 스터디" secondTab="완료한 스터디"></base-tab>
		</div>
		<ul class="card-list">
			<base-card></base-card>
			<base-card></base-card>
			<base-card></base-card>
		</ul>
	</div>
	<the-footer></the-footer>
</template>

<script>
export default {};
</script>

<style scoped>
.tabs-container {
	margin: 9.2rem 0 2.4rem 0;
}
</style>
