const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51KJt38SCqFcunyA0FHVhiasGPh0jHLN4xTR1KzhSPaGtljpuV6Js8sJXhupWHyEs5mXKc9d8nBrgxiYKgpMR72rh00gTJEAVrB"
);

//api

//app config
const app = express();
//middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//api routes
app.get("/", (request, response) => response, status(200).send("hello world"));
//listen commands
exports.api = functions.https.onRequest(app);
