<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Shipment ID</th>
          <th>Weight (kg)</th>
          <th>Distance (km)</th>
          <th>Pickup Time</th>
          <th>Drop Off Time</th>
          <th>CO2 Emission</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="shipment.shipment_id" v-for="shipment in shipments">
          <td>{{ shipment.shipment_id }}</td>
          <td>{{ shipment.weight_kg }}</td>
          <td>{{ shipment.distance_km }}</td>
          <td>{{ shipment.pickup_time }}</td>
          <td>{{ shipment.dropoff_time }}</td>
          <td>{{ shipment.co2_emission }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Shipments",
  props: {
    shipments: Array,
  },
};
</script>
<style>
table {
  width: 100%;
  border: 2px solid rgb(200, 200, 200);
  border-collapse: collapse;
}
thead > tr {
  border-bottom: 1px solid rgb(190, 190, 190);
}
th,
td {
  border-left: 1px solid rgb(190, 190, 190);
  border-right: 1px solid rgb(190, 190, 190);
}
</style>
