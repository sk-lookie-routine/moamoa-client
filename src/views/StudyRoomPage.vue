<template>
  <div>
    <div v-if="room" class="room main-container">
      <div class="room-header">
        <div class="box--underline bottom-padding">
          <h1>{{ room.title }}</h1>
        </div>
      </div>
      <div class="room-contents">
        <div class="room-content">
          <h2>스터디 기간</h2>
          <div class="box--gray-background">
            <p>{{ room.startDate }}~{{ room.endDate }}</p>
          </div>
        </div>
        <div class="room-content">
          <h2>스터디 목표 & 소개</h2>
          <div class="box--gray-background">
            <p class="p-text--red">{{ room.goal }}</p>
            <p>
              {{ room.info }}
            </p>
          </div>
        </div>
        <div class="room-content">
          <h2>스터디 진행 방식</h2>
          <div class="box--gray-background">
            <p>
              {{ room.how }}
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
                  <a target="_blank" :href="room.linkStudy">
                    {{ room.linkStudy }}
                  </a>
                </p>
              </div>
            </li>
            <li class="link-container">
              <h3>🔗 스터디 일지</h3>
              <div class="box--gray-background">
                <p>
                  <a target="_blank" :href="room.linkNotion">
                    {{ room.linkNotion }}
                  </a>
                </p>
              </div>
            </li>
            <li class="link-container">
              <h3>🔗 오픈 채팅</h3>
              <div class="box--gray-background">
                <p>
                  <a target="_blank" :href="room.linkChat">
                    {{ room.linkChat }}
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="room-content">
          <h2>태그</h2>
          <div class="tags-container">
            <span class="tag-icon">#</span>
            <ul v-if="room.hashTags.length > 0" class="tags">
              <li v-for="(tag, index) in room.hashTags" :key="index">
                <base-tag>{{ tag }}</base-tag>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="main-container">
      <h2 class="study-mate-title">스터디 메이트</h2>
      <ul class="study-mate-list">
        <study-mate
          :id="user.userSeq"
          :imgSrc="user.image"
          :nickname="user.username"
        ></study-mate>
        <li v-for="mate in studyMateList" :key="mate.joinSeq">
          <study-mate
            :id="mate.joinSeq"
            :imgSrc="mate.image"
            :nickname="mate.username"
          ></study-mate>
        </li>
      </ul>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import { fetchPostById } from '@/api/posts.js';
import { getUserByUserSeq } from '@/api/user.js';
import { fetchApprovedJoinByStudySeq } from '@/api/join.js';
import StudyMate from '@/components/views/studyroom/StudyMate.vue';

export default {
  components: {
    StudyMate,
  },
  data() {
    return {
      studySeq: null,
      user: null,
      room: null,
      studyMateList: [],
    };
  },
  methods: {
    async fetchData() {
      const roomResponse = await fetchPostById(this.studySeq);
      this.room = roomResponse.data.content[0];
      const userResponse = await getUserByUserSeq(this.room.userSeq);
      this.user = userResponse.data.content[0];
      const joinResponse = await fetchApprovedJoinByStudySeq(this.studySeq);
      const list = await Promise.all(
        joinResponse.data.content.map(async item => {
          const res = await getUserByUserSeq(item.userSeq);
          const mate = {
            ...item,
            image: res.data.content[0].image,
            username: res.data.content[0].username,
          };
          return mate;
        }),
      );
      this.studyMateList = list;
      console.log(this.user);
      console.log(this.studyMateList);
    },
  },
  created() {
    this.studySeq = this.$route.params.roomId;
    this.fetchData();
  },
};
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

.tags-container {
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

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
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
