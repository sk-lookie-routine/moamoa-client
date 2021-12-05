<template>
  <auth-modal v-if="isAllFilled"></auth-modal>
  <auth-signup-form></auth-signup-form>
</template>

<script>
import AuthModal from "@/components/views/auth/AuthModal.vue";
import AuthSignupForm from "@/components/views/auth/AuthSignupForm.vue";
export default {
  components: { AuthModal, AuthSignupForm },
};
</script>

<style scoped></style>
