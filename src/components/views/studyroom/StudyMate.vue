<template>
  <div @mouseleave="mouseLeave" class="study-mate">
    <div class="userinfo">
      <img
        :src="imgUrl"
        alt="스터디 메이트 프로필 이미지"
        class="profile-img"
        @click="showProfile"
      />
      <div class="nickname" :class="{ 'study-leader': isLeader }">
        {{ nickname }}
      </div>
    </div>
    <button
      v-if="!isLeader && showMoreMenu"
      @click="showMenu = !showMenu"
      class="more-btn"
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
    <div v-if="showMenu" class="menu">
      <div class="menu-item">
        <div class="menu-item--gray" @click="showProfile">프로필 보기</div>
      </div>
      <div class="menu-item"><div class="menu-item--red">스터디 탈퇴</div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    isLeader: {
      type: Boolean,
      required: false,
      default: false,
    },
    showMoreMenu: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      showMenu: false,
      showMoreMenuByHover: false,
      imgUrl: require('@/assets/img/profile/' + this.imgSrc + '.svg'),
    };
  },
  methods: {
    mouseLeave() {
      this.showMenu = false;
    },
    showProfile() {
      this.$emit('profileClicked');
    },
  },
};
</script>

<style scoped>
.study-mate {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;
  border-bottom: 0.05rem solid #dedede;
}

.userinfo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile-img {
  width: 4.4rem;
  height: 4.4rem;
  cursor: pointer;
}

.nickname {
  font-weight: bold;
  font-size: 1.4rem;
}

.more-btn {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.4rem 1rem;
  background-color: transparent;
}

.more-btn div {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: var(--gray02);
}

.menu {
  z-index: 1;
  background-color: white;
  width: 10.4rem;
  position: absolute;
  right: 2.4rem;
  top: 5.3rem;
  border: 1px solid var(--gray03);
  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(178, 178, 178, 0.25);
  display: flex;
  flex-direction: column;
}

.menu-item:not(:last-child) {
  border-bottom: 1px solid var(--gray03);
}

.menu-item {
  padding: 0.8rem 0;
}

.menu-item div {
  font-family: Spoqa Han Sans Neo;
  font-size: 1.2rem;
  text-align: center;
  padding: 0.4rem 0;
}

.menu-item--gray {
  color: var(--black);
}
.menu-item--gray:hover {
  background-color: #eff0f3;
}

.menu-item--red {
  color: var(--orange-dark);
}

.menu-item--red:hover {
  background-color: #ffdedc;
}

.study-leader {
  color: var(--orange);
}
</style>
