<template>
  <div class="modal">
    <div class="modal-bg"></div>
    <div class="modal-box">
      <div class="modal-box-title">🤙🏻MOAMOA는 이런 규칙을 지향합니다!</div>
      <div class="modal-box-1">
        <div class="modal-box-1-title">1. 책임감 있는 활동을 해주세요!</div>
        <div class="modal-box-1-desc">
          <p>
            모아모아는 함께하는 성장을 지향합니다. 스터디 메이트에게 폐가 되지
            않게 스터디에 성실히 임해주세요
          </p>
          <p>
            모종의 이유로 스터디에 더이상 참여하기 힘든 경우, 반드시 팀원들에게
            알린 후 스터디장에게 탈퇴를 요청해주세요.
          </p>
        </div>
      </div>
      <div class="modal-box-2">
        <div class="modal-box-2-title">2. 불필요한 개인정보 공유는 NO!</div>
        <div class="modal-box-2-desc">
          <p>
            스터디 진행과 상관없는 불필요한 개인정보를 요청하거나 공유하는
            행위는 삼가주시기 바랍니다.
          </p>
          <p>
            주소, 주민번호 등 불필요한 정보를 노출해 생기는 문제는 책임지지
            않습니다.
          </p>
        </div>
      </div>
      <div class="modal-box-3">
        <div class="modal-box-3-title">
          3. 스터디 내의 자료는 스터디 내에서만!
        </div>
        <div class="modal-box-3-desc">
          <p>
            팀원들에게 허가받지 않은 사진촬영, 화면 캡쳐 및 스터디 내용 유포를
            금합니다.
          </p>
          <p>
            특히 팀 내에서 공유된 회의 링크(줌 링크 등)를 스터디 외부에 노출하지
            않도록 주의해주세요!
          </p>
        </div>
      </div>
      <div class="modal-box-4">
        <div class="modal-box-4-title">
          4. 예의를 지켜 서로를 배려해 주세요!
        </div>
        <div class="modal-box-4-desc">
          <p>
            모아모아는 쾌적한 사이트 이용을 위해 상대방에게 불쾌감을 주는 모든
            행위(홍보, 도배, 욕설 등)를 금지합니다.
          </p>
          <p>
            공공질서, 미풍양속에 반하는 모든 내용은 신고 및 활동 금지의 사유가
            될 수 있습니다.
          </p>
        </div>
      </div>
      <div class="modal-box-5">
        <div class="modal-box-5-title">5. 가이드라인을 참고해주세요!</div>
        <div class="modal-box-5-desc">
          <p>
            모아모아 서비스를 100% 활용할 수 있는 가이드라인을 제공하고
            있습니다.
          </p>
          <p>스터디 개설, 참여 방법과 스터디 일지 샘플을 확인해보세요!</p>
        </div>
      </div>
      <div class="more-info">
        더 자세한 내용은 Notion 에서 확인할 수 있습니다.
      </div>
      <base-button class="base-btn" @click="onClick"
        >모두 확인했고, 동의합니다!</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
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
  width: 81.5rem;
  height: 2.6rem;
  left: 31.2rem;
  top: 23.8rem;
  margin: 6rem 2.1rem 4.1rem 2.1rem;
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 2.6rem;
}
.modal-box-1,
.modal-box-2,
.modal-box-3,
.modal-box-4,
.modal-box-5 {
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
.modal-box-4-title,
.modal-box-5-title {
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
.modal-box-4-desc p,
.modal-box-5-desc p {
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--gray01);
}
.more-info {
  font-family: Roboto;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;
  color: var(--gray00);
  margin: 4.8rem 0 3.3rem 0;
}
.base-btn {
  margin-bottom: 5rem;
}
@media (max-width: 320px) {
}
</style>
