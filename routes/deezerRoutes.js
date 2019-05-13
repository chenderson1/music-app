import express from "express";
const deezerRoutes = express.Router();
import { getPopTracks } from "../controllers/deezerControllers";

deezerRoutes.route("/popTracks").get(getPopTracks);
deezerRoutes.route("/search").get();
deezerRoutes.route("/track/:id").get();
deezerRoutes.route("/album/:id").get();

module.exports = deezerRoutes;
