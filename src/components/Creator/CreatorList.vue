<template>

  <h2 class="heading-2">Creators <span class="heading__badge">{{creatorList.length}}</span></h2>

  <ul class="creator__list" v-if="creatorList.length > 0">
    <li v-for="creator in creatorList">
      <CreatorCard :creatorData="creator"/>
    </li>
  </ul>
  <div v-else>No creators assigned.</div>

</template>

<script setup>
  import {ref, onMounted, computed} from 'vue';
  import { useStore } from 'vuex'
  import CreatorCard  from "../../components/Creator/CreatorCard.vue"

  const store = useStore();
  const creatorList = computed(()=> store.getters.creators);

</script>


<style scoped>

</style>
