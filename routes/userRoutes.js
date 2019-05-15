import express from "express";
const userRoutes = express.Router();
import { getUser } from "../controllers/userControllers";
//get all User Albums
userRoutes.route("/").get(getUser);

module.exports = userRoutes;
