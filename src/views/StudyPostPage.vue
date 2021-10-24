<template>
	<div class="main-container">
		<div class="post-header">
			<div class="box--underline bottom-padding">
				<h1>{{ selectedPost.title }}</h1>
			</div>
			<div class="post-info-and-btn-container">
				<div class="post-info">
					<div class="post__writer">
						<img
							src="@/assets/img/profile/profile_tr_b.svg"
							alt=""
							class="writer__profile-img"
						/>
						<div class="writer__nickname">이채윤</div>
					</div>
					<div class="post__posted-date">2021.01.01</div>
				</div>
				<base-button :size="'small'">신청하기</base-button>
			</div>
		</div>
		<div class="post-contents box--underline">
			<div class="post-content">
				<h2>스터디 정보 요약</h2>
				<div class="box--gray-background">
					<ul class="post-content-lines">
						<li>
							<p><span class="p-text--em">모집 마감 :</span> 2021.01.05</p>
						</li>
						<li>
							<p>
								<span class="p-text--em">기간 :</span> {{ selectedPost.period }}
							</p>
						</li>
						<li>
							<p><span class="p-text--em">신청 인원 :</span> 2명/5명</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="post-content">
				<h2>스터디 목표 & 소개</h2>
				<div class="box--gray-background">
					<p class="p-text--red">2월 10일 HSK 5급 합격!</p>
					<p>
						안녕하세요! 저는 중어중문학부에 재학중인 땡땡땡이라고 합니다.저희
						스터디에서는 어쩌고저쩌고... 대략적인 커리큘럼은 말이죠,, 1주차 :
						~~~~~~~~ 2주차 : 21@#!@#! 이런 식으로 서로 멘토링 형식으로 진행이 될
						예정입니다~ 많관부! [규칙] 캠은 꼭 켜고 진행할 예정 스터디 일지 작성
						안하면 강퇴
					</p>
				</div>
			</div>
			<div class="post-content">
				<h2>스터디 진행 방식</h2>
				<div class="box--gray-background">
					<p>
						매주 금요일 13시~20시 진행 예정입니다. <br />줌으로 진행될 것 같고,
						캠은 켜주시면 좋겠습니다.
					</p>
				</div>
			</div>
			<div class="post-content">
				<h2>신청자에게 한마디!</h2>
				<div class="box--gray-background">
					<p>
						본인의 현재 실력이 어느정도인지 알려주시면 팀원 구성에
						반영하겠습니다.<br />
						초시/재시 여부도 알려주시면 감사하겠습니다~
					</p>
				</div>
			</div>
			<div class="post-content">
				<h2>태그</h2>
				<div class="tags">
					<span class="tag-icon">#</span>
					<base-tag>또 다른 길 태그</base-tag>
					<base-tag>어쩌라고</base-tag>
					<base-tag>또 다른 길 태그</base-tag>
					<base-tag>어쩌라고</base-tag>
				</div>
			</div>
		</div>
		<div class="post-comments">
			<h2>댓글</h2>
			<div class="box--underline comment-register-container">
				<div class="comment-register__user-profile">
					<img
						src="@/assets/img/profile/profile_tr_p.svg"
						alt=""
						class="user__profile-img"
					/>
					<div class="user__nickname">개발천재서영</div>
				</div>
				<textarea
					placeholder="스터디장에게 궁금한 점이 있다면 댓글을 남겨보세요."
					name="comment"
					rows="5"
				></textarea>
				<div class="comment-register-btn-container">
					<button class="comment-register__register-btn">등록</button>
				</div>
			</div>
			<ul class="comment-list">
				<li class="comment-list__comment box--underline">
					<img
						src="@/assets/img/profile/profile_tr_b.svg"
						alt=""
						class="comment-writer__profile-img"
					/>
					<div class="comment-writer__content-container">
						<div class="comment__meta-info">
							<div class="comment-writer__nickname">이채윤</div>
							<div class="comment__commented-date">2021.02.12</div>
						</div>
						<div class="comment__content">
							서영님 언제 저랑 같이 개발해요?<br />
							우리 맛있는 거 언제 먹어요?
						</div>
					</div>
				</li>
				<li class="comment-list__comment box--underline">
					<img
						src="@/assets/img/profile/profile_tr_b.svg"
						alt=""
						class="comment-writer__profile-img"
					/>
					<div class="comment-writer__content-container">
						<div class="comment__meta-info">
							<div class="comment-writer__nickname">이채윤</div>
							<div class="comment__commented-date">2021.02.12</div>
						</div>
						<div class="comment__content">
							서영님 언제 저랑 같이 개발해요?<br />
							우리 맛있는 거 언제 먹어요?
						</div>
					</div>
				</li>
				<li class="comment-list__comment box--underline">
					<img
						src="@/assets/img/profile/profile_tr_b.svg"
						alt=""
						class="comment-writer__profile-img"
					/>
					<div class="comment-writer__content-container">
						<div class="comment__meta-info">
							<div class="comment-writer__nickname">이채윤</div>
							<div class="comment__commented-date">2021.02.12</div>
						</div>
						<div class="comment__content">
							서영님 언제 저랑 같이 개발해요?<br />
							우리 맛있는 거 언제 먹어요?
						</div>
					</div>
				</li>
				<li class="comment-list__comment box--underline">
					<img
						src="@/assets/img/profile/profile_tr_b.svg"
						alt=""
						class="comment-writer__profile-img"
					/>
					<div class="comment-writer__content-container">
						<div class="comment__meta-info">
							<div class="comment-writer__nickname">이채윤</div>
							<div class="comment__commented-date">2021.02.12</div>
						</div>
						<div class="comment__content">
							서영님 언제 저랑 같이 개발해요?<br />
							우리 맛있는 거 언제 먹어요?
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<the-footer></the-footer>
</template>

