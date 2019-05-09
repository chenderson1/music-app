import express from "express";
const albumRoutes = express.Router();
import {
  postAlbum,
  getAlbumsByUserId,
  getAlbumById,
  deleteAlbum
} from "../controllers/albumControllers";

//by user id
albumRoutes
  .route("/:_id")
  .get(getAlbumsByUserId)
  .post(postAlbum);

albumRoutes
  .route("/album/:_id")
  .get(getAlbumById)
  .delete(deleteAlbum);

module.exports = albumRoutes;
