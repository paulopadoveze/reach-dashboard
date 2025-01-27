<template>
  <a href="" class="video-card -small"@click.prevent="visible = true" >
    <div class="video-card__thumb">
      <video :src="draftData.playbackUrl"></video>
    </div>
    <span class="video-card__influencer-name">{{ draftData.author.username }}</span>
    <span class="video-card__timestamp"> {{ formatTimestamp(draftData.draftTime) }}</span>
  </a>

  <Dialog v-model:visible="visible"  pt:root:class="video-modal" >
    <template #header></template>
    <div class="modal-video__container">
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
    </div>
    <template #footer>
        <Button label="Cancel" class="btn btn-primary"   @click="visible = false" autofocus />
        <Button label="Save" class="btn btn-primary"  @click="visible = false" autofocus />
    </template>
  </Dialog>

</template>

<script setup>
  import { ref } from 'vue';

  const visible = ref(false);
  const comment = ref('');

  const props = defineProps({
    draftData: {
      type: Object,
      required: true
    }
  });

  // Open the modal
  // Handle approval
  const approveVideo = () => {
    modalVisible.value = false;
  };

  // Handle rejection
  const rejectVideo = () => {
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
  .modal-video__container {

  }
</style>
