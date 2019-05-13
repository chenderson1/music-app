import express from "express";
import axios from "axios";

export const getPopTracks = async (req, res, next) => {
  try {
    const results = await axios.get("https://api.deezer.com/chart");
    res.send(results.data);
  } catch (err) {
    res.status(500);
    next(err);
  }
};
export const getSearchTracks = () => {};
