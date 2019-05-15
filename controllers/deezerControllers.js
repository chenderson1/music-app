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
export const getTrack = async (req, res, next) => {
  try {
    const results = await axios.get(
      `https://api.deezer.com/track/${req.params.id}`
    );
    res.send(results.data);
  } catch (err) {
    res.status(500);
    next(err);
  }
};
export const getAlbum = async (req, res, next) => {
  try {
    const results = await axios.get(
      `https://api.deezer.com/album/${req.params.id}`
    );
    res.send(results.data);
  } catch (err) {
    res.status(500);
    next(err);
  }
};
export const getSearchTracks = async (req, res, next) => {
  try {
    const results = await axios.get(
      `https://api.deezer.com/search?q=${req.query.q}`
    );
    console.log(results.data);
    res.send(results.data);
  } catch (err) {
    res.status(500);
    next(err);
  }
};
