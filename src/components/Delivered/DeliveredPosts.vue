<template>
  <section class="blade -has-controls">

    <div class="header-with-controls">
      <h2 class="heading-3">Delivered Posts <span class="heading__badge">{{postsList.length}}</span></h2>

      <div class="section__controls">
        <div class="btn-group">
          <button class="btn btn-primary" :class="{'is--active': postView === 'grid'}" @click="displayGridView()">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.2 0H7C8.21503 0 9.2 0.984974 9.2 2.2V7C9.2 8.21503 8.21503 9.2 7 9.2H2.2C0.984973 9.2 0 8.21503 0 7V2.2C0 0.984973 0.984974 0 2.2 0ZM2.2 1.2C1.64772 1.2 1.2 1.64772 1.2 2.2V7C1.2 7.55228 1.64772 8 2.2 8H7C7.55228 8 8 7.55229 8 7V2.2C8 1.64772 7.55229 1.2 7 1.2H2.2Z" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4 0H17.2C18.415 0 19.4 0.984974 19.4 2.2V7C19.4 8.21503 18.415 9.2 17.2 9.2H12.4C11.1849 9.2 10.2 8.21503 10.2 7V2.2C10.2 0.984973 11.1849 0 12.4 0ZM12.4 1.2C11.8477 1.2 11.4 1.64772 11.4 2.2V7C11.4 7.55228 11.8477 8 12.4 8H17.2C17.7522 8 18.2 7.55229 18.2 7V2.2C18.2 1.64772 17.7522 1.2 17.2 1.2H12.4Z" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.2 10.2H7C8.21503 10.2 9.2 11.1849 9.2 12.4V17.2C9.2 18.415 8.21503 19.4 7 19.4H2.2C0.984973 19.4 0 18.415 0 17.2V12.4C0 11.1849 0.984974 10.2 2.2 10.2ZM2.2 11.4C1.64772 11.4 1.2 11.8477 1.2 12.4V17.2C1.2 17.7522 1.64772 18.2 2.2 18.2H7C7.55228 18.2 8 17.7522 8 17.2V12.4C8 11.8477 7.55229 11.4 7 11.4H2.2Z" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4 10.2H17.2C18.415 10.2 19.4 11.1849 19.4 12.4V17.2C19.4 18.415 18.415 19.4 17.2 19.4H12.4C11.1849 19.4 10.2 18.415 10.2 17.2V12.4C10.2 11.1849 11.1849 10.2 12.4 10.2ZM12.4 11.4C11.8477 11.4 11.4 11.8477 11.4 12.4V17.2C11.4 17.7522 11.8477 18.2 12.4 18.2H17.2C17.7522 18.2 18.2 17.7522 18.2 17.2V12.4C18.2 11.8477 17.7522 11.4 17.2 11.4H12.4Z" />
            </svg>
          </button>
          <button class="btn btn-primary" :class="{'is--active': postView === 'table'}" @click="displayTableView()">
            <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5625 6C3.5625 5.58579 3.89829 5.25 4.3125 5.25H20.3125C20.7267 5.25 21.0625 5.58579 21.0625 6C21.0625 6.41421 20.7267 6.75 20.3125 6.75H4.3125C3.89829 6.75 3.5625 6.41422 3.5625 6Z" />
              <path d="M3.5625 18C3.5625 17.5858 3.89829 17.25 4.3125 17.25H20.3125C20.7267 17.25 21.0625 17.5858 21.0625 18C21.0625 18.4142 20.7267 18.75 20.3125 18.75H4.3125C3.89829 18.75 3.5625 18.4142 3.5625 18Z" />
              <path d="M4.3125 11.25C3.89829 11.25 3.5625 11.5858 3.5625 12C3.5625 12.4142 3.89829 12.75 4.3125 12.75H20.3125C20.7267 12.75 21.0625 12.4142 21.0625 12C21.0625 11.5858 20.7267 11.25 20.3125 11.25H4.3125Z" />
            </svg>
          </button>
        </div>
      </div>

    </div>

    <section v-if="postView == 'grid'">
      <ul class="video-card__list">
        <li v-for="post in postsDisplayed">
          <PostCard :postData="post.tiktokPost" />
        </li>
      </ul>
    </section>

    <section v-if="postView == 'table'">
        
      <DataTable :value="postsDisplayed" :showGridlines="true">
        <Column field="tiktokPost.author.username" sortable header="Username" />
        <Column field="tiktokPost.author.username" sortable header="Username" />
        <Column field="tiktokPost.stats.viewCount" sortable header="Views" />
        <Column field="tiktokPost.stats.likeCount" sortable header="Likes" />
        <Column field="tiktokPost.stats.commentCount" sortable header="Comments" />
        <Column field="tiktokPost.stats.shareCount" sortable header="Shares" />
      </DataTable>

    </section>

  </section>

  <div class="controls-right">
    <button class="btn btn-primary" v-if="postsDisplayed.length !== postsList.length" @click="showMore">Show More</button>
  </div>
  
</template>

<script setup>
  
  import { ref, onMounted, computed } from 'vue';
  import { useStore } from 'vuex';

  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import Row from 'primevue/row';

  import PostCard  from "../../components/Delivered/PostCard.vue"

  const store = useStore();
  const postsList = computed(() => store.getters.deliveredPosts);

  const postView = ref('grid');

  function displayGridView(){
    postView.value = 'grid'
  }

  function displayTableView(){
    postView.value = 'table'
  }

  const initialLimit = 16;

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




