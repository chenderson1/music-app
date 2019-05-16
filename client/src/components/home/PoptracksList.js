import React from "react";
import Track from "./Track";
import Album from "./Album";
import { StyledHeading2 } from "../../elements/StyledHeading";
import { StyledList } from "../../elements/styledList";

const PoptracksList = props => {
  // console.log(props.popTracks.data);
  const mappedTracks = props.popTracks.map((track, i) => {
    return (
      <Track
        {...track}
        key={track.title + i}
        postTrack={props.postTrack}
        deleteTrack={props.deleteTrack}
      />
    );
  });
  const mappedAlbums = props.popAlbums.map((track, i) => {
    return (
      <Album
        {...track}
        key={track.title + i}
        postAlbum={props.postAlbum}
        deleteAlbum={props.deleteAlbum}
      />
    );
  });
  return (
    <StyledList>
      <div>
        <StyledHeading2>Top Tracks</StyledHeading2>
        {mappedTracks}
      </div>
      <div>
        <StyledHeading2>Top Albums</StyledHeading2>
        {mappedAlbums}
      </div>
    </StyledList>
  );
};

export default PoptracksList;
