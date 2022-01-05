<template>
  <div class="main-container noselect">
    <div class="box--underline bottom-padding"><h1>스터디룸</h1></div>
    <div class="tabs-container">
      <base-tab firstTab="참여중인 스터디" secondTab="완료한 스터디"></base-tab>
    </div>
    <ul class="card-column-list card-list-gap">
      <li v-for="post in joiningStudyRooms" :key="post.id">
        <base-card
          :imgSrc="post.imgSrc"
          :title="post.title"
          :startDate="post.startDate"
          :endDate="post.endDate"
          :peopleRegisterCount="post.peopleRegisterCount"
          :peopleTotalCount="post.peopleTotalCount"
          :hashTags="post.tags"
        ></base-card>
      </li>
    </ul>
  </div>
  <the-footer></the-footer>
</template>

<script>
export default {};
</script>

<style scoped>
.tabs-container {
  margin: 9.2rem 0 2.4rem 0;
}

@media (max-width: 768px) {
  .tabs-container {
    margin-top: 4rem;
  }
}
</style>
