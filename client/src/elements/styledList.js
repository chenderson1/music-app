import styled from "styled-components";
import { below } from "../utilities/mediaQueries";

export const StyledList = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10vh;
  ${below.large`
    flex-flow: column;
  `}
`;
export const StyledSearchList = styled(StyledList)`
  flex-flow: column;
  justify-content: center;
`;
