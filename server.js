import express from "express";
import "colors";
import { config } from "dotenv";
config();
import morgan from "morgan";
import mongoose from "mongoose";

const port = process.env.PORT;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

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

//global error handler
app.use((err, req, res, next) => {
  console.error(err);
  return res.send({ errMsg: err.message });
});

//server listen
app.listen(port, () =>
  console.log(`The Magic Happened on Port:${port}`.random)
);
