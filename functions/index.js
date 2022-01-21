const functions = require("firebase-functions");
const express = require("express");
// const cors = require("cors");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KJt38SCqFcunyA0FHVhiasGPh0jHLN4xTR1KzhSPaGtljpuV6Js8sJXhupWHyEs5mXKc9d8nBrgxiYKgpMR72rh00gTJEAVrB"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen commands
exports.api = functions.https.onRequest(app);

//http://localhost:5001/theshopppingstop/us-central1/api
