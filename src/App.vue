<template>
  <header class="main-header">
    <div class="container">
      <div class="main-header__logo"><img src="" alt=""></div>
    </div>
  </header>
  <div class="container">
    <header class="campaign__header">

      <div class="brand__header">
        <img src="/mockdata/sponsor-thumb.png" class="brand__image">
        <div class="brand__info">
          <h1 class="heading-1 brand__title">Na Na (Sped Up Version)</h1>
          <h4 class="brand__name">Sponsored by <strong>Reach</strong></h4>
        </div>
      </div>

      <div class="header-stats">
        <div class="header-stats__controls">

          <Button type="button" :class="'header-stats__control'"  @click="toggle">
            <template #icon>
              <svg width="18" height="18" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.65681 2.40104C5.91714 2.40104 4.50684 3.78849 4.50684 5.5C4.50684 7.21147 5.91714 8.59896 7.65681 8.59896C9.39654 8.59896 10.8068 7.21147 10.8068 5.5C10.8068 3.78849 9.39654 2.40104 7.65681 2.40104ZM5.58684 5.5C5.58684 4.37531 6.51359 3.46354 7.65681 3.46354C8.8001 3.46354 9.72681 4.37531 9.72681 5.5C9.72681 6.62469 8.8001 7.53646 7.65681 7.53646C6.51359 7.53646 5.58684 6.62469 5.58684 5.5Z" fill="#8F00FF"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.65676 0.1875C4.55216 0.1875 1.87827 1.99823 0.656641 4.60403C0.390169 5.1724 0.390169 5.82775 0.656641 6.39618C1.87827 9.00193 4.55216 10.8126 7.65676 10.8126C10.7613 10.8126 13.4352 9.00193 14.6569 6.39618C14.9234 5.82775 14.9234 5.1724 14.6569 4.60403C13.4352 1.99823 10.7613 0.1875 7.65676 0.1875ZM1.63735 5.049C2.68971 2.80429 4.99044 1.25 7.65676 1.25C10.3231 1.25 12.6238 2.80429 13.6761 5.049C13.8102 5.33503 13.8102 5.66511 13.6761 5.95114C12.6238 8.19585 10.3231 9.75014 7.65676 9.75014C4.99044 9.75014 2.68971 8.19585 1.63735 5.95114C1.50327 5.66511 1.50327 5.33503 1.63735 5.049Z" fill="#8F00FF"/>
              </svg>
            </template>
          </Button>
          <Menu ref="menu" :popup="true" class="menu-popover">
            <template #start>
              <h6 class="heading-6">Toggle financial info</h6>
              <label class="switch">
                <input
                  :checked="isBudgetEnabled"
                  type="checkbox"
                  @change="updateIsBudgetEnabled"
                />
                <span class="slider"></span>
                <span class="label">Budget</span>
              </label>
              <label class="switch">
                <input
                  :checked="isCurrentCPMEnabled"
                  type="checkbox"
                  @change="updateIsCurrentCPMEnabled"
                />
                <span class="slider"></span>
                <span class="label">Current CPM</span>
              </label>
            </template>
          </Menu>
          
        </div>
        
        <div class="card-stat current-cpm" v-if="isCurrentCPMEnabled">
          <h5 class="heading-6 card-stat__title">Current CPM</h5>
          <p class="heading-4 card-stat__value">$2.52</p>

          <p class="cpm__projected-value">Projected: <strong>$3.12</strong></p>
         
        </div>

        <div class="card-stat budget" v-if="isBudgetEnabled">
          <h5 class="heading-6 card-stat__title">Budget</h5>
          <p class="heading-4 card-stat__value">$150,000.00</p>

          <div class="budget__progress">
            <ul class="budget-values">
              <li class="budget-values__item">
                Spent: $55,000.00
              </li>
              <li class="budget-values__item">
                Remaining : $94,450.00
              </li>
            </ul>
             <div class="progress">
              <div class="progress__bar" style="width: 37%;"><span class="progress__value" >37%</span></div>
            </div>
          </div>

        </div>

      </div>

    </header>
  </div>
  <div class="container">
      
  <nav class="main-nav">
    <ul>
      <li><a class="main-nav__link" href="">Overview</a></li>
      <li><a class="main-nav__link" href="">Pending reviews</a></li>
      <li><a class="main-nav__link" href="">Delivered posts</a></li>
      <li><a class="main-nav__link" href="">Creators</a></li>
    </ul>
  </nav>

  <Overview />
  <PendingReviewsList />
  <DeliveredPosts />
  <CreatorList />

  </div>

</template>

<script setup>
  import { ref, onMounted, defineEmits, computed } from 'vue';
  import { useStore } from 'vuex';
  import { mapGetters, mapActions } from 'vuex';
  import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/vue';
  import Menu from 'primevue/menu';
  import Button from 'primevue/button';
  import Ripple from 'primevue/ripple';

  // Components
  import Overview from "./components/Overview/Overview.vue";
  import CreatorList from "./components/Creator/CreatorList.vue";
  import PendingReviewsList from "./components/PendingReviews/PendingReviewsList.vue";
  import DeliveredPosts from "./components/Delivered/DeliveredPosts.vue";


  // Reactive References
  const totalStats = ref(null);
  const dropdownMenu = ref(false);
  const menu = ref();
  const popoverRef = ref();

  // Store Computed Values
  const store = useStore();
  const isBudgetEnabled = computed(() => store.getters.isBudgetEnabled);
  const isCurrentCPMEnabled = computed(() => store.getters.isCurrentCPMEnabled);

  // Methods
  const updateIsBudgetEnabled = (event) => {
    store.dispatch('updateIsBudgetEnabled', event.target.checked);
  };

  const updateIsCurrentCPMEnabled = (event) => {
    store.dispatch('updateIsCurrentCPMEnabled', event.target.checked);
  };

  const toggleDropdown = (event) => {
    if (popoverRef.value) {
      popoverRef.value.toggle(event);
    }
  };

  const calculateTotalStats = (data) => {
    return data.reduce((acc, item) => {
      const stats = item.tiktokPost.stats;
      acc.viewCount += stats.viewCount;
      acc.likeCount += stats.likeCount;
      acc.commentCount += stats.commentCount;
      acc.shareCount += stats.shareCount;
      return acc;
    }, { viewCount: 0, likeCount: 0, commentCount: 0, shareCount: 0 });
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  // Ripple Effect
  const vRipple = Ripple;

  // Menu Toggle
  const toggle = (event) => {
    menu.value.toggle(event);
  };


</script>

