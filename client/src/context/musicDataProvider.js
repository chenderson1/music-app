import React, { Component } from "react";
import axios from "axios";
const TrackAxios = axios.create();

TrackAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const { Provider, Consumer } = React.createContext();

//set state to userObj and token from current user session or initialize
export class MusicDataProvider extends Component {
  state = {
    popTracks: [],
    popAlbums: []
  };
  getPopTracks = async () => {
    const res = await axios.get("/deezer/popTracks");
    const { tracks, albums } = res.data;
    this.setState({ popTracks: tracks.data, popAlbums: albums.data });
  };

  postTrack = async track => {
    const res = await TrackAxios.post("/api/tracks", track);
    alert(`"${res.data.title}" has been added to your favorites`);
  };
  deleteTrack = async track => {
    const res = await TrackAxios.delete(`/api/tracks/${track.id}`);
    alert(`"${res.data.title}"has been removed to your favorites`);
  };
  postAlbum = async album => {
    const res = await TrackAxios.post("/api/albums", album);
    alert(`"${res.data.title}" has been added to your favorites`);
  };
  deleteAlbum = async album => {
    const res = await TrackAxios.delete(`/api/albums/${album.id}`);
    alert(`"${res.data.title}"has been removed to your favorites`);
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          getPopTracks: this.getPopTracks,
          postTrack: this.postTrack,
          deleteTrack: this.deleteTrack,
          postAlbum: this.postAlbum,
          deleteAlbum: this.deleteAlbum
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default MusicDataProvider;

export const withMusicData = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);
