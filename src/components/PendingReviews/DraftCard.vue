<template>
  <a href="" class="video-card -small" @click.prevent="openModal">
    <div class="video-card__thumb">
      <video :src="draftData.playbackUrl"></video>
    </div>
    <span class="video-card__influencer-name">{{ draftData.author.username }}</span>
    <span class="video-card__timestamp"> {{ formatTimestamp(draftData.draftTime) }}</span>
  </a>

  <CModal v-model:visible="modalVisible" size="lg"  @close="() => { modalVisible = false }">
    <CModalHeader>
      <CButton close aria-label="Close" @click="closeModal">
        <svg data-v-ea55b58c="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-44dd5d02=""><path d="M5.05762 5.0575L18.9426 18.9425" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.9424 5.0575L5.05738 18.9425" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </CButton>
    </CModalHeader>
    <CModalBody class="video-modal__container">
      <!-- Video Section -->
      <div class="modal-video">
        <video :src="draftData.playbackUrl" controls></video>
      </div>
      <!-- Info Section -->
      <div class="modal-info">
        <div class="p-field">
        <label for="comment">Comment:</label>
        <textarea v-model="comment" id="comment" rows="3" cols="30"></textarea>
      </div>
      <div>
        <Button label="Approve" @click="approveVideo" class="p-button-success" />
        <Button label="Reject" @click="rejectVideo" class="p-button-danger" />
      </div>
      </div>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="closeModal">Close</CButton>
    </CModalFooter>
  </CModal>

</template>

<script setup>
  import { ref } from 'vue';
  import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/vue';

  const modalVisible = ref(false);
  const comment = ref('');

  const props = defineProps({
    draftData: {
      type: Object,
      required: true
    }
  });

  // Open the modal
  
  function openModal() {
    modalVisible.value = true;
  }

  function closeModal() {
    modalVisible.value = false;

  }



  // Handle approval
  const approveVideo = () => {
    console.log('Video approved');
    console.log('Comment:', comment.value);
    modalVisible.value = false;
  };

  // Handle rejection
  const rejectVideo = () => {
    console.log('Video rejected');
    console.log('Comment:', comment.value);
    modalVisible.value = false;
  };

  // Format timestamp
  function formatTimestamp(timestamp) {
    const now = Date.now() / 1000; // Current time in seconds
    const diffInSeconds = now - timestamp; // Difference in seconds

    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;

    let timeAgo = '';

    if (diffInSeconds < secondsInMinute) {
      timeAgo = `${Math.floor(diffInSeconds)}s ago`; // Seconds
    } else if (diffInSeconds < secondsInHour) {
      timeAgo = `${Math.floor(diffInSeconds / secondsInMinute)}m ago`; // Minutes
    } else if (diffInSeconds < secondsInDay) {
      timeAgo = `${Math.floor(diffInSeconds / secondsInHour)}h ago`; // Hours
    } else {
      timeAgo = `${Math.floor(diffInSeconds / secondsInDay)} days ago`; // Days
    }

    return `sent ${timeAgo}`;
  }
</script>

<style scoped>
  .video-card {
    cursor: pointer;
  }
</style>
