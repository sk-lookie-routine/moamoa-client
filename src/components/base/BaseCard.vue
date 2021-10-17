<template>
	<div class="card">
		<div class="card__thumbnail">
			<img src="@/assets/img/profile/profile_sc_p.svg" />
		</div>
		<div class="card__contents">
			<div class="card__title">무슨무슨 스터디</div>
			<div class="card__period">2021.12.03~2021.12.31</div>
			<div class="card__people">
				<img class="person-icon" src="@/assets/img//icon_person.svg" />
				<div class="card__people-count">4/5</div>
			</div>
			<ul class="card__tags">
				<base-tag tag-name="만약에 태그가 길다면"></base-tag>
				<base-tag tag-name="태그이름"></base-tag>
				<base-tag tag-name="만약에 태그가 길다면"></base-tag>
				<base-tag tag-name="태그이름"></base-tag>
			</ul>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
	box-shadow: 0.1rem 0.1rem 1rem rgba(170, 170, 170, 0.25);
	border-radius: 2rem;
	padding: 3.6rem;
	display: flex;
}

.card__thumbnail {
	padding: 1rem 3.9rem;
}

.card__thumbnail img {
	width: 10.8rem;
	height: 10.8rem;
}

.card__contents {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.card__title {
	font-size: 1.8rem;
	font-weight: bold;
}

.card__period {
	font-size: 1.4rem;
	color: var(--gray02);
}

.card__people {
	display: flex;
	align-items: center;
}

.person-icon {
	margin-right: 0.47rem;
}

.card__people-count {
	font-size: 1.4rem;
	color: var(--gray02);
}

.card__tags {
	width: 100%;
	position: relative;
	display: flex;
	flex-wrap: wrap;
	gap: 0.6rem;
	overflow: hidden;
}

.card__tags::after {
	position: absolute;
	right: 0;
	content: '';
	width: 8rem;
	height: 100%;
	white-space: nowrap;
	background: linear-gradient(to right, transparent, rgb(255, 255, 255));
}
</style>
