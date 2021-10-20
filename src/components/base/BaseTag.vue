<template>
	<div class="tag">
		<div><slot></slot></div>
		<img v-if="canRemove" src="@/assets/img/icon_cancel.svg" />
	</div>
</template>

<script>
export default {
	props: {
		canRemove: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style scoped>
.tag {
	font-size: 1.2rem;
	font-weight: bold;
	line-height: 1.4em;
	white-space: nowrap;
	color: var(--gray01);
	background-color: var(--gray05);
	padding: 0.8rem 1.6rem;
	border-radius: 1rem;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}
</style>
