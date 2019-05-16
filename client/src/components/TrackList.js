import React from "react";
import { withMusicData } from "../context/musicDataProvider";
import { StyledTrack } from "../elements/card";
import { StyledTrackLink } from "../elements/nav";

const TrackList = props => {
  return (
    <div>
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
          <span style={{ color: "white" }}>
            {props.artist && props.artist.name}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
          }}
        >
          <span style={{ color: "yellow" }}>
            Rank: <span style={{ color: "white" }}> {props.rank} </span>{" "}
          </span>
          <img
            className="fav-icon"
            src={require("../resources/icons8-plus.svg")}
            alt="add"
            onClick={() => props.postTrack({ ...props })}
          />
          <img
            className="fav-icon"
            src={require("../resources/minus.svg")}
            alt="minus"
            onClick={() => props.deleteTrack({ ...props })}
          />
        </div>
      </StyledTrack>
    </div>
  );
};

export default withMusicData(TrackList);
