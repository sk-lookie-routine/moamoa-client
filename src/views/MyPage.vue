<template>
  <router-view :key="$route.fullPath"
    ><my-page-profile></my-page-profile>
    <div class="divider" v-if="handleDivider"></div>
    <my-page-bottom-box></my-page-bottom-box
  ></router-view>
</template>

<script>
import MyPageProfile from '@/components/views/mypage/MyPageProfile.vue';
import MyPageBottomBox from '@/components/views/mypage/MyPageBottomBox.vue';
import { getUserByUserSeq } from '@/api/user.js';
export default {
  components: { MyPageProfile, MyPageBottomBox },
  data() {
    return {
      user: null,
      handleDivider: false,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await getUserByUserSeq(this.userSeq);
      this.user = response.data.content[0];

      if (this.userSeq == this.$store.state.auth.userSeq) {
        this.handleDivider = true;
      } else {
        this.handleDivider = false;
      }
    },
  },
};
</script>

<style scoped>
.divider {
  border-bottom: 1rem solid #eff0f3;
}
</style>
