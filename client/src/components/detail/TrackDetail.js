import React from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import { StyledTrackDetail } from "../../elements/styledTrackDetail";
import { StyledTrackInfo } from "../../elements/styledTrackInfo";

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
      <StyledTrackDetail>
        <img
          style={{
            width: "50%",
            height: "50vh",
            objectFit: "fill",
            borderRadius: "5px",
            border: "transparent",
            boxShadow: "1px 1px 20px black"
          }}
          src={album && album.cover_xl}
          alt={title}
        />
        <StyledTrackInfo>
          <h2>{title}</h2>
          <p>
            <span className="label">artist:</span>
            {artist && artist.name}
          </p>
          <p>
            <span className="label">duration:</span>
            {duration}
          </p>
          <p>
            <span className="label">realease:</span>
            {release_date}
          </p>
          <p>
            <span className="label">bpm:</span>
            {bpm}
          </p>
          <Link
            to={`/album/${this.state.track.album && this.state.track.album.id}`}
          >
            <h3>{this.state.track.album && this.state.track.album.title}</h3>
          </Link>
        </StyledTrackInfo>
      </StyledTrackDetail>
    );
  }
}

export default withRouter(TrackDetail);
