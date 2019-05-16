import styled from "styled-components";

export const StyledTrackInfo = styled.div`
  margin: 3vh 0;
  padding: 5vh;
  width: 100%;
  background-color: white;
  display: flex;
  flex-flow: column;
  align-items: center;
  border-top: black 3px;
  border-bottom: black 3px;

  & p span {
    color: #36324d;
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 1vw;
  }
  & h2 {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: bold;
  }
`;
export const StyledAlbumInfo = styled(StyledTrackInfo)`
  background-color: white;
`;
