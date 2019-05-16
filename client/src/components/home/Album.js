import React from "react";
import { Link } from "react-router-dom";
import { StyledAlbum } from "../../elements/card";
import { StyledTrackLink } from "../../elements/nav";

const Album = props => {
  return (
    <StyledAlbum>
      <div
        style={{
          display: "flex",
          flexFlow: "column"
        }}
      >
        <StyledTrackLink to={`/album/${props.id}`}>
          <span>{props.title}</span>
        </StyledTrackLink>
        <span style={{ color: "white" }}>{props.artist.name}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end"
        }}
      >
        <img
          className="fav-icon"
          src={require("../../resources/icons8-plus.svg")}
          alt="add"
          onClick={() => props.postAlbum({ ...props })}
        />
        <img
          className="fav-icon"
          src={require("../../resources/minus.svg")}
          alt="minus"
          onClick={() => props.deleteAlbum({ ...props })}
        />
      </div>
      <img src={props.cover} alt={props.title} />
      {/* <button onClick={() => props.postTrack({ ...props })}>+</button>
     <button onClick={() => props.deleteTrack({ ...props })}>-</button> */}
    </StyledAlbum>
  );
};

export default Album;
