import React from "react";
import Track from "./Track";
import Album from "./Album";

const PoptracksList = props => {
  // console.log(props.popTracks.data);
  const mappedTracks = props.popTracks.map((track, i) => {
    return <Track {...track} key={track.title + i} />;
  });
  const mappedAlbums = props.popAlbums.map((track, i) => {
    return <Track {...track} key={track.title + i} />;
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
