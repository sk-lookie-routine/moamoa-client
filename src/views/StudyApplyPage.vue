<template>
  <study-apply-form></study-apply-form>
  <the-footer></the-footer>
</template>

<script>
import StudyApplyForm from '@/components/views/studyapply/StudyApplyForm.vue';
import { fetchJoinByPostSeqAndUserSeq } from '@/api/join';

export default {
  components: { StudyApplyForm },
  methods: {
    checkLogin() {
      if (!this.$store.state.auth.isLogin) {
        this.$router.push({
          name: 'login',
        });
      }
    },
    async checkApplied() {
      const res = await fetchJoinByPostSeqAndUserSeq(
        this.$route.query.postSeq,
        this.$route.query.userSeq,
      );
      if (!(res.status == 204 || res.data.content == undefined)) {
        this.$router.go(-1);
        return;
      }
    },
  },
  created() {
    //로그인을 안했을 경우
    this.checkLogin();
    //이미 신청을 한 사람일 경우
    this.checkApplied();
  },
};
</script>

<style></style>
