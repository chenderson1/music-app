import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Track from "../../components/home/Track";
import { StyledTrackDetail } from "../../elements/styledTrackDetail";
import { StyledAlbumInfo } from "../../elements/styledTrackInfo";
import { StyledTrackList } from "../../elements/styledTrackList";
import TrackList from "../../components/TrackList";

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
      title,
      artist,
      label,
      duration,
      release_date,
      record_type,
      tracks,
      cover_xl
    } = this.state.album;
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
          src={cover_xl}
          alt={title}
        />
        <StyledAlbumInfo>
          <h2>{title}</h2>
          <p>
            <span>artist:</span>
            {artist && artist.name}
          </p>
          <p>
            <span>label:</span>
            {label}
          </p>
          <p>
            <span>duration:</span>
            {duration}
          </p>
          <p>
            <span>realease:</span>
            {release_date}
          </p>
          <p>
            <span>Type:</span>
            {record_type}
          </p>
        </StyledAlbumInfo>

        <StyledTrackList>
          <h2 style={{ color: "white", textTransform: "uppercase" }}>
            tracklist{" "}
          </h2>
          {tracks &&
            tracks.data.map((track, i) => (
              <TrackList {...track} key={track.title + i} />
            ))}
        </StyledTrackList>
      </StyledTrackDetail>
    );
  }
}

export default withRouter(AlbumDetail);
