<template>
  <section class="blade -has-controls">
    <h2 class="heading-3">Pending review <span class="heading__badge -danger">{{postsList.length}}</span></h2>

    <ul class="video-card__list -small">
      <li v-for="post in postsDisplayed">
        <DraftCard :draftData="post.draft" />
      </li>
    </ul>

    <div class="controls-right">
      <button class="btn btn-primary" v-if="postsDisplayed.length !== postsList.length" @click="showMore">Show More</button>
    </div>
  </section>

</template>

<script setup>
  import {ref, onMounted, computed} from 'vue';
  import { useStore } from 'vuex';
  import DraftCard  from "../../components/PendingReviews/DraftCard.vue"

  const store = useStore();
  const postsList = computed(()=> store.getters.draftPosts);
  const initialLimit = 7;

  const postsDisplayed = ref([]);

  function showMore(){
    const currentLength = postsDisplayed.value.length;
    const nextBatch = postsList.value.slice(currentLength, currentLength + initialLimit);
    postsDisplayed.value = [...postsDisplayed.value, ...nextBatch];
  }

  onMounted(()=>{
    postsDisplayed.value = postsList.value.slice(0, initialLimit);
  })


</script>


<style scoped>

</style>




