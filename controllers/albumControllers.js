import mongoose from "mongoose";
import Album from "../models/album";
import User from "../models/user";

export const getAlbumsByUserId = async (req, res, next) => {
  try {
    const albums = await Album.find({ user: req.user._id });
    return res.status(200).send(albums);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

export const getAlbumById = async (req, res, next) => {
  try {
    const album = await Album.findOne({
      _id: req.params._id,
      user: req.user._id
    });
    return res.status(200).send(album);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

export const postAlbum = async (req, res, next) => {
  try {
    //create new album from model
    const newAlbum = new Album(req.body);
    // add user objId to album
    newAlbum.user = mongoose.Types.ObjectId(req.user._id);
    //save new album to DB
    const album = await newAlbum.save(newAlbum);
    // user.findoneandupdate to  push album into favAlbums array of Related User
    const updatedUser = await User.findOneAndUpdate(
      { _id: album.user },
      { $push: { favAlbums: mongoose.Types.ObjectId(album._id) } },
      { new: true }
    );

    console.log(updatedUser);
    return res.status(200).send(album);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

export const deleteAlbum = async (req, res, next) => {
  try {
    //find and delete album
    const album = await Album.findOneAndRemove({
      id: req.params.id,
      user: req.user._id
    });
    //find related user and remove album from albums array
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $pull: { favAlbums: mongoose.Types.ObjectId(album._id) } }
    );
    // console.log(updatedUser.albums, album._id);
    console.log(updatedUser.albums, album._id);

    return res.status(200).send(album);
  } catch (err) {
    res.status(500);
    next(err);
  }
};
