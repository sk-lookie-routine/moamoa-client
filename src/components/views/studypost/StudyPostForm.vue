<template>
  <form @submit.prevent="submitForm">
    <div class="input-container box--underline bottom-padding">
      <input
        v-model="post.title"
        type="text"
        name="title"
        placeholder="스터디 제목"
        @keypress.enter.prevent
        @input="changeTitleContent"
      />
    </div>
    <div class="error-text" :class="{ invisible: isTitleValidate }">
      {{ titleValidationText }}
    </div>
    <div class="input-container box--underline bottom-padding">
      <label for="deadline">모집 마감 일자 :</label>
      <date-picker
        name="deadline"
        v-model="post.deadLine"
        :enableTimePicker="false"
        :autoApply="true"
        placeholder="날짜를 선택하세요."
        @update:modelValue="formatDeadlineDate"
      ></date-picker>
    </div>
    <div class="error-text" :class="{ invisible: post.deadLine }">
      필수 입력 항목입니다.
    </div>
    <div class="input-container box--underline bottom-padding">
      <label for="period">스터디 기간 :</label>
      <date-picker
        name="period"
        v-model="rangeDate"
        :enableTimePicker="false"
        :range="true"
        :autoApply="true"
        placeholder="날짜를 선택하세요."
        @update:modelValue="formatRangeDate"
      ></date-picker>
    </div>
    <div class="error-text" :class="{ invisible: rangeDate }">
      필수 입력 항목입니다.
    </div>
    <div class="input-container box--underline bottom-padding select-container">
      <label for="count">모집 인원:</label>
      <select v-model="post.memberCount" name="count">
        <option
          v-for="optionValue in memberCountOptions"
          v-bind:value="optionValue"
          :key="optionValue"
        >
          {{ optionValue }}명
        </option>
      </select>
    </div>
    <div class="input-container box--underline bottom-padding">
      <label for="goal">스터디 목표:</label>
      <input
        v-model="post.goal"
        type="text"
        name="goal"
        placeholder="한 줄로 소개하세요."
        @keypress.enter.prevent
        @input="changeGoalContent"
      />
    </div>
    <div class="error-text" :class="{ invisible: isGoalValidate }">
      {{ goalValidationText }}
    </div>
    <div class="textarea-container">
      <div class="label-and-counting">
        <label for="introduction">스터디 소개</label>
        <div class="counting">{{ post.info.length }}/300</div>
      </div>
      <textarea
        v-model="post.info"
        placeholder="스터디에서 지키고 싶은 규칙 등을 자유롭게 서술해 주세요!"
        name="introduction"
        rows="12"
        @input="changeInfoContent"
      ></textarea>
      <div class="error-text" :class="{ invisible: isInfoValidate }">
        {{ infoValidationText }}
      </div>
    </div>
    <div class="textarea-container">
      <label for="proceedway">스터디 진행 방식</label>
      <textarea
        v-model="post.how"
        placeholder="희망 요일 및 시간대, 이용할 플랫폼, 캠 ON/OFF 등 스터디를 어떤 식으로 진행할지 알려주세요!"
        name="proceedway"
        rows="7"
        @input="changeHowContent"
      ></textarea>
      <div class="error-text" :class="{ invisible: isHowValidate }">
        {{ howValidationText }}
      </div>
    </div>
    <div class="textarea-container">
      <label for="comments">신청자에게 한마디!</label>
      <textarea
        v-model="post.comment"
        placeholder="스터디 신청자가 폼에 작성해주었으면 하는 것들에 대해 작성해주셔도 좋아요."
        name="introduction"
        rows="7"
        @input="changeCommentContent"
      ></textarea>
      <div class="error-text" :class="{ invisible: isCommentValidate }">
        {{ commentValidationText }}
      </div>
    </div>
    <div class="tag-container">
      <label for="tag">태그</label>
      <div class="tags">
        <span class="tag-icon">#</span>
        <base-tag
          v-for="(tag, index) in post.hashTags"
          :key="index"
          :canRemove="true"
          @delete="removeTag(index)"
          >{{ tag }}
        </base-tag>
        <input
          v-if="!isTagLengthLongEnough"
          type="text"
          name="tag"
          placeholder="태그를 입력하세요."
          v-model="tagInput"
          @keydown.enter.prevent="addTag"
        />
      </div>
    </div>
    <div class="btn-container">
      <base-button :disabled="isSubmitBtnDisabled">모집글 등록하기</base-button>
    </div>
  </form>
