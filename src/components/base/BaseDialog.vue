<template>
	<div></div>
	<div class="dialog-container">
		<dialog open>
			<header>
				<slot name="header"
					><h3>{{ title }}</h3></slot
				>
			</header>
			<section class="dialog__content"><slot></slot></section>
			<section><slot name="actions"></slot></section>
		</dialog>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: false,
		},
	},
};
</script>

<style scoped>
div {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	z-index: 2;
	background-color: rgba(0, 0, 0, 0.062);
}

.dialog-container {
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
}

dialog {
	width: 50rem;
	height: 27.5rem;
	border-radius: 1rem;
	border: none;
	box-shadow: 0px 4px 10px rgba(162, 162, 162, 0.25);
	padding: 2.4rem;
}

.dialog__content {
	font-size: 1.6rem;
	text-align: center;
	line-height: 175%;
}
</style>
