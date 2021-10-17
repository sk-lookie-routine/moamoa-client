<template>
	<div class="tag">{{ tagName }}</div>
</template>

<script>
export default {
	props: ['tagName'],
};
</script>

<style scoped>
.tag {
	font-size: 1.2rem;
	font-weight: bold;
	line-height: 1.4em;
	color: var(--gray01);
	background-color: var(--gray05);
	padding: 0.8rem 1.6rem;
	border-radius: 1rem;
}
</style>
