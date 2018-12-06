"use strict";

const express = require("express");
const app = express();
const routes = require("./spotify.js");
const port = process.env.PORT || 5000;

app.use(express.static("./dev/public"))
app.use(express.json());
app.use("/", routes);


app.listen(port, _ => console.log("The server is running."));