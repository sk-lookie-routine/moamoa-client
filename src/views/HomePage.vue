<template>
	<main>
		<the-carousel></the-carousel>
		<div class="tabs-and-btn-container">
			<base-tab
				firstTab="모집중인 스터디"
				secondTab="모집 완료된 스터디"
			></base-tab>
			<button class="all-btn">전체보기</button>
		</div>
		<ul class="card-list">
			<base-card></base-card>
			<base-card></base-card>
			<base-card></base-card>
		</ul>
	</main>
	<the-footer></the-footer>
</template>

<script>
import TheCarousel from '@/components/views/home/TheCarousel.vue';
export default {
	components: {
		TheCarousel,
	},
};
</script>

<style scoped>
.tabs-and-btn-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 4.4rem 2.4rem;
}

.all-btn {
	font-family: Spoqa Han Sans Neo;
	color: var(--gray01);
	font-size: 1.6rem;
	font-size: 16px;
	background-color: transparent;
}
</style>
