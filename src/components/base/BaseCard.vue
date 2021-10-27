<template>
  <div class="card" @mouseover="onMouseOver" @mouseleave="onMouseleave">
    <div class="card__thumbnail">
      <img src="@/assets/img/profile/profile_sc_p.svg" />
    </div>
    <div class="card__contents">
      <div class="title-and-btn-container">
        <div class="card__title">{{ title }}</div>
        <div v-if="hasMoreBtn" class="card__more-btn">
          <img src="@/assets/img/icon_more.svg" />
          <div class="card__delete-btn">삭제</div>
        </div>
      </div>
      <div class="card__period">{{ period }}</div>
      <div class="card__people">
        <img class="person-icon" src="@/assets/img//icon_person.svg" />
        <div class="card__people-count">
          {{ peopleRegisterCount }}/{{ peopleTotalCount }}
        </div>
      </div>
      <ul class="card__tags">
        <li v-for="(tag, index) in tags" :key="index">
          <base-tag>{{ tag }}</base-tag>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },
    peopleRegisterCount: {
      type: Number,
      required: true,
    },
    peopleTotalCount: {
      type: Number,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    hasMoreBtn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isHover: true,
    };
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 20rem;
  box-shadow: 0.1rem 0.1rem 1rem rgba(170, 170, 170, 0.25);
  border-radius: 2rem;
  padding: 3.6rem;
  display: flex;
  justify-content: space-between;
}

.card:hover {
  cursor: pointer;
}

.card__thumbnail {
  width: 16%;
  min-width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
}

.card__thumbnail img {
  width: 10.8rem;
  height: 10.8rem;
}

.card__contents {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title-and-btn-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__title {
  font-size: 1.8rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
}

.card__more-btn {
  width: 2.4rem;
  height: 2.4rem;
}

.card__period {
  font-size: 1.4rem;
  color: var(--gray02);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
}

.card__people {
  display: flex;
  align-items: center;
}

.person-icon {
  margin-right: 0.47rem;
}

.card__people-count {
  font-size: 1.4rem;
  color: var(--gray02);
}

.card__tags {
  width: 100%;
  height: 3.2358rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  overflow: hidden;
}

.card__tags::after {
  position: absolute;
  right: 0;
  content: '';
  width: 8rem;
  height: 100%;
  white-space: nowrap;
  background: linear-gradient(to right, transparent, rgb(255, 255, 255));
}

@media (max-width: 768px) {
  .card__thumbnail {
    display: none;
  }
}
</style>
