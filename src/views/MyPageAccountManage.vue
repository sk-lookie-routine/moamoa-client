<template>
  <div class="main-container">
    <div class="title">
      <p>계정 관리</p>
      <div class="box--underline"></div>
    </div>
    <div class="manage-box">
      <div class="account-email">
        <p>{{ this.$store.state.auth.email }}</p>
        <div class="box--underline"></div>
      </div>
      <div class="account-policy">
        <p>개인정보 처리방침</p>
        <div class="box--underline"></div>
      </div>
      <div class="account-conditions">
        <p>이용약관</p>
        <div class="box--underline"></div>
      </div>
      <div class="logout" @click="logout">
        <p>로그아웃</p>
        <div class="box--underline"></div>
      </div>
      <div class="withdrawal" @click="isClicked = true">
        <p>회원 탈퇴</p>
        <div class="box--underline"></div>
      </div>
    </div>
  </div>
  <!-- modal -->
  <div class="modal" v-if="isClicked">
    <div class="modal-bg"></div>
    <div class="modal-box">
      <div
        class="button-close"
        @click="
          isCancled = true;
          isClicked = false;
        "
      >
        <img src="@/assets/img/icon_close.svg" />
      </div>
      <div class="select-withdrawal">
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
      <div class="real-withdrawal" v-if="isClickedWithdrawal">
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
  <the-footer></the-footer>
</template>

<script>
import { deleteUser } from '@/api/auth.js';
export default {
  data() {
    return {
      isClicked: false,
      isCancled: false,
      isClickedWithdrawal: false,
    };
  },
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push('/login');
    },
    async onClickWithdrawal() {
      this.isClicked = true;
      const data = {
        userId: this.$store.state.auth.userId,
        username: this.$store.state.auth.username,
        image: this.$store.state.auth.image,
        email: this.$store.state.auth.email,
        userInfo: this.$store.state.auth.userInfo,
        userSeq: this.$store.state.auth.userSeq,
        userType: this.$store.state.auth.userType,
      };
      await deleteUser(data);
    },
    onClickCancel() {
      this.isCancled = true;
      this.isClicked = false;
    },
    onClickConfirm() {
      //회원탈퇴, state 초기화 및 홈으로 이동
      if (this.$store.state.auth.providerType == 'KAKAO') {
        window.Kakao.API.request({
          url: '/v1/user/unlink',
        });
      } else if (this.$store.state.auth.providerType == 'GOOGLE') {
        const authInst = window.gapi.auth2.getAuthInstance();
        authInst.signOut();
      }
      this.$store.commit('initUser');
      this.$store.commit('logout');
      this.$router.push('/home');
    },
  },
};
</script>

<style scoped>
.main-container {
  margin-top: 12.2rem;
}
.box--underline {
  margin-top: 1rem;
}
.title p {
  font-size: 2.2rem;
  color: var(--black);
  font-family: Spoqa Han Sans Neo;
  font-weight: bold;
}
.manage-box {
  margin-top: 6.8rem;
}
.manage-box p:hover:not(.account-email) {
  cursor: pointer;
}
.account-email p,
.account-policy p,
.account-conditions p,
.logout p,
.withdrawal p {
  font-size: 1.8rem;
  color: var(--black);
  margin-top: 4.8rem;
}
.withdrawal p {
  color: var(--gray02);
}
.cancel-button,
.withdrawal-button {
  width: 8.4rem;
  height: 4.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
}
.buttons {
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 0 auto;
}
.confirm-button {
  width: 18rem;
  height: 4.4rem;
  box-shadow: none;
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
.button-close {
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
}
.button-close:hover {
  cursor: pointer;
}
@media (max-width: 768px) {
  .title p {
    font-size: 2rem;
  }
  .manage-box {
    margin-top: 4.4rem;
  }
  .account-email p,
  .account-policy p,
  .account-conditions p,
  .logout p,
  .withdrawal p {
    font-size: 1.4rem;
    margin-top: 3rem;
  }
  .modal-box {
    top: 50%;
    left: 50%;
    width: 27rem;
    height: 25rem;
  }
  .modal-box-contents p {
    font-size: 1.4rem;
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
