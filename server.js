const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://sang:<1234>@cluster0.ftx0e.mongodb.net/sang")

app.listen(3000, function() {
    console.log("express server is running on port 3000");
})

