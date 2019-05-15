import express from "express";
const deezerRoutes = express.Router();
import {
  getPopTracks,
  getTrack,
  getAlbum,
  getSearchTracks
} from "../controllers/deezerControllers";

deezerRoutes.route("/popTracks").get(getPopTracks);
deezerRoutes.route("/search").get(getSearchTracks);
deezerRoutes.route("/track/:id").get(getTrack);
deezerRoutes.route("/album/:id").get(getAlbum);

module.exports = deezerRoutes;
