import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class AlbumDetail extends React.Component {
  state = {
    album: {},
    isLoading: false
  };

  getAlbum = async id => {
    this.setState({ isLoading: true });
    const res = await axios.get(`/deezer/album/${id}`);
    this.setState({ album: res.data });
  };

  async componentDidMount() {
    await this.getAlbum(this.props.match.params.id);
    this.setState({ isLoading: false });
  }

  render() {
    const {
      cover,
      title,
      artist,
      label,
      duration,
      release_date,
      record_type,
      tracks,
      isLoading
    } = this.state.album;
    return (
      <div>
        <img src={cover} alt={title} />
        <h1>
          title: <br /> {title}
        </h1>
        <p>
          artist: <br />
          {artist && artist.name}
        </p>
        <p>
          label: <br />
          {label}
        </p>
        <p>
          duration: <br />
          {duration}
        </p>
        <p>
          realease: <br />
          {release_date}
        </p>
        <p>
          record_type: <br />
          {record_type}
        </p>
        <br />
        {isLoading && (
          <p>
            tracklist:
            {tracks && tracks.map(track => <h1>{track.title}</h1>)}
          </p>
        )}
      </div>
    );
  }
}

export default withRouter(AlbumDetail);
