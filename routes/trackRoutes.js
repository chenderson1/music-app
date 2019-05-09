import express from "express";
const trackRoutes = express.Router();
import {
  getTracksByUserId,
  postTrack,
  getTrackById,
  deleteTrack
} from "../controllers/trackControllers";

trackRoutes
  .route("/:_id")
  .get(getTracksByUserId)
  .post(postTrack);

trackRoutes
  .route("/track/:_id")
  .get(getTrackById)
  .delete(deleteTrack);

module.exports = trackRoutes;
