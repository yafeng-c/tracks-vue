<template>
  <h1>CO2 Emissions</h1>
  <div class="date-container">
    <h3 style="margin-right: 5px">Start</h3>
    <datepicker v-model="picked1" style="margin-right: 15px" />
    <h3 style="margin-right: 5px">End</h3>
    <datepicker v-model="picked2" style="margin-right: 15px" />
    <button @click="handleClick(picked1, picked2)">Query</button>
  </div>
  <Shipments :shipments="shipments" />
</template>

<script>
import Shipments from "./components/Shipments.vue";
import Datepicker from "vue3-datepicker";
import { ref } from "vue";
const picked = ref(new Date());
export default {
  name: "App",
  components: { Shipments, Datepicker },
  data() {
    return {
      shipments: [],
      picked1: null,
      picked2: null,
    };
  },
  methods: {
    async fetchShipments(picked1, picked2) {
      const res = await fetch(
        `http://localhost:5000/shipmentsbetween/${picked1.toISOString()}/${picked2.toISOString()}`
      );
      const data = await res.json(res);
      return data;
    },
    async handleClick(picked1, picked2) {
      this.shipments = await this.fetchShipments(picked1, picked2);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.date-container {
  display: flex;
  align-items: center;
}
</style>
