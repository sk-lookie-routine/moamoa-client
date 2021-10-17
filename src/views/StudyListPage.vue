<template>
	<main-header></main-header>
	<div class="box-with-underline"><h1>스터디 목록</h1></div>
	<search-bar></search-bar>
	<base-tab></base-tab>
	<base-card></base-card>
</template>

<script>
import SearchBar from '@/components/views/studylist/SearchBar.vue';

export default {
	components: { SearchBar },
};
</script>

<style scoped></style>
