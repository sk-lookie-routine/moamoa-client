<template>
	<button>{{ label }}</button>
</template>

<script>
export default {
	props: ['label', 'size'],
};
</script>

<style scoped>
button {
	font-family: Noto Sans KR;
	font-size: 1.8rem;
	font-weight: bold;
	color: white;
	background-color: var(--orange-dark);
	box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
	border-radius: 1rem;
	padding: 1.6rem 0;
	width: 32rem;
}
</style>
