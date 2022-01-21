<template>
  <div class="modal">
    <div class="modal-bg"></div>
    <div class="modal-box">
      <div class="select-withdrawal" v-if="!isClicked">
        <div class="modal-box-title">정말로 탈퇴하실건가요?</div>
        <div class="modal-box-contents">
          <p>아래 버튼을 누르면 회원탈퇴가 완료되어 계정이 삭제됩니다.</p>
          <p>동일한 이메일로 재가입 할 수 없습니다.</p>
        </div>
        <div class="buttons">
          <base-button
            :size="'small'"
            class="cancel-button"
            @click="onClickCancel"
            >취소</base-button
          >
          <base-button
            :size="'small'"
            class="withdrawal-button"
            @click="onClickWithdrawal"
            >탈퇴</base-button
          >
        </div>
      </div>
      <div class="real-withdrawal" v-if="isClicked">
        <div class="withdrawal-contents">
          <p>탈퇴되었습니다.</p>
          <p>그동안 MOAMOA를 이용해주셔서 감사합니다.</p>
        </div>
        <base-button
          :size="'small'"
          class="confirm-button"
          @click="onClickConfirm"
          >확인</base-button
        >
      </div>
    </div>
  </div>
  <my-page-account-manage></my-page-account-manage>
</template>

<script>
import { deleteUser } from '@/api/auth.js';
export default {
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    onClickWithdrawal() {
      this.isClicked = true;
      deleteUser();
    },
    onClickCancel() {
      this.$store.state.account.withdrawal = false;
    },

    onClickConfirm() {
      //회원탈퇴, state 초기화 및 홈으로 이동
      this.$store.commit('initUser');
      this.$store.commit('logout');
      this.$store.state.account.withdrawal = false;
      this.$router.push('/home');
    },
  },
};
</script>

<style scoped>
.cancel-button,
.withdrawal-button {
  width: 8.4rem;
}
.confirm-button {
  width: 18rem;
  height: 4.4rem;
}
.cancel-button {
  background-color: var(--gray03);
}
.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 50rem;
  height: 27.5rem;
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
  height: 27.5rem;
  display: inline-block;
  text-align: center;
  width: 50rem;
  overflow: scroll;
}
.modal-box::-webkit-scrollbar {
  display: none;
  /* 스크롤바 hide */
}
.modal-box-title {
  color: var(--orange-dark);
  margin-top: 5rem;
  text-align: center;
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2.8rem;
}
.modal-box-contents {
  margin-top: 1.2rem;
  margin-bottom: 5rem;
}
.buttons {
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 0 auto;
}
.withdrawal-contents {
  height: 30%;
  justify-content: space-around;
}
.real-withdrawal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
@media (max-width: 320px) {
  .modal {
    width: 25rem;
  }
  .modal-box {
    top: 50%;
    left: 50%;
    width: 27rem;
    height: 25rem;
  }
  .modal-box-contents p {
    font-size: 1.2rem;
    word-break: keep-all;
  }
  .cancel-button,
  .withdrawal-button {
    width: 6rem;
    height: 4rem;
    align-items: center;
    display: flex;
    justify-content: center;
    z-index: -1;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 0 auto;
  }
}
</style>
