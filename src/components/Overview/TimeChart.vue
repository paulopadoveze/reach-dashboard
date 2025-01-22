
<template>
  <div>
    <apexchart
      :options="chartOptions"
      :series="series"
      :type="type"
      :height="height"
    />
  </div>
</template>

<script setup>
	import {ref, onMounted} from 'vue';
	import ApexCharts from "vue3-apexcharts";

	const props = defineProps({
	  series: {
	    type: Array,
	    required: true,
	  },
	  height: {
	  	type: String,
	  	required: true
	  },
	  type: {
	  	type: String,
	  	required: true
	  }
	});

	const chartOptions = ref({
	  chart: {
	    toolbar: {
	      show: false
	    },
      zoom: {
        enabled: false,
        allowMouseWheelZoom: false,
      }
	  },
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
	        return val;
	      }
	    }
	  },
	});
</script>


