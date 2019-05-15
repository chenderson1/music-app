import mongoose from "mongoose";
import User from "../models/user";

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user._id });
    return res.status(200).send(user);
  } catch (err) {
    res.status(500);
    next(err);
  }
};
