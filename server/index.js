import express from "express";
import connect from "./db.js/connectDb.js";

const app = express();
const PORT = 8000;
connect();
app.get("/", (req, res) => {
    res.send("Welcome to The NodeJS express");
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

