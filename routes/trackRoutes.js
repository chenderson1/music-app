import express from "express";
const trackRoutes = express.Router();
import {
  getTracksByUserId,
  postTrack,
  getTrackById,
  deleteTrack
} from "../controllers/trackControllers";

//get all User tracks
trackRoutes
  .route("/")
  .get(getTracksByUserId)
  .post(postTrack);
//get User track by Id
trackRoutes
  .route("/:id")
  .get(getTrackById)
  .delete(deleteTrack);

module.exports = trackRoutes;
