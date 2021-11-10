<template>
  <section class="banner">
    <div class="banner-background"></div>
    <div class="contents-container">
      <div class="banner-title-and-btn-container">
        <h1 class="banner__title">
          <span class="banner__title--highlighted">
            스터디 개설부터 관리까지 -</span
          ><br />
          <span class="banner__title--highlighted"
            >마음에 맞는 스터디 메이트를
            <span class="banner__title--color">모아모아</span>!
          </span>
        </h1>
        <button class="banner__btn">
          모집/참여 방법
          <div class="btn-icon">
            <div class="btn-icon__bottom-line"></div>
            <div class="btn-icon__arrow"></div>
          </div>
        </button>
      </div>
      <div class="banner-img-container">
        <img
          class="banner__img"
          src="@/assets/img/img_student_study.svg"
          alt="배너 이미지"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  margin-top: 7rem;
  padding: 8.3rem 3rem 3.2rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.banner-background {
  background-color: var(--gray06);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
}

.contents-container {
  width: 121.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.banner-title-and-btn-container {
  margin-bottom: 4rem;
}

h1 {
  margin-top: 0;
}

.banner__title {
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 147%;
  margin-bottom: 2.4rem;
}

.banner__title--highlighted {
  position: relative;
}

.banner__title--highlighted:before,
.banner__title--highlighted:after {
  content: ' ';
  height: 2.7rem;
  position: absolute;
  bottom: 0.4rem;
}

.banner__title--highlighted:before {
  width: calc(100% + 2rem);
  background: #e6e7ec;
  z-index: -2;
  left: -1rem;
}

.banner__title--highlighted:after {
  width: calc(100% + 1.4rem);
  background: var(--gray05);
  z-index: -1;
  left: -0.7rem;
  -webkit-transform: skew(-2deg);
  -moz-transform: skew(10deg);
  -o-transform: skew(10deg);
}

.banner__title--color {
  color: var(--orange-dark);
}

.banner__btn {
  border: 1px solid var(--orange-dark);
  border-radius: 3.2rem;
  padding: 1.6rem 2.1rem 1.6rem 1.7rem;
  margin-left: -1rem;
  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 1.8rem;
  color: var(--orange-dark);
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.btn-icon {
  margin-left: 0.6rem;
  margin-top: 0.1em;
  position: relative;
  width: 3.45rem;
  height: 1.05rem;
}

.btn-icon__bottom-line {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  border-bottom: 1px solid var(--orange-dark);
}

.btn-icon__arrow {
  position: absolute;
  height: 145%;
  bottom: -10%;
  right: 15%;
  border-right: 1px solid var(--orange-dark);
  transform: rotate(-45deg);
}

@media (max-width: 1200px) {
  section {
    padding: 6.7rem 2rem 3.6rem 2rem;
  }

  .contents-container {
    width: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .banner-title-and-btn-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }

  .banner__title {
    font-size: 2rem;
    text-align: center;
    line-height: 160%;
  }

  .banner__title--highlighted:before,
  .banner__title--highlighted:after {
    height: 1.64rem;
    bottom: 0rem;
  }

  .banner__title--highlighted:before {
    width: calc(100% + 1rem);
    left: -0.5rem;
  }

  .banner__title--highlighted:after {
    width: calc(100% + 0.4rem);
    left: -0.2rem;
  }

  .banner__btn {
    padding: 1.25rem 1.5rem 1.25rem 1.05rem;
    margin-left: 0rem;
    font-size: 1.4rem;
  }

  .btn-icon {
    margin-left: 0.3rem;
    width: 2.4rem;
    height: 0.7rem;
  }

  .banner__img {
    width: 32.9rem;
    height: 22.3rem;
  }
}

@media (max-width: 1024px) {
  section {
    margin-top: 5.2rem;
  }
}

@media (max-width: 768px) {
  section {
    padding-bottom: 1.8rem;
  }
}
</style>
