import React from "react";
import Track from "./Track";
import Album from "./Album";

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
    <div>
      Pop Tracks:
      {mappedTracks}
      <br />
      <br />
      PopAlbums:
      {mappedAlbums}
    </div>
  );
};

export default PoptracksList;
