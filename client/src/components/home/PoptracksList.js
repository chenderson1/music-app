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
      <h2>Popular Tracks</h2>
      {mappedTracks}
      <br />
      <br />
      <h2>Popular Albums</h2>
      {mappedAlbums}
    </div>
  );
};

export default PoptracksList;
