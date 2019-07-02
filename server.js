import express from "express";
import "colors";
import { config } from "dotenv";
config();
import morgan from "morgan";
import mongoose from "mongoose";
import expressJwt from "express-jwt";
import albumRoutes from "./routes/albumRoutes";
import trackRoutes from "./routes/trackRoutes";
import deezerRoutes from "./routes/deezerRoutes";
import userRoutes from "./routes/userRoutes";

const port = process.env.PORT;

const app = express();
const path = require("path");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "client", "build")));

//app use

//connect to DB
mongoose.connect(
  process.env.MongoDB_URI,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  () => {
    console.log("Connected to the DB".rainbow);
  }
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//user login/signup routes
app.use("/auth", require("./routes/authRoutes"));
//every /api route request jwt will verify token
app.use("/api", expressJwt({ secret: process.env.SECRET }));

//resource routes
app.use("/api/albums", albumRoutes);
app.use("/api/tracks", trackRoutes);
app.use("/api/user", userRoutes);
//public routes
app.use("/deezer", deezerRoutes);

//global error handler
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    // express-jwt gives the 401 status to the err object for us
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

//server listen
app.listen(port, () =>
  console.log(`The Magic Happened on Port:${port}`.random)
);
