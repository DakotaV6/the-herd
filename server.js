"use strict";

const express = require("express");
const app = express();


app.use(express.json());

app.listen(3000, _ => console.log("The server is running."));