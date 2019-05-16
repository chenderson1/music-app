import React from "react";
import { Link } from "react-router-dom";
import { StyledTrack } from "../../elements/card";
import { StyledTrackLink } from "../../elements/nav";

const Track = props => {
  return (
    <StyledTrack>
      <div
        style={{
          display: "flex",
          flexFlow: "column"
        }}
      >
        <StyledTrackLink to={`/track/${props.id}`}>
          <span>{props.title}</span>
        </StyledTrackLink>
        <Link
          style={{ textDecoration: "none" }}
          to={`/album/${props.album && props.album.id}`}
        >
          <span style={{ color: "white" }}>
            {props.album && props.album.title}
          </span>
        </Link>
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
          onClick={() => props.postTrack({ ...props })}
        />
        <img
          className="fav-icon"
          src={require("../../resources/minus.svg")}
          alt="minus"
          onClick={() => props.deleteTrack({ ...props })}
        />
      </div>
      <img src={props.album && props.album.cover} alt={props.title} />
      {/* <button onClick={() => props.postTrack({ ...props })}>+</button>
      <button onClick={() => props.deleteTrack({ ...props })}>-</button> */}
    </StyledTrack>
  );
};

export default Track;
