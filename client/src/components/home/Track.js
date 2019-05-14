import React from "react";
import { Link } from "react-router-dom";

const Track = props => {
  return (
    <div>
      <Link to={`/track/${props.id}`}>{props.title}</Link>
      <br />
      <button onClick={() => props.postTrack({ ...props })}>+</button>
      <button onClick={() => props.deleteTrack({ ...props })}>-</button>
    </div>
  );
};

export default Track;
