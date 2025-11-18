import express from "express";
import connect from "./db.js/connectDb.js";
import userRoute from "./routes/userRoutes.js"

const app = express();
const PORT = 8000;
app.use(express.json());
connect();
app.get("/", (req, res) => {
    res.send("Welcome to The NodeJS express");
})

app.use("/api/users", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

