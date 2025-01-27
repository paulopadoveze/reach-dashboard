<template>
  <h2 class="heading-2">Creators <span class="heading__badge">{{creatorList.length}}</span></h2>

  <ul class="creator__list" v-if="creatorsDisplayed.length > 0">
    <li v-for="creator in creatorsDisplayed">
      <CreatorCard :creatorData="creator"/>
    </li>
  </ul>
  <div v-else><p>No creators assigned.</p></div>

  <div class="controls-right">
    <button class="btn btn-primary"  v-if="creatorsDisplayed.length !== creatorList.length" @click="showMore">Show More</button>
  </div>

</template>

<script setup>
  import {ref, onMounted, computed} from 'vue';
  import { useStore } from 'vuex'
  import CreatorCard  from "../../components/Creator/CreatorCard.vue"

  const store = useStore();
  const creatorList = computed(()=> store.getters.creators);
  
  const initialLimit = 7;

  const creatorsDisplayed = ref([]);

  function showMore(){
    const currentLength = creatorsDisplayed.value.length;
    const nextBatch = creatorList.value.slice(currentLength, currentLength + initialLimit);
    creatorsDisplayed.value = [...creatorsDisplayed.value, ...nextBatch];
  }

  onMounted(()=>{
    creatorsDisplayed.value = creatorList.value.slice(0, initialLimit);
  })

</script>


<style scoped>

</style>
