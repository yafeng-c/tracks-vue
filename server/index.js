const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes
//get all shipments
app.get("/shipments", async (req, res) => {
  try {
    const shipments = await pool.query(
      "SELECT t1.shipment_id, t1.weight_kg, t1.distance_km, t1.pickup_time, t1.dropoff_time, t2.co2_emission FROM co2_emission_analytics.shipments t1 JOIN co2_emission_analytics.shipment_co2_emissions t2 ON t1.id = t2.shipment_id"
    );
    res.json(shipments.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//get shipments in a range
app.get("/shipmentsbetween/:start/:end", async (req, res) => {
  try {
    const shipments = await pool.query(
      "SELECT t1.shipment_id, t1.weight_kg, t1.distance_km, t1.pickup_time, t1.dropoff_time, t2.co2_emission FROM co2_emission_analytics.shipments t1 JOIN co2_emission_analytics.shipment_co2_emissions t2 ON t1.id = t2.shipment_id WHERE dropoff_time BETWEEN $1 AND $2 ORDER BY dropoff_time",
      [req.params.start, req.params.end]
    );
    res.json(shipments.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
