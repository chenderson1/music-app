import styled from "styled-components";
import { Link } from "react-router-dom";
import { below } from "../utilities/mediaQueries";

export const MainNav = styled.div`
  background-color: #232a35;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9vh;
  margin-bottom: 8vh;

  & h2,
  p {
    color: white;
  }

  & img {
    height: 50px;
    width: 50px;
    margin-left: 1vw;
  }
  ${below.small`
  height: 24vh;
    flex-flow: column;
    justify-content: center;
    align-items: center;

  `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  ${below.small`
  margin-bottom: 1vh;

  `}
`;
export const StyledTrackLink = styled(StyledLink)`
  color: yellow;
  font-size: 1.2rem;
`;
