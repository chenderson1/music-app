import express from "express";
import "colors";
import { config } from "dotenv";
config();
import morgan from "morgan";
import mongoose from "mongoose";
import expressJwt from "express-jwt";

const port = process.env.PORT;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
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

//user login/signup routes
app.use("/auth", require("./routes/authRoutes"));
//every /api route request jwt will verify token
app.use("/api", expressJwt({ secret: process.env.SECRET }));
//main resourse routes

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
