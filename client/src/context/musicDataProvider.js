import React, { Component } from "react";
import axios from "axios";

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

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          getPopTracks: this.getPopTracks
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
