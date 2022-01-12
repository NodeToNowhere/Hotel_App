const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");
const cors = require("cors");

app.use(express.json());
app.use(cors());

MongoClient.connect("mongodb://localhost:27017", {
  useUnifiedTopology: true,
})
  .then((client) => {
    const db = client.db("hotel_db");
    const bookingCollection = db.collection("bookings");
    const bookingsRouter = createRouter(bookingCollection);
    app.use("/bookings", bookingsRouter); // Possibly change url?
  })
  .catch(console.error);

  app.listen(5000, function () {
    console.log(`Listening on port ${ this.address().port }`);  // USE BACK TICKS FOR STRING INTERPOLATION
  });

