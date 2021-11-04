<template>
  <div class="main-container">
    <div class="room-header">
      <div class="box--underline bottom-padding">
        <h1>스터디 룸 제목</h1>
      </div>
    </div>
    <div class="room-contents">
      <div class="room-content">
        <h2>스터디 기간</h2>
        <div class="box--gray-background">
          <p>2021. 01. 09~2021.02.09</p>
        </div>
      </div>
      <div class="room-content">
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
      <div class="room-content">
        <h2>스터디 진행 방식</h2>
        <div class="box--gray-background">
          <p>
            매주 금요일 13시~20시 진행 예정입니다. <br />줌으로 진행될 것 같고,
            캠은 켜주시면 좋겠습니다.
          </p>
        </div>
      </div>
      <div class="room-content">
        <h2>링크</h2>
        <ul>
          <li class="link-container">
            <h3>🔗 스터디</h3>
            <div class="box--gray-background">
              <p>
                <a
                  href="https://www.figma.com/file/cpTWmxP2n0d9mXzBuMMXp2/%5BMOAMOA%5D-%ED%8C%80%EC%9B%90%EA%B3%B5%EA%B0%9C?node-id=486%3A1786"
                >
                  https://www.figma.com/file/cpTWmxP2n0d9mXzBuMMXp2/%5BMOAMOA%5D-%ED%8C%80%EC%9B%90%EA%B3%B5%EA%B0%9C?node-id=486%3A1786
                </a>
              </p>
            </div>
          </li>
          <li class="link-container">
            <h3>🔗 스터디 일지</h3>
            <div class="box--gray-background">
              <p>
                <a
                  href="https://www.figma.com/file/cpTWmxP2n0d9mXzBuMMXp2/%5BMOAMOA%5D-%ED%8C%80%EC%9B%90%EA%B3%B5%EA%B0%9C?node-id=486%3A1786"
                >
                  https://www.figma.com/file/cpTWmxP2n0d9mXzBuMMXp2/%5BMOAMOA%5D-%ED%8C%80%EC%9B%90%EA%B3%B5%EA%B0%9C?node-id=486%3A1786
                </a>
              </p>
            </div>
          </li>
          <li class="link-container">
            <h3>🔗 오픈 채팅</h3>
            <div class="box--gray-background">
              <p>
                <a
                  href="https://www.figma.com/file/cpTWmxP2n0d9mXzBuMMXp2/%5BMOAMOA%5D-%ED%8C%80%EC%9B%90%EA%B3%B5%EA%B0%9C?node-id=486%3A1786"
                >
                  https://www.figma.com/file/cpTWmxP2n0d9mXzBuMMXp2/%5BMOAMOA%5D-%ED%8C%80%EC%9B%90%EA%B3%B5%EA%B0%9C?node-id=486%3A1786
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="room-content">
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
  </div>
  <hr />
  <div class="main-container">
    <h2 class="study-mate-title">스터디 메이트</h2>
    <ul class="study-mate-list">
      <li class="study-mate">
        <img
          src="@/assets/img/profile/profile_tr_p.svg"
          alt=""
          class="study-mate__profile-img"
        />
        <div class="study-mate__nickname study-leader">스터디장</div>
      </li>
      <li class="study-mate">
        <img
          src="@/assets/img/profile/profile_tr_p.svg"
          alt=""
          class="study-mate__profile-img"
        />
        <div class="study-mate__nickname">스터디원 1</div>
      </li>
      <li class="study-mate">
        <img
          src="@/assets/img/profile/profile_tr_p.svg"
          alt=""
          class="study-mate__profile-img"
        />
        <div class="study-mate__nickname">스터디원 2</div>
      </li>
    </ul>
  </div>
  <the-footer></the-footer>
</template>

<script>
export default {};
</script>

<style scoped>
.room-header {
  margin-bottom: 10rem;
}

.room-content {
  margin-bottom: 4.8rem;
}

.room-content h2 {
  margin-bottom: 1rem;
}

.p-text--red {
  margin-bottom: 3.4rem;
}

.room-content:nth-child(4) h2 {
  margin-bottom: 3.6rem;
}

.room-content:nth-child(4) h3 {
  margin-bottom: 1rem;
}

.room-content:nth-child(4) ul {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

a {
  color: var(--blue);
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
  margin-left: 1.6rem;
  margin-right: 0.3rem;
}

hr {
  border: none;
  height: 1rem;
  background: var(--gray05);
  margin-top: 1.2rem;
  margin-bottom: 5.6rem;
}

.study-mate-title {
  margin-bottom: 3.2rem;
}

.study-mate {
  display: flex;
  align-items: center;
  padding: 1.4rem 0;
  border-bottom: 0.05rem solid #dedede;
}

.study-mate__profile-img {
  width: 4.4rem;
  height: 4.4rem;
  margin-right: 1rem;
}

.study-mate__nickname {
  font-weight: bold;
  font-size: 1.4rem;
}

.study-leader {
  color: var(--orange);
}

@media (max-width: 768px) {
  .room-header {
    margin-bottom: 7.7rem;
  }

  .room-content {
    margin-bottom: 4.6rem;
  }

  .room-content h2 {
    margin-bottom: 1.5rem;
  }

  .p-text--red {
    margin-bottom: 2rem;
  }

  .room-content:nth-child(4) h2 {
    margin-bottom: 2rem;
  }

  .room-content:nth-child(4) h3 {
    margin-bottom: 0.8rem;
  }

  .room-content:nth-child(4) ul {
    gap: 2rem;
  }

  .tags {
    gap: 0.6rem;
  }

  .tag-icon {
    font-size: 2.2rem;
    margin: 0 1rem 0 1.7rem;
  }

  hr {
    border: none;
    height: 1rem;
    background: var(--gray05);
    margin-bottom: 4.1rem;
  }

  .study-mate-title {
    margin-bottom: 1rem;
  }
}
</style>
