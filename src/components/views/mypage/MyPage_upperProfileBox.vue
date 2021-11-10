<template>
  <div>
    <my-page-default :editProfile="editProfile"></my-page-default>
  </div>
</template>

<script>
import MyPageDefault from './MyPage_default.vue';
export default {
  components: { MyPageDefault },
  data() {
    return {};
  },
  methods: {
    editProfile() {
      this.$router.replace('edit');
    },
  },
};
</script>

<style scoped></style>
