import mongoose from "mongoose";
import Track from "../models/track";
import User from "../models/user";

export const getTracksByUserId = async (req, res, next) => {
  try {
    const tracks = await Track.find({ user: req.user._id });
    return res.status(200).send(tracks);
  } catch (err) {
    res.status(500);
    next(err);
  }
};
export const getTrackById = async (req, res, next) => {
  try {
    const track = await Track.findOne({
      _id: req.params._id,
      user: req.user._id
    });
    return res.status(200).send(track);
  } catch (err) {
    res.status(500);
    next(err);
  }
};
export const postTrack = async (req, res, next) => {
  try {
    //create new track from model
    const newTrack = new Track(req.body);
    // add user objId to track
    newTrack.user = mongoose.Types.ObjectId(req.user._id);
    //save new track to DB
    const track = await newTrack.save(newTrack);
    // user.findoneandupdate to  push track into favtracks array of Related User
    const updatedUser = await User.findOneAndUpdate(
      { _id: track.user },
      { $push: { favTracks: mongoose.Types.ObjectId(track._id) } },
      { new: true }
    );

    console.log(updatedUser);
    return res.status(200).send(track);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

export const deleteTrack = async (req, res, next) => {
  try {
    //find and delete track
    const track = await Track.findOneAndRemove({
      _id: req.params._id,
      user: req.user._id
    });
    //find related user and remove track from tracks array
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $pull: { favTracks: mongoose.Types.ObjectId(track._id) } }
    );
    // console.log(updatedUser.tracks, track._id);
    console.log(updatedUser.favTracks, track._id);

    return res.status(200).send(track);
  } catch (err) {
    res.status(500);
    next(err);
  }
};
