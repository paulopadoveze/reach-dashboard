<template>
  <div href="" class="influencer-card" :class="influencerStatus">
    <div class="influencer-card__header">
       <img src="../public/mockData/influencer-thumb.png" alt="" class="influencer-card__image">
    </div>
    <div class="influencer-card__content">
      <h5 class="influencer__username">@notcoratilley</h5>
      <h6 class="influencer__name">cora </h6>
      <ul class="influencer-rates">
        <li class="influencer-rates__item">
          <span class="value">2M</span>
          <span class="label">followers</span>
        </li>
        <li class="influencer-rates__item">
          <span class="value">12.5%</span>
          <span class="label">Engagement rate</span>
        </li>
        <li class="influencer-rates__item">
          <span class="value">120k</span>
          <span class="label">Average views</span>
        </li>
      </ul>

      <div class="influencer-rate">
        $1200
      </div>


      <div class="influencer-status">
        <div class="status-label">
          Waiting for draft
        </div>
      </div>
    </div>
  </div>
    
</template>


<script setup>

  const props = defineProps({
    influencerStatus: {
      type: Object,
      required: true
    },
    influencerData: {
      type: Object,
      required: true
    }
  });
</script>


<style scoped>

</style>
