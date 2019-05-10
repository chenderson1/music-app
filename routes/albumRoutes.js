import express from "express";
const albumRoutes = express.Router();
import {
  postAlbum,
  getAlbumsByUserId,
  getAlbumById,
  deleteAlbum
} from "../controllers/albumControllers";
//get all User Albums
albumRoutes
  .route("/")
  .get(getAlbumsByUserId)
  .post(postAlbum);
//get User Album by Id
albumRoutes
  .route("/:_id")
  .get(getAlbumById)
  .delete(deleteAlbum);

module.exports = albumRoutes;
