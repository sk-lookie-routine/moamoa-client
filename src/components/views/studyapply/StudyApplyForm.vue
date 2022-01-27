<template>
  <div>
    <base-dialog
      :showDialog="showDialog"
      @closed="alertClosed"
      :title="dialog.title"
      :content="dialog.content"
    >
      <template v-if="!agreeWithCautions">
        <base-dialog-button @click="showDialog = false">
          확인
        </base-dialog-button>
      </template>
      <template v-else-if="finishApply">
        <base-dialog-button @click="showPage">확인</base-dialog-button>
      </template>
      <template v-else>
        <base-dialog-button
          size="small"
          color="gray"
          @click="showDialog = false"
          >취소</base-dialog-button
        >
        <base-dialog-button size="small" @click="submitForm">
          신청
        </base-dialog-button>
      </template>
    </base-dialog>
    <div class="main-container">
      <header>
        <div class="box--underline bottom-padding">
          <h1>{{ title }}</h1>
        </div>
      </header>
      <section class="textarea-container">
        <label for="applyment">신청자에게 한마디!</label>
        <textarea
          placeholder="모집글의 '신청자에게 한마디!'를 참고하여 자신에 대한 소개를 작성해보세요!"
          name="applyment"
          rows="7"
          v-model="content"
          @input="changeApplyContent"
        ></textarea>
        <div class="error-text" :class="{ invisible: validate.isValidate }">
          {{ validate.text }}
        </div>
      </section>
      <section class="cautions-container">
        <study-apply-cautions
          @toggled="toggleAgreeWithCautions"
        ></study-apply-cautions>
      </section>
      <section class="button-container">
        <base-button @click="handleBtnCllcked" :disabled="isApplyBtnDisabled"
          >스터디 신청하기</base-button
        >
      </section>
    </div>
  </div>
</template>

<script>
import StudyApplyCautions from '@/components/views/studyapply/StudyApplyCautions.vue';
import { createJoin } from '@/api/join';
import { JOIN_TYPE } from '@/utils/constValue';

export default {
  components: { StudyApplyCautions },
  props: {
    postTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      title: '',
      content: '',
      validate: {
        isValidate: true,
        text: '유효성 검사',
      },
      showDialog: false,
      agreeWithCautions: false,
      finishApply: false,
      dialog: {
        title: null,
        content: '',
      },
    };
  },
  computed: {
    isApplyBtnDisabled() {
      if (this.content === '' || !this.validate.isValidate) return true;
      else return false;
    },
  },
  methods: {
    alertClosed() {
      if (this.finishApply) {
        this.showDialog = false;
        this.showPage();
      } else {
        this.showDialog = false;
      }
    },
    showPage() {
      this.showDialog = false;
      this.$router.push({
        name: 'post',
        params: {
          postId: this.$route.query.postSeq,
        },
      });
    },
    checkValidation() {
      if (this.content == '') {
        this.validate.isValidate = false;
        this.validate.text = '필수 입력 항목입니다.';
      } else if (this.content.length > 300) {
        this.validate.isValidate = false;
        this.validate.text = '300자 이내로 입력해 주세요.';
      } else {
        this.validate.isValidate = true;
      }
    },
    changeApplyContent(e) {
      this.content = e.target.value;
      this.checkValidation();
    },
    toggleAgreeWithCautions(value) {
      this.agreeWithCautions = value;
    },
    handleBtnCllcked() {
      if (!this.agreeWithCautions) {
        this.dialog.title = '';
        this.dialog.content = '신청 주의사항에 동의해 주세요.';
        this.showDialog = true;
      } else {
        this.dialog.title = '잠깐!!';
        this.dialog.content = `스터디 모집 마감 이후에는 취소할 수 없어요.<br/>신청하시겠어요?`;
        this.showDialog = true;
      }
    },
    async submitForm() {
      const join = {
        postSeq: this.$route.query.postSeq,
        userSeq: this.$store.state.auth.userSeq,
        comment: this.content,
        joinType: JOIN_TYPE.WAIT,
      };
      await createJoin(join);
      this.finishApply = true;
      this.dialog.title = '';
      this.dialog.content =
        '신청 완료되었습니다.<br/>승인/거부는 [마이페이지]에서 확인할 수 있어요.';
      this.showDialog = true;
    },
  },
  created() {
    this.title = this.$route.query.title;
  },
};
</script>

<style scoped>
header {
  margin-bottom: 10rem;
}

textarea {
  margin-top: 1rem;
}

.error-text {
  margin-top: 1rem;
  margin-bottom: 3rem;
}

.cautions-container {
  margin-bottom: 7.2rem;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.invisible {
  visibility: hidden;
}

@media (max-width: 768px) {
  header {
    margin-bottom: 4.4rem;
  }

  .error-text {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  .cautions-container {
    margin-bottom: 5.6rem;
  }
}
</style>
