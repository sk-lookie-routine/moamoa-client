<template>
	<ul class="tabs">
		<li class="tab-text tab--active" @click="tabClicked">{{ firstTab }}</li>
		<div class="divide-line"></div>
		<li class="tab-text" @click="tabClicked">{{ secondTab }}</li>
	</ul>
</template>

<script>
export default {
	props: ['firstTab', 'secondTab'],
	methods: {
		tabClicked() {
			this.$emit('tabClicked');
		},
	},
};
</script>

<style scoped>
.tabs {
	display: flex;
}

.tabs:hover {
	cursor: pointer;
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
