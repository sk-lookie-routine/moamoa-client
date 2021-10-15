<template>
	<auth-header></auth-header>
	<auth-signup></auth-signup>
</template>

<script>
import AuthHeader from '@/components/common/AuthHeader.vue';
import AuthSignup from '@/components/auth/AuthSignup.vue';
export default {
	components: {
		AuthHeader,
		AuthSignup,
	},
};
</script>

<style></style>
