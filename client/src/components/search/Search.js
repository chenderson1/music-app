import React, { Component } from "react";
import { withMusicData } from "../../context/musicDataProvider";
import SearchForm from "./SearchForm";
import axios from "axios";
import Track from "../home/Track";
import { StyledHeading2 } from "../../elements/StyledHeading";
import { StyledSearchList, StyledList } from "../../elements/styledList";

export class Search extends Component {
  state = {
    searchText: "",
    tracks: []
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState(p => {
      return {
        [name]: value
      };
    });
  };

  getSearchTracks = async e => {
    e.preventDefault();
    const res = await axios.get(`/deezer/search?q=${this.state.searchText}`);
    this.setState({ tracks: res.data.data });
  };

  render() {
    const mappedTracks = this.state.tracks.map((track, i) => {
      return (
        <Track
          {...track}
          key={track.title + i}
          postTrack={this.props.postTrack}
          deleteTrack={this.props.deleteTrack}
        />
      );
    });

    return (
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center"
        }}
      >
        <StyledHeading2>Search</StyledHeading2>
        <SearchForm
          handleChange={this.handleChange}
          searchText={this.state.searchText}
          getTracks={this.getTracks}
          getSearchTracks={this.getSearchTracks}
        />
        <StyledSearchList>{mappedTracks}</StyledSearchList>
      </div>
    );
  }
}

export default withMusicData(Search);
