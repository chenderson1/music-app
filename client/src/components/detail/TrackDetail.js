import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class TrackDetail extends React.Component {
  state = {
    track: {}
  };

  getTrack = async id => {
    const res = await axios.get(`/deezer/track/${id}`);
    this.setState({ track: res.data });
  };

  async componentDidMount() {
    await this.getTrack(this.props.match.params.id);
  }

  render() {
    const {
      title,
      artist,
      duration,
      release_date,
      bpm,
      album
    } = this.state.track;
    return (
      <div>
        {album && <img src={album.cover} alt={title} />}
        <h1>
          title: <br /> {title}
        </h1>
        <p>
          artist: <br />
          {artist && artist.name}
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
          bpm: <br />
          {bpm}
        </p>
        <section />
      </div>
    );
  }
}

export default withRouter(TrackDetail);