<script>
export default {
	inject: ['unrecruitedPosts', 'recruitedPosts'],
	data() {
		return {
			selectedPost: null,
		};
	},
	created() {
		const postId = this.$route.params.postId;
		this.selectedPost = this.unrecruitedPosts.find(post => post.id === postId);
	},
};
</script>

<style scoped>
.post-header {
	margin-bottom: 12.8rem;
}

.post-info-and-btn-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 2rem;
}

.post-info {
	display: flex;
	align-items: center;
}

.post__writer {
	display: flex;
	align-items: center;
	margin-right: 2.7rem;
}

.writer__profile-img {
	width: 3.7rem;
	height: 3.7rem;
	margin-right: 0.8rem;
}

.writer__nickname {
	font-weight: bold;
	font-size: 1.6rem;
	color: var(--gray01);
}

.post__posted-date {
	font-size: 1.6rem;
	color: var(--gray00);
}

.post-contents {
	padding-bottom: 5.6rem;
}

.post-contents h2 {
	margin-bottom: 1rem;
}

.box--gray-background {
	margin-bottom: 4.8rem;
}

.post-content-lines li:not(:last-child) {
	margin-bottom: 0.6rem;
}

.p-text--red {
	line-height: 0rem;
	margin-bottom: 3.4rem;
}

.tags {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 1rem;
}

.tag-icon {
	font-family: Noto Sans KR;
	font-weight: bold;
	font-size: 2.4rem;
	margin-right: 0.3rem;
}

.post-comments h2 {
	margin: 4.8rem 0 3.6rem 0;
}

.comment-register-container {
	display: flex;
	flex-direction: column;
	padding-bottom: 5.2rem;
	margin-bottom: 1.6rem;
}

.comment-register__user-profile {
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
}

.user__profile-img {
	width: 4.4rem;
	height: 4.4rem;
	margin-right: 1rem;
}

.user__nickname {
	font-size: 1.4rem;
	font-weight: bold;
}

textarea {
	padding: 2.4rem 3rem;
	margin-bottom: 2rem;
}

.comment-register-btn-container {
	width: 100%;
	display: flex;
	justify-content: flex-end;
}

.comment-register__register-btn {
	font-family: Noto Sans KR;
	padding: 1.4rem 4rem;
	font-weight: bold;
	font-size: 1.6rem;
	color: white;
	background-color: var(--orange-dark);
}

.comment-list {
	display: flex;
	flex-direction: column;
}

.comment-list__comment {
	display: flex;
	padding: 2rem 0;
}

.comment-writer__profile-img {
	width: 4.4rem;
	height: 4.4rem;
}

.comment-writer__content-container {
	margin-left: 1rem;
}

.comment__meta-info {
	display: flex;
	align-items: center;
	margin-bottom: 0.5rem;
}

.comment-writer__nickname {
	font-weight: bold;
	font-size: 1.4rem;
	color: var(--gray01);
	margin-right: 1rem;
}

.comment__commented-date {
	font-size: 1.2rem;
	color: var(--gray02);
}

.comment__content {
	font-size: 1.4rem;
	line-height: 170%;
}
</style>
