<template>
	<a href="" class="video-card" @click.prevent="openModal">
    <div class="video-card__thumb">
      <video :src="postData.video.playbackUrl" ></video>
    </div>
    <span class="heading-6 video-card__creator-name">{{postData.author.username}}</span>
    <ul class="video-card__stats">
        <li class="video-card-stat">
          <span class="video-card-stat__label">engagement </span>
          <span class="video-card-stat__value">{{engagementCalculator(postData.stats)}}%</span>
        </li>
        <li class="video-card-stat">
          <span class="video-card-stat__label">views </span>
          <span class="video-card-stat__value">{{formatNumber(postData.stats.viewCount)}}</span>
        </li>
    </ul>
  </a>


  <Dialog v-model:visible="modalVisible"  pt:root:class="video-modal" >
    <template #header></template>
    <div class="modal-video__container">
      <div class="modal-video">
        <video :src="postData.video.playbackUrl" controls></video>
      </div>
      <!-- Info Section -->
      <div class="modal-info">
        <div class="modal-info">
          <h5 class="heading-5">{{ postData.author.username }}</h5>
          <p class="timestamp">Posted at {{formatTimestamp(postData.postTime)}}</p>
          <p><strong>Engagement:</strong> {{ engagementCalculator(postData.stats) }}%</p>
          <p><strong>Views:</strong> {{ formatNumber(postData.stats.viewCount) }}</p>
          <p><strong>Likes:</strong> {{ formatNumber(postData.stats.likeCount) }}</p>
          <p><strong>Comments:</strong> {{ formatNumber(postData.stats.commentCount) }}</p>
          <p><strong>Shares:</strong> {{ formatNumber(postData.stats.shareCount) }}</p>
        </div>
      </div>
    </div>
    <template #footer>
        <Button label="Ok" class="btn btn-primary"  @click="visible = false" autofocus />
    </template>
  </Dialog>


</template>

<script setup>
  import {ref, onMounted} from 'vue';
  import { useStore } from 'vuex';
  import  Dialog  from 'primevue/dialog';

  import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/vue';

  const modalVisible = ref(false);

  const props = defineProps({
    postData: {
      type: Object,
      required: true
    }
  });

  function formatNumber(value) {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    } else {
      return value.toString();
    }
  }

  function engagementCalculator(stats) {
    const engagement = ((stats.likeCount + stats.commentCount + stats.shareCount) / stats.viewCount) * 100;
    return engagement.toFixed(1);
  }

  function formatTimestamp(createdAt) {
    const now = new Date();
    const postDate = new Date(createdAt);

    const diffInSeconds = Math.floor((now - postDate) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInSeconds < 60) {
      return `agora`;
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}m`;
    } else if (diffInHours < 24) {
      return `${diffInHours}h`;
    } else if (diffInDays < 7) {
      return `${diffInDays}d`;
    } else {
      return postDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: postDate.getFullYear() === now.getFullYear() ? undefined : 'numeric'
      });
    }
  }


  function openModal() {
    modalVisible.value = true;
  }

  function closeModal() {
    modalVisible.value = false;

  }

</script>

<style scoped>


</style>

