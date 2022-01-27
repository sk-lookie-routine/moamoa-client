<template>
  <form @submit.prevent="submitForm">
    <div class="title-input input-container box--underline bottom-padding">
      <input
        v-model="post.title"
        type="text"
        name="title"
        placeholder="스터디 제목"
        @keypress.enter.prevent
        @input="changeTitleContent"
      />
    </div>
    <div
      class="error-text"
      :class="{ invisible: !hasChanged.title || isTitleValidate }"
    >
      {{ titleValidationText }}
    </div>
    <div class="input-container box--underline bottom-padding">
      <label for="deadline">모집 마감 일자 :</label>
      <date-picker
        name="deadline"
        v-model="post.deadLine"
        :enableTimePicker="false"
        :autoApply="true"
        :minDate="new Date()"
        placeholder="날짜를 선택하세요."
        @update:modelValue="formatDeadlineDate"
      ></date-picker>
    </div>
    <div
      class="error-text"
      :class="{ invisible: !hasChanged.deadLine || isDeadLineValidate }"
    >
      {{ deadLineValidationText }}
    </div>
    <div class="input-container box--underline bottom-padding">
      <label for="period">스터디 기간 :</label>
      <date-picker
        name="period"
        v-model="rangeDate"
        :enableTimePicker="false"
        :range="true"
        :autoApply="true"
        :minDate="new Date()"
        placeholder="날짜를 선택하세요."
        @update:modelValue="formatRangeDate"
      ></date-picker>
    </div>
    <div
      class="error-text"
      :class="{ invisible: !hasChanged.rangeDate || rangeDate }"
    >
      필수 입력 항목입니다.
    </div>
    <div class="input-container box--underline bottom-padding select-container">
      <label for="count">모집 인원:</label>
      <input-option
        :options="memberCountOptions"
        :defaultValue="post.memberCount"
        @input="setCountValue"
      ></input-option>
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
    <div
      class="error-text"
      :class="{ invisible: !hasChanged.goal || isGoalValidate }"
    >
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
      <div
        class="error-text"
        :class="{ invisible: !hasChanged.info || isInfoValidate }"
      >
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
      <div
        class="error-text"
        :class="{ invisible: !hasChanged.how || isHowValidate }"
      >
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
      <div
        class="error-text"
        :class="{ invisible: !hasChanged.comment || isCommentValidate }"
      >
        {{ commentValidationText }}
      </div>
    </div>
    <div class="tag-container">
      <label for="tag">태그</label>
      <div class="tags">
        <span class="tag-icon">#</span>
        <div class="tag-input-container">
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
            maxlength="15"
          />
        </div>
      </div>
    </div>
    <div class="btn-container">
      <base-button :disabled="isSubmitBtnDisabled">{{
        postSeq ? '모집글 수정하기' : '모집글 등록하기'
      }}</base-button>
    </div>
  </form>
</template>

<script>
import { createPost, fetchPostByPostSeq, updatePost } from '@/api/post.js';
import InputOption from '@/components/views/studypost/InputOption.vue';

export default {
  components: { InputOption },
  data() {
    return {
      postSeq: null,
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
        postType: 'READY',
        userSeq: this.$store.state.auth.userSeq,
        hashTags: [],
        memberCount: 1,
      },
      errorMessages: {
        default: 'default',
        noValue: '필수 입력 항목입니다.',
        wordCountUnder15: '최소 15자~최대 300자 가능합니다.',
        wordCountOver15: '최대 15자 가능합니다.',
        wordCountOver30: '30자 이내로 입력해주세요.',
        wordCountOver300: '300자 이내로 입력해주세요.',
        deadlineAfterStudy: '마감 일자는 스터디 시작 일자 전이어야 합니다.',
      },
      rangeDate: null,
      memberCountOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tagInput: '',
      isTagLengthLongEnough: false,
      hasChanged: {
        title: false,
        info: false,
        goal: false,
        how: false,
        comment: false,
        deadLine: false,
        rangeDate: false,
      },
    };
  },
  computed: {
    isSubmitBtnDisabled() {
      if (
        this.isTitleValidate &&
        this.isDeadLineValidate &&
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
    isDeadLineValidate() {
      if (!this.post.deadLine) {
        return false;
      } else {
        if (this.post.startDate) {
          if (new Date(this.post.startDate) <= new Date(this.post.deadLine)) {
            return false;
          }
        }
      }
      return true;
    },
    deadLineValidationText() {
      if (!this.post.deadLine) {
        return this.errorMessages.noValue;
      } else {
        if (this.post.startDate) {
          if (new Date(this.post.startDate) <= new Date(this.post.deadLine)) {
            return this.errorMessages.deadlineAfterStudy;
          }
        }
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
    async submitForm() {
      try {
        if (!this.postSeq) {
          await createPost(this.post);
          this.$router.push({
            name: 'posts',
          });
        } else {
          await updatePost(this.post);
          this.$router.push({
            name: 'post',
            params: {
              postId: this.postSeq,
            },
          });
        }
      } catch (e) {
        console.error(e);
      }
    },
    setCountValue(value) {
      this.post.memberCount = value;
    },
    formatDeadlineDate() {
      this.hasChanged.deadLine = true;
      if (this.post.deadLine)
        this.post.deadLine = this.formatDate(this.post.deadLine);
    },
    formatRangeDate() {
      this.hasChanged.rangeDate = true;
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
      this.hasChanged.title = true;
      this.post.title = e.target.value;
    },
    changeGoalContent(e) {
      this.hasChanged.goal = true;
      this.post.goal = e.target.value;
    },
    changeInfoContent(e) {
      this.hasChanged.info = true;
      this.post.info = e.target.value;
    },
    changeHowContent(e) {
      this.hasChanged.how = true;
      this.post.how = e.target.value;
    },
    changeCommentContent(e) {
      this.hasChanged.comment = true;
      this.post.comment = e.target.value;
    },
    async fetchData(postSeq) {
      const postResponse = await fetchPostByPostSeq(postSeq);
      this.post = postResponse.data.content[0];
      this.rangeDate = [
        new Date(this.post.startDate),
        new Date(this.post.endDate),
      ];
    },
  },
  async created() {
    this.postSeq = this.$route.query.postSeq;
    if (this.postSeq) {
      await this.fetchData(this.postSeq);
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

.title-input input {
  font-size: 2.2rem;
  font-weight: bold;
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
  align-items: flex-start;
  padding: 1.1rem 1.6rem;
  border: 0.1rem solid var(--gray02);
  border-radius: 1rem;
  gap: 1rem;
}

.tag-input-container {
  display: flex;
  flex-wrap: wrap;
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

@media (max-width: 768px) {
  .input-container label {
    margin-right: 0;
  }

  .title-input input {
    font-size: 2rem;
  }

  .label-and-counting {
    gap: 0.6rem;
  }

  .counting {
    font-size: 1.2rem;
  }

  .input-container {
    margin-top: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  }

  .input-container:nth-child(3) {
    margin-top: 2.4rem;
  }

  .select-container {
    margin-bottom: 3.1rem;
  }

  .btn-container {
    margin: 4rem 0 18rem 0;
  }

  .tags {
    gap: 1rem 0.6rem;
  }

  .tag-icon {
    font-size: 2.2rem;
    margin-right: 1rem;
  }

  .tags input {
    font-size: 1.4rem;
  }
}
</style>
