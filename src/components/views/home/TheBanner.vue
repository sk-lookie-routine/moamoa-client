<template>
  <section class="banner">
    <div class="contents-container">
      <div class="banner-title-and-btn-container">
        <h1 class="banner__title">
          <span class="banner__title--highlighted">
            스터디 개설부터 관리까지 -<br />
            마음에 맞는 스터디 메이트를
            <span class="banner__title--color">모아모아</span>!
          </span>
        </h1>
        <button class="banner__btn">
          모집/참여 방법
          <img
            class="btn_icon"
            src="@/assets/img/icon_arrow.svg"
            alt="화살표 아이콘"
          />
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
  background-color: var(--gray04);
  margin-top: 7rem;
  padding: 8.3rem 2rem 3.2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contents-container {
  width: 121.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background: var(--gray05);
  position: relative;
}

.banner__title--color {
  color: var(--orange-dark);
}

.banner__btn {
  border: 1px solid var(--orange-dark);
  border-radius: 3.2rem;
  padding: 1.8rem 2.1rem 1.8rem 1.7rem;
  font-weight: bold;
  font-size: 1.8rem;
  color: var(--orange-dark);
}

.btn_icon {
  margin-left: 0.2rem;
}
</style>
