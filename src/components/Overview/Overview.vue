<template>
<section class="blade ">

  <h2 class="heading-3 section__title">Overview</h2>
  <h3 class="heading-5 section__subtitle">Campaign performance</h3>

  <section class="campaign__section">
    <Tabs value="0">
      <TabList class="campaign__chart-nav">
        <Tab value="0" class="chart-nav__anchor">
          <span class="value">3,110,200</span>
          <span class="label">Views</span>
        </Tab>
        <Tab value="1" class="chart-nav__anchor">
          <span class="value">347,060</span>
          <span class="label">Likes</span>
        </Tab>
        <Tab value="2" class="chart-nav__anchor">
          <span class="value">2,801</span>
          <span class="label">Comments</span>
        </Tab>
        <Tab value="3" class="chart-nav__anchor">
          <span class="value">5,122</span>
          <span class="label">Shares</span>
        </Tab>
        <Tab value="4" class="chart-nav__anchor">
          <span class="value">43</span>
          <span class="label">Creates</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
           <TimeChart :type="area" :height="400" :series="chartSeries" />
        </TabPanel>
        <TabPanel value="1">
           <TimeChart :type="area" :height="400" :series="chartSeries" />
        </TabPanel>
        <TabPanel value="2">
          <TimeChart :type="area" :height="400" :series="chartSeries" />
        </TabPanel>
        <TabPanel value="3">
          <TimeChart :type="area" :height="400" :series="chartSeries" />
        </TabPanel>
        <TabPanel value="4">
          <TimeChart :type="area" :height="400" :series="chartSeries" />
        </TabPanel>
      </TabPanels>
    </Tabs>
    <section class="campaign__performance-wrapper">
      <div class="campaign__chart"></div>
      <div class="campaign__month-stats">
        <h4 class="heading-5">Monthly performance</h4>
        <p>Comparing with last month</p>
        <div class="chart__stats">
            <span class="label">Tiktok</span>
            <span class="value">17,002</span>
            <span class="percentage">
              <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.75384 0.836246C6.15147 0.390608 6.84853 0.390608 7.24616 0.836246L12.3749 6.58423C12.95 7.22871 12.4925 8.25 11.6287 8.25H1.37125C0.507514 8.25 0.0500457 7.22871 0.625099 6.58423L5.75384 0.836246Z" fill="#8AEA92"/>
              </svg>
              +15,3%
            </span>
        </div>
        <div class="chart__stats">
            <span class="label">Instagram</span>
            <span class="value">987</span>
            <span class="percentage">
              <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.75384 0.836246C6.15147 0.390608 6.84853 0.390608 7.24616 0.836246L12.3749 6.58423C12.95 7.22871 12.4925 8.25 11.6287 8.25H1.37125C0.507514 8.25 0.0500457 7.22871 0.625099 6.58423L5.75384 0.836246Z" fill="#8AEA92"/>
              </svg>
              +5,3%
            </span>
        </div>
        <div class="chart__stats">
            <span class="label">Youtube</span>
             <span class="value">1439</span>
            <span class="percentage">
              <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.24616 8.16375C6.84853 8.60939 6.15147 8.60939 5.75384 8.16375L0.625101 2.41577C0.0500466 1.77129 0.507516 0.749999 1.37126 0.749999L11.6287 0.75C12.4925 0.75 12.95 1.77129 12.3749 2.41577L7.24616 8.16375Z" fill="#FF8181"/>
              </svg>
              -1,3%
            </span>
        </div>
      </div>
    </section>
  </section>
  <section class="speed__section">
    <div class="speed__chart">
      <apexchart type="area" height="120" :options="speedOptions" :series="speedSeries" />
    </div>
    <div class="speed__stats">
      <div class="chart__stats">
          <span class="label">Current speed</span>
          <span class="value">500</span>
          <span class="percentage">daily</span>
      </div>
    </div>
  </section>
  </section>
</template>

<script setup>
  import { ref } from 'vue';

  import Tabs from 'primevue/tabs';
  import TabList from 'primevue/tablist';
  import Tab from 'primevue/tab';
  import TabPanels from 'primevue/tabpanels';
  import TabPanel from 'primevue/tabpanel';

  import TimeChart from "../../components/Overview/TimeChart.vue"

  const generateCumulativeDataWithDates = (
      totalPoints = 100,
      initialValue = 10,
      maxIncrement = 2000,
      startDate = new Date()
    ) => {
      let data = [];
      let cumulativeValue = initialValue;

      for (let i = 0; i < totalPoints; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i); 

        const increment = Math.floor(Math.random() * maxIncrement) + 1;
        cumulativeValue += increment;

        data.push({
          x: date.toLocaleString('en-US', {
          month: 'short', 
          day: '2-digit',
          year: 'numeric', 
          hour: '2-digit',
          minute: '2-digit',
          hour12: true, 
        }), 
          y: cumulativeValue,
        });
      }

    return data;
  };

  const generateRandomData = (
    totalPoints = 100,
    minValue = 10,
    maxValue = 1000,
    startDate = new Date()
  ) => {
      let data = [];

      for (let i = 0; i < totalPoints; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i); // Increment the date by one day for each point

        // Generate a random value within the range
        const value = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

        data.push({
          x: date.toLocaleString('en-US', {
          month: 'short', // Abbreviated month (e.g., Feb)
          day: '2-digit', // Two-digit day
          year: 'numeric', // Full year
          hour: '2-digit', // Two-digit hour
          minute: '2-digit', // Two-digit minutes
          hour12: true, // 12-hour clock format
        }), // Format the date as YYYY-MM-DD
          y: value,
        });
      }

    return data;
  };

  const chartOptions = ref({
    chart: {
      id: 'vuechart-example',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false,
        allowMouseWheelZoom: false,
      }
    },
    colors: ['', '', ''],
    dataLabels: {
        enabled: false
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'MMM yyyy',  
      }
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy HH:mm'
      },
      y: {
        formatter: function (val) {
          return `Value: ${val}`;
        }
      }
    }
  });

  const chartSeries = ref([
     {
      name: 'Total Views',
      data: generateCumulativeDataWithDates(), 
      color: '#8F00FF', 
    },
    {
      name: 'Tik tok',
      data: generateCumulativeDataWithDates(), 
      color: '#FF0050'
    },
    {
      name: 'Instagram',
      data: generateCumulativeDataWithDates(), 
      color: '#515BD4'
    },
    {
      name: 'Youtube',
      data: generateCumulativeDataWithDates(), 
      color: '#CD201F'
    },
  ]);


  const speedOptions = ref({
    chart: {
      id: 'speed-performance-chart',
      type: 'line',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false,
        allowMouseWheelZoom: false,
      }
    },
    colors: ['#00FF99'],
    dataLabels: {
        enabled: false
    },
    stroke: {
      curve: 'stepline',
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'MMM yyyy',  // Display only month and year on the x-axis
      }
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy HH:mm'  // Show full date (day, month, year, and time) on hover
      },
      y: {
        formatter: function (val) {
          return `Value: ${val}`;
        }
      }
    },
  });

  const speedSeries = ref([
     {
      name: 'Total Views',
      data: generateRandomData(), // Data for the primary axis
    },
  ]);


</script>