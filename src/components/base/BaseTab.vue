<template>
	<ul class="tabs">
		<li class="tab tab--active">신청한 스터디</li>
		<li class="tab">개설한 스터디</li>
	</ul>
</template>

<script>
export default {};
</script>

<style scoped>
.tabs {
	display: flex;
}
.tab {
	font-size: 2rem;
	font-weight: bold;
	color: var(--gray03);
}

.tab--active {
	color: var(--black);
}
</style>
