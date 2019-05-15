import React, { Component } from "react";
import { withMusicData } from "../../context/musicDataProvider";
import PoptracksList from "./PoptracksList";

export class Home extends Component {
  state = {
    popTracks: []
  };

  async componentDidMount() {
    await this.props.getPopTracks();
    this.setState({
      popTracks: this.props.popTracks,
      popAlbums: this.props.popAlbums
    });
  }

  render() {
    const {
      popTracks,
      popAlbums,
      postTrack,
      deleteTrack,
      postAlbum,
      deleteAlbum
    } = this.props;

    return (
      <div>
        <h1>HOME</h1>
        <PoptracksList
          deleteTrack={deleteTrack}
          postTrack={postTrack}
          postAlbum={postAlbum}
          deleteAlbum={deleteAlbum}
          popTracks={popTracks}
          popAlbums={popAlbums}
        />
      </div>
    );
  }
}

export default withMusicData(Home);
