import styled from "styled-components";
import { below } from "../utilities/mediaQueries";

export const StyledTrack = styled.div`
  border: transparent;
  background: #050607b7;
  box-shadow: 1px 1px 20px #14181e;
  min-width: 36vw;
  max-width: 36vw;
  height: 14vh;
  border-radius: 5px;
  margin: 3vh auto;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: 10px;

  & img {
    width: 10vw;
    width: 10vw;
    height: 14vh;
    border: transparent;
    box-shadow: 1px 1px 20px #14181e;
    border-radius: 3px;
  }
  & .fav-icon {
    width: 5vw;
    height: 5vh;
    border: transparent;
  }
  ${below.large`
    min-width: 50vw;
  max-width: 50vw;

  `}
`;
export const StyledAlbum = styled(StyledTrack)`
  border: transparent;
  background: #050607b7;
  box-shadow: 1px 1px 20px #14181e;
  width: 36vw;
  height: 14vh;
  border-radius: 5px;
  margin: 3vh auto;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: 10px;

  & img {
    width: 10vw;
    height: 14vh;
    border: transparent;
    box-shadow: 1px 1px 20px #14181e;
    border-radius: 3px;
  }
  & .fav-icon {
    width: 5vw;
    height: 5vh;
    border: transparent;
  }
  &span {
  }
`;
