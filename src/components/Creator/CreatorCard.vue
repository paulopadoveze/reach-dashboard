<template>
  <div href="" class="creator-card" :class="creatorData.statusClass">
    <div class="creator-card__header">
      <img src="/mockdata/influencer-thumb.png" alt="" class="creator-card__image">
    </div>
    <div class="creator-card__content">

      <h5 class="creator__username">{{creatorData.userName}}</h5>
      <h6 class="creator__name">{{creatorData.displayName}} </h6>

      <ul class="creator-rates">
        <li class="creator-rates__item">
          <span class="value">{{formatNumber(creatorData.followers)}}</span>
          <span class="label">followers</span>
        </li>
        <li class="creator-rates__item">
          <span class="value">{{creatorData.engagementRate}}</span>
          <span class="label">Engagement rate</span>
        </li>
        <li class="creator-rates__item">
          <span class="value">{{formatNumber(creatorData.averageViews)}}</span>
          <span class="label">Average views</span>
        </li>
      </ul>

      <div class="creator-rate">
        ${{creatorData.rates}}
      </div>

      <div class="creator-status">
        <div class="status-label">
          {{creatorData.status}}
        </div>
      </div>
    </div>
  </div>
    
</template>


<script setup>

  const props = defineProps({
    creatorData: {
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

</script>


<style scoped>

</style>
