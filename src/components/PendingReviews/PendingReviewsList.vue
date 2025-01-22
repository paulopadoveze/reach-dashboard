<template>
  <section class="blade -has-controls">
    <h2 class="heading-3">Pending review <span class="heading__badge -danger">{{postsList.length}}</span></h2>

    <ul class="video-card__list">
      <li v-for="post in postsList">
        <DraftCard :draftData="post.draft" />
      </li>
    </ul>
  </section>

</template>

<script setup>
  import {ref, onMounted, computed} from 'vue';
  import { useStore } from 'vuex';
  import DraftCard  from "../../components/PendingReviews/DraftCard.vue"

  const store = useStore();
  const postsList = computed(()=> store.getters.draftPosts);

</script>


<style scoped>

</style>




