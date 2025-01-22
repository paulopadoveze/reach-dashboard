import { createApp } from 'vue'
import './assets/css/style.scss'
import App from './App.vue'
import PrimeVue from "primevue/config";
import { useStore } from 'vuex';
import store from './stores/stores'
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App)
app.use(store)
app.use(PrimeVue)
app.use(VueApexCharts)
app.mount('#app')
