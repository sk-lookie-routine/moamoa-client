<template>
	<ul class="tabs">
		<li class="tab tab--active">{{ firstTab }}</li>
		<div class="divide-line"></div>
		<li class="tab">{{ secondTab }}</li>
	</ul>
</template>

<script>
export default {
	props: ['firstTab', 'secondTab'],
};
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

.divide-line {
	width: 0.3rem;
	height: 2.4rem;
	margin: 0 1.2rem;
	background-color: var(--gray04);
}
</style>
