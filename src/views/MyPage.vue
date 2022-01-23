<template>
  <router-view :key="$route.fullPath"
    ><my-page-profile></my-page-profile>
    <div class="divider"></div>
    <my-page-bottom-box></my-page-bottom-box
  ></router-view>
</template>

<script>
import MyPageProfile from '@/components/views/mypage/MyPageProfile.vue';
import MyPageBottomBox from '@/components/views/mypage/MyPageBottomBox.vue';
export default {
  components: { MyPageProfile, MyPageBottomBox },
};
</script>

<style scoped>
.divider {
  border-bottom: 1rem solid #eff0f3;
}
</style>
