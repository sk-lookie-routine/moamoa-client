<template>
	<form @submit.prevent="submitForm">
		<div class="input-container box--underline bottom-padding">
			<input
				v-model="post.title"
				type="text"
				name="title"
				placeholder="스터디 제목"
			/>
		</div>
		<div class="error-text">필수 입력 항목입니다.</div>
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
		<div class="error-text">필수 입력 항목입니다.</div>
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
		<div class="error-text">필수 입력 항목입니다.</div>
		<div class="input-container box--underline bottom-padding">
			<label for="count">모집 인원:</label>
			<select v-model="post.userSeq" name="count">
				<option
					v-for="optionValue in userSeqOptions"
					v-bind:value="optionValue"
					:key="optionValue"
				>
					{{ optionValue }}명
				</option>
			</select>
		</div>
		<div class="error-text">필수 입력 항목입니다.</div>
		<div class="input-container box--underline bottom-padding">
			<label for="goal">스터디 목표:</label>
			<input
				v-model="post.goal"
				type="text"
				name="goal"
				placeholder="한 줄로 소개하세요."
			/>
		</div>
		<div class="error-text">필수 입력 항목입니다.</div>
		<div class="textarea-container">
			<label for="introduction">스터디 소개:</label>
			<textarea
				v-model="post.info"
				placeholder="스터디에서 지키고 싶은 규칙 등을 자유롭게 서술해 주세요!"
				name="introduction"
				rows="12"
			></textarea>
			<div class="error-text">필수 입력 항목입니다.</div>
		</div>
		<div class="textarea-container">
			<label for="proceedway">스터디 진행 방식</label>
			<textarea
				v-model="post.how"
				placeholder="희망 요일 및 시간대, 이용할 플랫폼, 캠 ON/OFF 등 스터디를 어떤 식으로 진행할지 알려주세요!"
				name="proceedway"
				rows="7"
			></textarea>
			<div class="error-text">필수 입력 항목입니다.</div>
		</div>
		<div class="textarea-container input-with-no-error-container">
			<label for="comments">신청자에게 한마디!</label>
			<textarea
				v-model="post.comment"
				placeholder="스터디 신청자가 폼에 작성해주었으면 하는 것들에 대해 작성해주셔도 좋아요."
				name="introduction"
				rows="7"
			></textarea>
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
					@keyup.enter="addTag"
				/>
			</div>
		</div>
		<div class="btn-container">
			<base-button>모집글 등록하기</base-button>
		</div>
	</form>
</template>

<script>
import { createPost } from '@/api/index.js';

export default {
	data() {
		return {
			post: {
				title: '',
				info: '',
				goal: '',
				how: '',
				comment: '',
				deadLine: null,
				startDate: null,
				endDate: null,
				userSeq: 1,
				hashTags: [],
			},
			rangeDate: null,
			userSeqOptions: [1, 2, 3, 4, 5],
			tagInput: '',
			isTagLengthLongEnough: false,
		};
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
		submitForm() {
			createPost(this.post);
		},
		formatDeadlineDate() {
			this.post.deadLine = this.formatDate(this.post.deadLine);
		},
		formatRangeDate() {
			this.startDate = this.formatDate(this.rangeDate[0]);
			this.endDate = this.formatDate(this.rangeDate[1]);
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
.textarea-container {
	margin-top: 2.1rem;
}

.input-container:nth-child(3) {
	margin-top: 5.2rem;
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
</style>
