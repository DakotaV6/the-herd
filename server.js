"use strict";

const express = require("express");
const app = express();
const routes = require("./spotify.js");

app.use(express.static("./dev/public"))
app.use(express.json());
app.use("/", routes);


app.listen(3000, _ => console.log("The server is running."));