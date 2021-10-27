<template>
	<h1>
		h1 22 bold 이 페이지는 개발용 페이지입니다. 이후 랜딩 페이지가 될 수도
		있습니다. h1은 자동으로 위에 192px만큼 마진이 생겨요.
	</h1>
	<li>
		<router-link to="/home">홈페이지 이동</router-link>
	</li>
	<li>
		<router-link to="/login">로그인페이지 이동</router-link>
	</li>
	<li>
		<router-link to="/signup">회원가입페이지 이동</router-link>
	</li>
	<li>
		<router-link to="/signup-form">회원가입 form 페이지 이동</router-link>
	</li>
	<li>
		<router-link to="/posts">스터디 목록 이동</router-link>
	</li>
	<li>
		<router-link to="/rooms">스터디 룸 이동</router-link>
	</li>
	<li>
		<router-link to="/notice">공지사항 이동</router-link>
	</li>
	<h2>h2 18 bold</h2>
	<h3>h3 16 bold</h3>
	<p>
		p 태그 <br />
		16사이즈 줄간격 162.5%<br />
	</p>
	<p class="box--gray-background">
		p태그와 class="box--gray-backgroundd"를 사용하면<br />
		이렇게 보여짐
	</p>
	<label>input label 입니다.: 18 bold</label>
	<input
		type="text"
		name="text"
		placeholder="18사이즈에 스푸카 기본으로 넓이 100%"
	/>
	<input
		type="text"
		name="url"
		placeholder="18사이즈에 스푸카 기본으로 넓이 100%"
	/>
	<textarea
		placeholder="16사이즈에 스푸카 162.5%"
		name="text"
		rows="10"
		style="resize: none; width: 100%"
	></textarea>
	<base-button>태그 사이에 택스트를 넣어서 사용하세요. 320 x 58</base-button>
	<base-button size="small"
		>props로 size="small"을 주면 작은 버튼 사용 가능 250 x 58</base-button
	>
	<base-card
		:id="id"
		title="얘는 컴포넌트 분리는 했는데 수정이 더 필요해서 조금만 설명드림"
		:period="'에베베'"
		:peopleRegisterCount="1"
		:peopleTotalCount="5"
		:tags="['태그는', 'array로']"
	></base-card>
	<p>base-dialog 만드는 중.</p>
	<base-tab
		firstTab="firstTab props에 첫번째 탭 텍스트 넣으면 됨 누르면 firstTabClicked 이벤트 emit"
		secondTab="secondTab props에 두번째 탭 텍스트 넣으면 됨 누르면 SecondTabClicked 이벤트 emit"
	></base-tab>
	<base-tag>태그는 태그 사이에 내용 넣으면 됨</base-tag>
	<base-tag canRemove="true"
		>canRemove props를 true로 주면 x버튼 생김.(기본 false) delete event
		emit</base-tag
	>
	<p class="p-text--em">p-text--em p안에 텍스트에서 강조할 때 사용</p>
	<p class="p-text--red">
		p-text--red p안의 텍스트에서 빨간 글씨 사용할 때: 스터디 목표
	</p>
	<p class="error-text">error-text 에러 텍스트</p>
	<div class="bottom-padding">bottom-padding</div>
	<div class="box--underline">box--underline</div>
	<div class="box--gray-background">box--gray-background</div>
</template>

<script>
export default {};
</script>

<style scoped>
div,
li {
	font-size: 2rem;
}
</style>