</template>

<script>
import { createPost, fetchPostById, updatePost } from '@/api/posts.js';

export default {
  data() {
    return {
      post: {
        title: '',
        info: '',
        goal: '',
        how: '',
        comment: '',
        image: this.$store.state.auth.image,
        deadLine: null,
        startDate: null,
        endDate: null,
        studyType: 'READY',
        userSeq: this.$store.state.auth.userSeq,
        hashTags: [],
        memberCount: 1,
        linkStudy: null,
        linkNotion: null,
        linkChat: null,
      },
      errorMessages: {
        default: 'default',
        noValue: '필수 입력 항목입니다.',
        wordCountUnder15: '최소 15자~최대 300자 가능합니다.',
        wordCountOver15: '최대 15자 가능합니다.',
        wordCountOver30: '30자 이내로 입력해주세요.',
        wordCountOver300: '300자 이내로 입력해주세요.',
      },
      rangeDate: null,
      memberCountOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tagInput: '',
      isTagLengthLongEnough: false,
    };
  },
  computed: {
    isSubmitBtnDisabled() {
      if (
        this.isTitleValidate &&
        this.post.deadLine &&
        this.post.startDate &&
        this.post.endDate &&
        this.isGoalValidate &&
        this.isInfoValidate &&
        this.isHowValidate &&
        this.isCommentValidate
      )
        return false;
      else return true;
    },
    isTitleValidate() {
      if (
        this.post.title &&
        this.post.title.length > 0 &&
        this.post.title.length <= 15
      )
        return true;
      else return false;
    },
    titleValidationText() {
      if (!this.post.title || this.post.title.length <= 0) {
        return this.errorMessages.noValue;
      } else if (this.post.title.length > 15) {
        return this.errorMessages.wordCountOver15;
      }
      return this.errorMessages.default;
    },
    isGoalValidate() {
      if (
        this.post.goal &&
        this.post.goal.length > 0 &&
        this.post.goal.length <= 30
      )
        return true;
      else return false;
    },
    goalValidationText() {
      if (!this.post.goal || this.post.goal.length <= 0) {
        return this.errorMessages.noValue;
      } else if (this.post.goal.length > 30) {
        return this.errorMessages.wordCountOver30;
      }
      return this.errorMessages.default;
    },
    isInfoValidate() {
      if (
        this.post.info &&
        this.post.info.length >= 15 &&
        this.post.info.length <= 300
      )
        return true;
      else return false;
    },
    infoValidationText() {
      if (!this.post.info || this.post.info.length <= 0) {
        return this.errorMessages.noValue;
      } else if (this.post.info.length < 15) {
        return this.errorMessages.wordCountUnder15;
      } else if (this.post.info.length > 300) {
        return this.errorMessages.wordCountOver300;
      }
      return this.errorMessages.default;
    },
    isHowValidate() {
      if (
        this.post.how &&
        this.post.how.length > 0 &&
        this.post.how.length <= 300
      )
        return true;
      else return false;
    },
    howValidationText() {
      if (!this.post.how || this.post.how.length <= 0) {
        return this.errorMessages.noValue;
      } else if (this.post.how.length > 300) {
        return this.errorMessages.wordCountOver300;
      }
      return this.errorMessages.default;
    },
    isCommentValidate() {
      if (
        this.post.comment &&
        this.post.comment.length > 0 &&
        this.post.comment.length <= 300
      )
        return true;
      else return false;
    },
    commentValidationText() {
      if (!this.post.comment || this.post.comment.length <= 0) {
        return this.errorMessages.noValue;
      } else if (this.post.comment.length > 300) {
        return this.errorMessages.wordCountOver300;
      }
      return this.errorMessages.default;
    },
  },
  watch: {
    'post.hashTags': {
      handler(newValue) {
        if (newValue.length >= 10) {
          this.isTagLengthLongEnough = true;
        } else {
          this.isTagLengthLongEnough = false;
        }
      },
      deep: true,
    },
  },
  methods: {
    showPage() {
      this.$router.push({
        name: 'posts',
      });
    },
    async submitForm() {
      try {
        if (this.$route.params.postId == 'new') {
          await createPost(this.post);
        } else {
          await updatePost(this.post);
        }
        this.showPage();
      } catch (e) {
        console.error(e);
      }
    },
    formatDeadlineDate() {
      if (this.post.deadLine)
        this.post.deadLine = this.formatDate(this.post.deadLine);
    },
    formatRangeDate() {
      if (this.rangeDate) {
        this.post.startDate = this.formatDate(this.rangeDate[0]);
        this.post.endDate = this.formatDate(this.rangeDate[1]);
      } else {
        this.post.startDate = null;
        this.post.endDate = null;
      }
    },
    addTag() {
      if (this.tagInput === '') return;
      this.post.hashTags.push(this.tagInput);
      this.tagInput = '';
    },
    removeTag(index) {
      this.post.hashTags.splice(index, 1);
    },
    formatDate(date) {
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return year + '-' + month + '-' + day;
    },
    changeTitleContent(e) {
      this.post.title = e.target.value;
    },
    changeGoalContent(e) {
      this.post.goal = e.target.value;
    },
    changeInfoContent(e) {
      this.post.info = e.target.value;
    },
    changeHowContent(e) {
      this.post.how = e.target.value;
    },
    changeCommentContent(e) {
      this.post.comment = e.target.value;
    },
    async fetchData() {
      const postResponse = await fetchPostById(this.$route.params.postId);
      this.post = postResponse.data.content[0];
      this.rangeDate = [
        new Date(this.post.startDate),
        new Date(this.post.endDate),
      ];
    },
  },
  async created() {
    if (this.$route.params.postId != 'new') {
      await this.fetchData();
    }
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
}

.input-container label {
  margin-right: 0.8rem;
}

.input-container:first-child input {
  font-size: 2.2rem;
  font-weight: bold;
}

select[name='count'] {
  width: 15rem;
  padding: 0.25rem 0 0.25rem 0.5rem;
  border-radius: 0.4rem;
  outline: none;
  border: 0.15rem solid var(--gray02);
  font-size: 1.4rem;
  font-family: Noto Sans KR;
  font-weight: bold;
  color: var(--black);
}

select[name='count']:focus {
  outline: 0.17rem solid var(--black);
}

select[name='count'] option {
  color: var(--black);
  padding: 4rem 0.5rem;
  font-size: 1.4rem;
  font-family: Noto Sans KR;
}

.label-and-counting {
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
}

.counting {
  font-family: Spoqa Han Sans Neo;
  font-size: 1.4rem;
  color: var(--gray00);
}

.textarea-container textarea,
.tags {
  margin-top: 1rem;
}

.error-text {
  margin-top: 1rem;
}

.input-with-no-error-container {
  margin-bottom: 4.6rem;
}

.input-container,
.textarea-container,
.tag-container {
  margin-top: 2.1rem;
}

.input-container:nth-child(3) {
  margin-top: 5.2rem;
}

.select-container {
  margin-bottom: 4rem;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin: 7.2rem 0 26rem 0;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1.1rem 1.6rem;
  border: 0.1rem solid var(--gray02);
  border-radius: 1rem;
  gap: 1rem;
}

.tag-icon {
  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 2.4rem;
  margin-right: 0.3rem;
}

.tags input {
  font-size: 1.6rem;
  width: auto;
}

.invisible {
  visibility: hidden;
}
</style>
