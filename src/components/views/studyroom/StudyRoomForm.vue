<template>
  <form v-if="room" @submit.prevent="submitForm">
    <div class="title-input input-container box--underline bottom-padding">
      <input
        v-model="room.title"
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
    <div class="input-container box--underline bottom-padding">
      <label for="goal">스터디 목표:</label>
      <input
        v-model="room.goal"
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
        <div class="counting">{{ room.info.length }}/300</div>
      </div>
      <textarea
        v-model="room.info"
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
        v-model="room.how"
        placeholder="희망 요일 및 시간대, 이용할 플랫폼, 캠 ON/OFF 등 스터디를 어떤 식으로 진행할지 알려주세요!"
        name="proceedway"
        rows="7"
        @input="changeHowContent"
      ></textarea>
      <div class="error-text" :class="{ invisible: isHowValidate }">
        {{ howValidationText }}
      </div>
    </div>
    <div class="link-input textarea-container">
      <label for="link">링크</label>
      <div class="input-container box--underline bottom-padding">
        <label for="linkStudy">🔗 스터디 링크:</label>
        <input
          v-model="room.linkStudy"
          type="url"
          name="linkStudy"
          placeholder="스터디 링크"
          @keypress.enter.prevent
          @input="changeLinkStudyContent"
        />
      </div>
      <div class="input-container box--underline bottom-padding">
        <label for="linkNotion">🔗 스터디 일지:</label>
        <input
          v-model="room.linkNotion"
          type="url"
          name="linkNotion"
          placeholder="스터디 일지"
          @keypress.enter.prevent
          @input="changeLinkNotionContent"
        />
      </div>
      <div class="input-container box--underline bottom-padding">
        <label for="linkChat">🔗 오픈 채팅:</label>
        <input
          v-model="room.linkChat"
          type="url"
          name="linkChat"
          placeholder="오픈 채팅"
          @keypress.enter.prevent
          @input="changeLinkChatContent"
        />
      </div>
    </div>
    <div class="tag-container">
      <label for="tag">태그</label>
      <div class="tags">
        <span class="tag-icon">#</span>
        <div class="tag-input-container">
          <base-tag
            v-for="(tag, index) in room.hashTags"
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
    </div>
    <div class="btn-container">
      <button type="button" @click="goBackPage">취소</button>
      <button type="submit" :disabled="isSubmitBtnDisabled">변경 완료</button>
    </div>
  </form>
</template>

<script>
import { fetchRoomByStudySeq, updateRoom } from '@/api/room.js';

