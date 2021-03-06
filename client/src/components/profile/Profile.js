import React, { Component } from "react";
import axios from "axios";
import Track from "../home/Track";
import Album from "../home/Album";
import { withMusicData } from "../../context/musicDataProvider";
import { StyledHeading2 } from "../../elements/StyledHeading";
import { StyledList } from "../../elements/styledList";
import { StyledProfile } from "../../elements/StyledProfile";

const FavTrackAxios = axios.create();

FavTrackAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export class Profile extends Component {
  state = {
    favTracks: [],
    favAlbums: [],
    user: {}
  };

  componentDidMount() {
    //get them tracks from api
    this.getTracks();
    this.getAlbums();
    this.getUser();
  }

  getTracks = async () => {
    const res = await FavTrackAxios.get(`/api/tracks/`);
    this.setState({ favTracks: res.data });
  };

  getAlbums = async () => {
    const res = await FavTrackAxios.get(`/api/albums/`);
    this.setState({ favAlbums: res.data });
  };
  getUser = async () => {
    const res = await FavTrackAxios.get(`/api/user/`);
    this.setState({ user: res.data });
  };

  render() {
    const { postTrack, deleteTrack, postAlbum, deleteAlbum } = this.props;
    //mapp over tracks and album to display below
    const mappedTracks = this.state.favTracks.map((track, i) => {
      return (
        <Track
          {...track}
          key={track.title + i}
          postTrack={postTrack}
          deleteTrack={deleteTrack}
        />
      );
    });

    const mappedAlbums = this.state.favAlbums.map((album, i) => {
      return (
        <Album
          {...album}
          key={album.title + i}
          postAlbum={postAlbum}
          deleteAlbum={deleteAlbum}
        />
      );
    });

    return (
      <div>
        <StyledProfile>
          <h1>Profile</h1>
          <div>
            <img src={this.state.user.imgUrl} alt="user" />
            <p>{this.state.user.name}</p>
            <p>{this.state.user.email}</p>
          </div>
        </StyledProfile>
        <StyledList>
          <div>
            <StyledHeading2>Fav Tracks</StyledHeading2>
            {mappedTracks}
          </div>
          <div>
            <StyledHeading2>Fav Albums</StyledHeading2>
            {mappedAlbums}
          </div>
        </StyledList>
      </div>
    );
  }
}

export default withMusicData(Profile);
