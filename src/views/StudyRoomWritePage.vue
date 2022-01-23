<template>
  <div class="form-container main-container">
    <study-room-form></study-room-form>
  </div>
  <the-footer></the-footer>
</template>

<script>
import StudyRoomForm from '@/components/views/studyroom/StudyRoomForm.vue';
import { fetchRoomByStudySeq } from '@/api/room';

export default {
  components: { StudyRoomForm },
  methods: {
    async checkValidate() {
      //로그인을 안했을 경우
      if (!this.$store.state.auth.isLogin) {
        this.$router.push({
          name: 'login',
        });
        return;
      }
      //스터디 주인이 아닌 경우
      const res = await fetchRoomByStudySeq(this.$route.query.studySeq);
      if (res.data.content[0].userSeq != this.$store.state.auth.userSeq) {
        this.$router.go(-1);
        return;
      }
    },
  },
  created() {
    this.checkValidate();
  },
};
</script>

<style scoped>
.form-container {
  margin-top: 19.2rem;
}

@media (max-width: 768px) {
  .form-container {
    margin-top: 9.5rem;
  }
}
</style>