export default {
  data() {
    return {
      studySeq: null,
      room: {
        title: '',
        info: '',
        goal: '',
        how: '',
        comment: '',
        image: null,
        deadLine: null,
        startDate: null,
        endDate: null,
        studyType: null,
        userSeq: null,
        hashTags: [],
        memberCount: null,
        linkStudy: null,
        linkNotion: null,
        linkChat: null,
      },
      rangeDate: null,
      tagInput: '',
      isTagLengthLongEnough: false,
      errorMessages: {
        default: 'default',
        noValue: '필수 입력 항목입니다.',
        wordCountUnder15: '최소 15자~최대 300자 가능합니다.',
        wordCountOver15: '최대 15자 가능합니다.',
        wordCountOver30: '30자 이내로 입력해주세요.',
        wordCountOver300: '300자 이내로 입력해주세요.',
      },
    };
  },
  computed: {
    isSubmitBtnDisabled() {
      if (
        this.isTitleValidate &&
        this.room.startDate &&
        this.room.endDate &&
        this.isGoalValidate &&
        this.isInfoValidate &&
        this.isHowValidate
      )
        return false;
      else return true;
    },
    isTitleValidate() {
      if (
        this.room.title &&
        this.room.title.length > 0 &&
        this.room.title.length <= 15
      )
        return true;
      else return false;
    },
    titleValidationText() {
      if (!this.room.title || this.room.title.length <= 0) {
        return this.errorMessages.noValue;
      } else if (this.room.title.length > 15) {
        return this.errorMessages.wordCountOver15;
      }
      return this.errorMessages.default;
    },
    isGoalValidate() {
      if (
        this.room.goal &&
        this.room.goal.length > 0 &&
        this.room.goal.length <= 30
      )
        return true;
      else return false;
    },
    goalValidationText() {
      if (!this.room.goal || this.room.goal.length <= 0) {
        return this.errorMessages.noValue;
      } else if (this.room.goal.length > 30) {
        return this.errorMessages.wordCountOver30;
      }
      return this.errorMessages.default;
    },
    isInfoValidate() {
      if (
        this.room.info &&
        this.room.info.length >= 15 &&
        this.room.info.length <= 300
      )
        return true;
      else return false;
    },
    infoValidationText() {
      if (!this.room.info || this.room.info.length <= 0) {
        return this.errorMessages.noValue;
      } else if (this.room.info.length < 15) {
        return this.errorMessages.wordCountUnder15;
      } else if (this.room.info.length > 300) {
        return this.errorMessages.wordCountOver300;
      }
      return this.errorMessages.default;
    },
    isHowValidate() {
      if (
        this.room.how &&
        this.room.how.length > 0 &&
        this.room.how.length <= 300
      )
        return true;
      else return false;
    },
    howValidationText() {
      if (!this.room.how || this.room.how.length <= 0) {
        return this.errorMessages.noValue;
      } else if (this.room.how.length > 300) {
        return this.errorMessages.wordCountOver300;
      }
      return this.errorMessages.default;
    },
  },
  watch: {
    'room.hashTags': {
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
    goBackPage() {
      this.$router.go(-1);
    },
    showPage(roomId) {
      this.$router.push({
        name: 'room',
        params: {
          roomId,
        },
      });
    },
    async submitForm() {
      try {
        await updateRoom(this.room);
        this.showPage(this.studySeq);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchData() {
      const roomResponse = await fetchRoomByStudySeq(this.studySeq);
      this.room = roomResponse.data.content[0];
      this.rangeDate = [
        new Date(this.room.startDate),
        new Date(this.room.endDate),
      ];
    },
    formatRangeDate() {
      if (this.rangeDate) {
        this.room.startDate = this.formatDate(this.rangeDate[0]);
        this.room.endDate = this.formatDate(this.rangeDate[1]);
      } else {
        this.room.startDate = null;
        this.room.endDate = null;
      }
    },
    addTag() {
      if (this.tagInput === '') return;
      this.room.hashTags.push(this.tagInput);
      this.tagInput = '';
    },
    removeTag(index) {
      this.room.hashTags.splice(index, 1);
    },
    formatDate(date) {
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return year + '-' + month + '-' + day;
    },
    changeTitleContent(e) {
      this.room.title = e.target.value;
    },
    changeGoalContent(e) {
      this.room.goal = e.target.value;
    },
    changeInfoContent(e) {
      this.room.info = e.target.value;
    },
    changeHowContent(e) {
      this.room.how = e.target.value;
    },
  },
  created() {
    this.studySeq = this.$route.query.studySeq;
    this.fetchData();
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

.title-input {
  margin-bottom: 5.2rem;
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

.input-container,
.textarea-container,
.tag-container {
  margin-top: 2.1rem;
}

.link-input {
  margin-top: 7.6rem;
  margin-bottom: 5rem;
}

.link-input div {
  margin-top: 4rem;
}

.link-input label:not([for='link']) {
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.6rem;
}

.link-input input {
  font-size: 1.6rem;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 4rem 0 26rem 0;
  gap: 1.4rem;
}

.btn-container button {
  padding: 0.9rem 2.7rem;
  border-radius: 1rem;
  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 1.6rem;
  color: white;
}

.btn-container button:first-child {
  background: var(--gray03);
}

.btn-container button:last-child {
  background: var(--orange-dark);
}

.btn-container button:last-child:disabled {
  background: var(--gray02);
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

  .title-input {
    margin-bottom: 2.4rem;
  }

  .link-input {
    margin-top: 0.8rem;
    margin-bottom: 2rem;
  }

  .link-input div {
    margin-top: 3rem;
  }

  .link-input div:first-child {
    margin-top: 0;
  }

  .link-input label:not([for='link']) {
    font-size: 1.4rem;
  }

  .link-input input {
    font-size: 1.4rem;
  }

  .btn-container {
    margin: 3rem 0 12rem 0;
    gap: 0.5rem;
  }

  .btn-container button {
    padding: 0.9rem 1rem;
    font-size: 1.4rem;
  }

  .tag-container {
    margin-top: 2.8rem;
  }

  .tags {
    padding: 1rem 1.6rem;
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
