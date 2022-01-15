<template>
  <div>
    <my-page-profile :editProfile="editProfile"></my-page-profile>
  </div>
</template>

<script>
import MyPageProfile from './MyPageProfile.vue';
export default {
  components: { MyPageProfile },
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
