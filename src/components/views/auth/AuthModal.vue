<template>
  <div class="modal" v-if="isClicked">
    <div class="modal-bg"></div>
    <div class="modal-box">
      <div class="modal-box-title">🤙🏻MOAMOA는 이런 규칙을 지향합니다!</div>
      <div class="modal-box-1">
        <div class="modal-box-1-title">1. 예의를 지켜 서로를 배려해주세요!</div>
        <div class="modal-box-1-desc">
          <p>쾌적한 사이트 이용을 위해 상대방에게 불쾌감을 주는</p>
          <p>모든 행위(홍보, 도배, 욕설 등)는 삼가주세요!</p>
        </div>
      </div>
      <div class="modal-box-2">
        <div class="modal-box-2-title">2. 불필요한 개인정보 공유는 NO!</div>
        <div class="modal-box-2-desc">
          <p>스터디 진행과 상관없는 개인정보를 요청하거나 공유하는</p>
          <p>행위는 지양해 주시기 바랍니다.</p>
        </div>
      </div>
      <div class="modal-box-3">
        <div class="modal-box-3-title">
          3. 스터디 내의 자료는 스터디 내에서만!
        </div>
        <div class="modal-box-3-desc">
          <p>허락받지 않은 화면 캡쳐와 팀 내에서 공유된 스터디 링크</p>
          <p>및 스터디 내용 유포를 금합니다.</p>
        </div>
      </div>
      <div class="modal-box-4">
        <div class="modal-box-4-title">4. 사용가이드를 참고해주세요!</div>
        <div class="modal-box-4-desc">
          <p>모아모아를 100% 활용하기 위한 최고의 가이드!</p>
          <p>
            <a href="https://www.notion.so/bbc074266f8e4c8d97cf6b6a0f93474c"
              >모아모아 사용가이드</a
            >에서 확인해보세요!
          </p>
        </div>
      </div>
      <div class="more-info">
        더 자세한 내용은
        <a href="https://www.notion.so/bbc074266f8e4c8d97cf6b6a0f93474c"
          >Notion</a
        >
        에서 확인할 수 있습니다.
      </div>
      <base-button class="base-btn" @click="onClick"
        >모두 확인했고, 동의합니다!</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['isClicked'],
  methods: {
    onClick() {
      this.$router.push('/home');
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100vw;
}
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6;
  z-index: 100;
}
.modal-box {
  border-radius: 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  z-index: 101;
  height: 50rem;
  display: inline-block;
  text-align: center;
  width: 85.7em;
  overflow: scroll;
}
.modal-box::-webkit-scrollbar {
  display: none;
  /* 스크롤바 hide */
}
.modal-box-title {
  margin: 0 auto;
  padding: 6rem 0 4.1rem 0;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 2.6rem;
}
.modal-box-1,
.modal-box-2,
.modal-box-3,
.modal-box-4 {
  width: 81.5rem;
  height: 9.3rem;
  border-radius: 2rem;
  background: var(--gray05);
  margin: 0 auto;
  margin-bottom: 2.1rem;
}
.modal-box-1-title,
.modal-box-2-title,
.modal-box-3-title,
.modal-box-4-title {
  left: 62.4rem;
  top: 31.9rem;
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: var(--black);
  padding: 1.4rem 0 1.2rem 0;
}
.modal-box-1-desc p,
.modal-box-2-desc p,
.modal-box-3-desc p,
.modal-box-4-desc p {
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--gray01);
}
.modal-box-4-desc p a {
  text-decoration: underline;
  color: var(--gray01);
}
.more-info {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;
  color: var(--gray00);
  margin: 4.8rem 0 3.3rem 0;
}
.more-info a {
  text-decoration: underline;
  color: var(--gray00);
}
.base-btn {
  margin-bottom: 5rem;
}
@media (max-width: 340px) {
  .modal-box {
    width: 30rem;
  }
  .modal-box-1,
  .modal-box-2,
  .modal-box-3,
  .modal-box-4 {
    width: 28rem;
  }
  .modal-box-1-title,
  .modal-box-2-title,
  .modal-box-3-title,
  .modal-box-4-title {
    font-size: 1.2rem;
  }
  .modal-box-1-desc p,
  .modal-box-2-desc p,
  .modal-box-3-desc p,
  .modal-box-4-desc p {
    font-size: 1rem;
  }
  .modal-box-title {
    font-size: 1.6rem;
    padding-top: 6rem;
    padding-bottom: 4rem;
  }
  .base-btn {
    width: 28rem;
  }
}
</style>
