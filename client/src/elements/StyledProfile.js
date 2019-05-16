import styled from "styled-components";

export const StyledProfile = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;

  & h1 {
    text-transform: uppercase;
    color: white;
    margin-bottom: 3vh;
  }
  & img {
    height: 23vh;
    width: 13vw;
    border-radius: 10px;
    box-shadow: 1px 1px 20px black;
  }
  & p {
    text-align: center;
    color: yellow;
  }
`;
