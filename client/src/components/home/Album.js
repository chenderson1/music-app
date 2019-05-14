import React from "react";
import { Link } from "react-router-dom";

const Album = props => {
  return (
    <div>
      <Link to={`/album/${props.id}`}>{props.title}</Link>
      <br />
      <button onClick={() => props.postAlbum({ ...props })}>+</button>
      <button onClick={() => props.deleteAlbum({ ...props })}>-</button>
    </div>
  );
};

export default Album;
