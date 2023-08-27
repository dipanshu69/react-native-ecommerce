const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
    .connect(
        "mongodb+srv://deepanshupatil69:dipanshu@cluster0.mxyzn7i.mongodb.net/",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("connected to MongoDB");
    })
    .catch((err) => {
        console.error(`connection error ${err}`);
    });


app.listen(port, () => {
    console.log(`server running on http://localhost:${port}/`);
})