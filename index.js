const express = require("express");
const mongoose = require("mongoose")

const app = express();
const port = 2000;
const User = require("./model/user")


mongoose.connect("mongodb://localhost:27017/attendence", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection is successful"))
    .catch((err) => console.log("some err" + err));


app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/", async(req, res) => {
    const data = new User(req.body);
    await data.save();
    // res.send("save data")
    res.render("submi")
        // console.log(req.body);
})

app.get("/submited", (req, res) => {
    res.render("index")
})

// app.listen(2000)
app.listen((port), () => {
    console.log(`connection is done in port no. ${port}`);
})