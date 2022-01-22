<template>
  <div
    class="card"
    :class="{ 'card--small': isSmall }"
    @mouseover="onMouseOver"
    @mouseleave="onMouseleave"
  >
    <base-badge
      class="card__badge"
      v-if="joinType"
      :joinType="joinType"
    ></base-badge>
    <div class="card__thumbnail" :class="{ 'card__thumbnail--smail': isSmall }">
      <!-- "@/assets/img/profile/profile_sc_p.svg" -->
      <img :src="imgUrl" />
    </div>
    <div class="card__contents">
      <div class="title-and-btn-container">
        <div class="card__title">{{ title }}</div>
        <div v-if="hasMoreBtn" class="card__more-btn">
          <img src="@/assets/img/icon_more.svg" />
          <div class="card__delete-btn">삭제</div>
        </div>
      </div>
      <div class="card__period">{{ startDate }} ~ {{ endDate }}</div>
      <div v-if="!isSmall" class="card__people">
        <img class="person-icon" src="@/assets/img//icon_person.svg" />
        <div class="card__people-count">
          {{ peopleRegisterCount }}/{{ peopleTotalCount }}
        </div>
      </div>
      <ul v-if="hashTags.length > 0" class="card__tags">
        <li v-for="(tag, index) in hashTags" :key="index">
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
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    peopleRegisterCount: {
      type: Number,
    },
    peopleTotalCount: {
      type: Number,
    },
    hashTags: {
      type: Array,
      required: true,
    },
    hasMoreBtn: {
      type: Boolean,
      default: false,
    },
    joinType: {
      type: String,
      default: null,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isHover: true,
      imgUrl: require('@/assets/img/profile/' + this.imgSrc + '.svg'),
      hasHashTags: false,
    };
  },
};
</script>

<style scoped>
.card {
  position: relative;
  width: 100%;
  height: 20rem;
  box-shadow: 0.1rem 0.1rem 1rem rgba(170, 170, 170, 0.25);
  border-radius: 2rem;
  padding: 3.6rem;
  display: flex;
  justify-content: space-between;
}

.card--small {
  height: 15.6rem;
  padding: 2.8rem;
}

.card:hover {
  cursor: pointer;
}

.card__badge {
  position: absolute;
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

.card__thumbnail--smail {
  width: 16%;
  min-width: 15rem;
  margin-right: 2rem;
}

.card__thumbnail--smail img {
  width: 10rem;
  height: 10rem;
}

.card__contents {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.4rem;
}

.title-and-btn-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__title {
  font-size: 1.8rem;
  line-height: 122%;
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

@media (max-width: 1024px) {
  .card__title {
    font-size: 1.6rem;
  }

  .card__period,
  .card__people-count {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .card {
    height: 15.6rem;
    padding: 3.4rem 3.6rem;
  }

  .card__thumbnail,
  .card__people {
    display: none;
  }

  .card__contents {
    gap: 1.3rem;
  }
}
</style>
