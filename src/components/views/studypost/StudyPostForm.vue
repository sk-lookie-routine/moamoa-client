<template>
	<form action="submit">
		<div class="input-container box-with-underline bottom-padding">
			<input type="text" name="title" placeholder="스터디 제목" />
		</div>
		<div class="error-text">필수 입력 항목입니다.</div>
		<div class="input-container box-with-underline bottom-padding">
			<label for="deadline">모집 마감 일자 :</label>
			<input type="date" name="deadline" />
		</div>
		<div class="error-text">필수 입력 항목입니다.</div>
		<div class="input-container box-with-underline bottom-padding">
			<label for="period">스터디 기간 :</label>
			<input type="date" name="period" />
		</div>
		<div class="error-text">필수 입력 항목입니다.</div>
		<div class="input-container box-with-underline bottom-padding">
			<label for="count">모집 인원:</label>
			<select name="count">
				<option value="1">1명</option>
				<option value="2">2명</option>
				<option value="3">3명</option>
				<option value="4">4명</option>
			</select>
		</div>
		<div class="error-text">필수 입력 항목입니다.</div>
		<div class="input-container box-with-underline bottom-padding">
			<label for="goal">스터디 목표:</label>
			<input type="text" name="goal" placeholder="한 줄로 소개하세요." />
		</div>
		<div class="error-text">필수 입력 항목입니다.</div>
		<div class="textarea-container">
			<label for="introduction">스터디 소개:</label>
			<textarea
				placeholder="스터디에서 지키고 싶은 규칙 등을 자유롭게 서술해 주세요!"
				name="introduction"
				rows="12"
			></textarea>
		</div>
		<div class="textarea-container">
			<label for="proceedway">스터디 진행 방식</label>
			<textarea
				placeholder="희망 요일 및 시간대, 이용할 플랫폼, 캠 ON/OFF 등 스터디를 어떤 식으로 진행할지 알려주세요!"
				name="proceedway"
				rows="7"
			></textarea>
		</div>
		<div class="textarea-container">
			<label for="comments">신청자에게 한마디!</label>
			<textarea
				placeholder="스터디 신청자가 폼에 작성해주었으면 하는 것들에 대해 작성해주셔도 좋아요."
				name="introduction"
				rows="7"
			></textarea>
		</div>
		<div class="tag-container">
			<label for="tag">태그</label>
			<div class="tags">
				<span class="tag-icon">#</span>
				<base-tag :canRemove="true">또 다른 길 태그</base-tag>
				<base-tag :canRemove="true">어쩌라고</base-tag>
				<base-tag :canRemove="true">또 다른 길 태그</base-tag>
				<base-tag :canRemove="true">어쩌라고</base-tag>
				<input type="text" name="tag" placeholder="태그를 입력하세요." />
			</div>
		</div>
		<div class="btn-container">
			<base-button>모집글 등록하기</base-button>
		</div>
	</form>
	<the-footer></the-footer>
</template>

<script>
export default {};
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

.input-container {
	margin-bottom: 1rem;
}

.textarea-container {
	margin-bottom: 4.6rem;
}

.input-container {
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

.error-text {
	visibility: hidden;
}
</style>
